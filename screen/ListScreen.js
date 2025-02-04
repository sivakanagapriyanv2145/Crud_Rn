import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

export default function ListScreen({ route, navigation }) {
    const [tasks, setTasks] = useState(route.params?.tasks||[]);
    useEffect(() => {
        if (route.params?.tasks) {
            setTasks(route.params.tasks);
        }
    },[route.params?.tasks]);

    const Edit=(index)=>{
        navigation.navigate("EditScreen", {tasks, index});
    };
    const Delete = (index) => {
        const updatedTasks = tasks.filter((_, i)=>i!==index);
        setTasks(updatedTasks);
        navigation.setParams({tasks:updatedTasks });
    };
    const AddTask=()=> {
        navigation.navigate("AddScreen",{ tasks });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Task List</Text>
            {tasks.length === 0 ? (
                <Text style={styles.emptyText}>No tasks added yet.</Text>
            ):(
                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.taskItem}>
                            <Text style={styles.taskText}>{item}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={() =>Edit(index)}
                                    style={styles.editButton}
                                >
                                    <Text style={styles.buttonText}>✏️ Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() =>Delete(index)}
                                    style={styles.deleteButton}
                                >
                                    <Text style={styles.buttonText}>❌ Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            )}
            <TouchableOpacity style={styles.addButton} onPress={AddTask}>
                <Text style={styles.addButtonText}>+ Add Task</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20,
        backgroundColor:"skyblue"
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    emptyText: {
        fontSize: 18,
        color: "gray",
        marginTop: 20,
    },
    taskItem: {
        backgroundColor: "#fff",
        padding: 20, // Increased padding
        marginVertical: 12, // More margin for spacing
        borderRadius: 10,
        width: "95%", // Increased width
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start", // Adjusted to align text to the start
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    taskText: {
        fontSize: 18,
        flex: 1,
        color: "#333",
        flexWrap: "wrap", // Allow text to wrap if it's too long
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10, // Added space between task text and buttons
    },
    editButton: {
        backgroundColor: "#FFD700", // Yellow color for edit
        padding: 8,
        borderRadius: 5,
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: "#FF6347", // Red color for delete
        padding: 8,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    addButton: {
        backgroundColor: "#32CD32", // Green color for add button
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        position: "absolute",
        bottom: 20,
        alignSelf: "center",
    },
    addButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
