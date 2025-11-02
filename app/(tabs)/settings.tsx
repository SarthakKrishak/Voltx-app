import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {
  User,
  Bell,
  Shield,
  Smartphone,
  Wifi,
  Battery,
  Moon,
  Globe,
  CircleHelp as HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react-native";
import { useState } from "react";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoConnect, setAutoConnect] = useState(true);

  const SettingItem = ({
    icon: Icon,
    title,
    subtitle,
    hasSwitch = false,
    switchValue,
    onSwitchChange,
    hasArrow = true,
    onPress,
  }: {
    icon: any;
    title: string;
    subtitle?: string;
    hasSwitch?: boolean;
    switchValue?: boolean;
    onSwitchChange?: (value: boolean) => void;
    hasArrow?: boolean;
    onPress?: () => void;
  }) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={onPress}
      disabled={hasSwitch}
    >
      <View style={styles.settingLeft}>
        <View style={styles.iconContainer}>
          <Icon size={20} color="#2d5530" />
        </View>
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{title}</Text>
          {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      <View style={styles.settingRight}>
        {hasSwitch ? (
          <Switch
            value={switchValue}
            onValueChange={onSwitchChange}
            trackColor={{ false: "#e5e7eb", true: "#22c55e" }}
            thumbColor={switchValue ? "#ffffff" : "#ffffff"}
          />
        ) : hasArrow ? (
          <ChevronRight size={16} color="#9ca3af" />
        ) : null}
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={["#e8f5e8", "#f0f9f0", "#e8f5e8"]}
      style={styles.container}
    >
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
          <Text style={styles.headerSubtitle}>Manage your EV preferences</Text>
        </View>

        {/* Profile Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <View style={styles.card}>
            <SettingItem
              icon={User}
              title="Account Settings"
              subtitle="Manage your profile and preferences"
            />
            <View style={styles.divider} />
            <SettingItem
              icon={Bell}
              title="Notifications"
              subtitle="Push notifications and alerts"
              hasSwitch={true}
              switchValue={notifications}
              onSwitchChange={setNotifications}
              hasArrow={false}
            />
          </View>
        </View>

        {/* Vehicle Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vehicle</Text>
          <View style={styles.card}>
            <SettingItem
              icon={Battery}
              title="Battery Management"
              subtitle="Charging preferences and limits"
            />
            <View style={styles.divider} />
            <SettingItem
              icon={Wifi}
              title="Connectivity"
              subtitle="Wi-Fi and mobile data settings"
            />
            <View style={styles.divider} />
            <SettingItem
              icon={Smartphone}
              title="Auto Connect"
              subtitle="Automatically connect to vehicle"
              hasSwitch={true}
              switchValue={autoConnect}
              onSwitchChange={setAutoConnect}
              hasArrow={false}
            />
          </View>
        </View>

        {/* App Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Settings</Text>
          <View style={styles.card}>
            <SettingItem
              icon={Moon}
              title="Dark Mode"
              subtitle="Switch to dark theme"
              hasSwitch={true}
              switchValue={darkMode}
              onSwitchChange={setDarkMode}
              hasArrow={false}
            />
            <View style={styles.divider} />
            <SettingItem
              icon={Globe}
              title="Language"
              subtitle="English (US)"
            />
            <View style={styles.divider} />
            <SettingItem
              icon={Shield}
              title="Privacy & Security"
              subtitle="Data protection and security settings"
            />
          </View>
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <View style={styles.card}>
            <SettingItem
              icon={HelpCircle}
              title="Help & Support"
              subtitle="FAQs and contact support"
            />
            <View style={styles.divider} />
            <SettingItem
              icon={LogOut}
              title="Sign Out"
              subtitle="Log out of your account"
              hasArrow={false}
            />
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#6b7280",
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 12,
  },
  card: {
    backgroundColor:"white",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(45, 85, 48, 0.1)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: "#6b7280",
  },
  settingRight: {
    marginLeft: 16,
  },
  divider: {
    height: 1,
    // backgroundColor: "rgba(229, 231, 235, 0.5)",
    marginLeft: 76,
  },
  bottomSpacer: {
    height: 120,
  },
});
