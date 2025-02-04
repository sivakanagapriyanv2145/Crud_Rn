import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useState } from "react";

export default function EditScreen({route,navigation }) {
    const {tasks=[], index } = route.params||{};
    const [editedTask, setEditedTask]=useState(tasks[index]);
    const handleSave=()=>{
        const updatedTasks=[...tasks];
        updatedTasks[index]=editedTask;
        navigation.navigate("ListScreen",{ tasks:updatedTasks});
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Task</Text>
            <TextInput
                value={editedTask}
                onChangeText={setEditedTask}
                style={styles.input}
                placeholder="Edit your task"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4", 
        padding: 20,
        backgroundColor:"skyblue"
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    input: {
        width: "90%", 
        padding: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        fontSize: 18,
        backgroundColor: "#fff",
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: "#32CD32", 
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        width: "80%",
        alignItems: "center",
    },
    saveButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
