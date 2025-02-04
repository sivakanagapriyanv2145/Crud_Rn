import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TaskListScreen from "./screen/ListScreen";
import EditScreen from "./screen/EditScreen";
import AddScreen from "./screen/AddTaskScreen";
const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator initialRouteName="ListScreen">
            <Tab.Screen
                name="ListScreen"
                component={TaskListScreen}
                options={{
                    tabBarIcon: () => <Text style={{ fontSize: 24 }}>📋</Text>, 
                }}
            />
            <Tab.Screen
                name="AddScreen"
                component={AddScreen}
                options={{
                    tabBarIcon: () => <Text style={{ fontSize: 24 }}>➕</Text>,
                }}
            />
            <Tab.Screen
                name="EditScreen"
                component={EditScreen}
                options={{
                    tabBarIcon: () => <Text style={{ fontSize: 24 }}>✏️</Text>,
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MainTabs />
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
