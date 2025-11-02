import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Tabs } from "expo-router";
import { User, Car, Settings } from "lucide-react-native";
import { BlurView } from "expo-blur";

export default function TabLayout() {
  return (
    <View style={styles.wrapper}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarBackground: () => (
            <BlurView
              intensity={60}
              tint="light"
              style={StyleSheet.absoluteFill}
            />
          ),
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.tabBarItem,
          tabBarActiveTintColor: "#1F4E25",
          tabBarInactiveTintColor: "#9AA8A0",
          tabBarShowLabel: false,
        }}
      >
        {/* Profile Tab */}
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={styles.iconWrapper}>
                <User size={22} color={color} />
                {focused && <View style={styles.activeDot} />}
              </View>
            ),
          }}
        />

        {/* Home Tab (center) */}
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={styles.iconWrapper}>
                <Car size={26} color={color} />
                {focused && <View style={styles.activeDot} />}
              </View>
            ),
          }}
        />

        {/* Settings Tab */}
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={styles.iconWrapper}>
                <Settings size={22} color={color} />
                {focused && <View style={styles.activeDot} />}
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#e8f5e8",
  },

  tabBar: {
    position: "absolute",
    marginLeft:20,
    marginRight: 20,
    paddingTop:12,
    bottom: 20,
    left: 20,
    right: 20,
    height: 65,
    borderRadius: 45,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderTopWidth: 0,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
    overflow: "hidden",
    paddingBottom: Platform.OS === "ios" ? 0 : 4,
  },

  tabBarItem: {
    justifyContent: "center",
    alignItems: "center",
  },

  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#000",
    marginTop: 4,
  },
});
