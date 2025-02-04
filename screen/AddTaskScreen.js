import {View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import {useState } from "react";


export default function AddScreen({route, navigation}) {
    const {tasks=[]}=route.params || {};
    const [newTask, setNewTask] = useState("");
    const Add =()=>{
        if (!newTask.trim())return;
        const updatedTasks=[...tasks, newTask];
        setNewTask(""); 
        navigation.navigate("ListScreen", { tasks:updatedTasks });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Task</Text>
            <TextInput
                placeholder="Enter new task"
                value={newTask}
                onChangeText={setNewTask}
                style={styles.input}
            />
            <TouchableOpacity style={styles.addButton} onPress={Add}>
                <Text style={styles.addButtonText}>+ Add Task</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F7F7F7",
        padding: 20,
        backgroundColor:"skyblue"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    input: {
        width: "80%",
        padding: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 18,
        backgroundColor: "#fff",
    },
    addButton: {
        backgroundColor: "#32CD32", 
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
    },
    addButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
