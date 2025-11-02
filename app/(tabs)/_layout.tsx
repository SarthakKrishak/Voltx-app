import React from "react";
import { View, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { User, Car, Settings } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#2d5530",
        tabBarInactiveTintColor: "#a0b5a4",
        tabBarShowLabel: false,
      }}
    >
      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              <User size={22} color={color} />
            </View>
          ),
        }}
      />

      {/* Home Tab (Car icon, centered and highlighted) */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={[
                styles.centerButton,
                { backgroundColor: focused ? "#d2f4dc" : "transparent" },
              ]}
            >
              <Car size={26} color={focused ? "#2d5530" : color} />
            </View>
          ),
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              <Settings size={22} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 15,
    left: 30,
    right: 30,
    height: 65,
    backgroundColor: "#D2EAE0",
    borderRadius: 40,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderTopWidth: 0,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 50,
    borderRadius: 30,
    top: -10,
  },
});
