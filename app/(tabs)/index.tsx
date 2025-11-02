import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Bell,Fan , BatteryFull, User } from "lucide-react-native";

export default function HomeScreen() {
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
          <Text style={styles.greeting}>Hi Sarthak,</Text>
          <View style={styles.headerRight}>
            <View style={styles.temperatureContainer}>
              <Text style={styles.temperature}>31°C</Text>
            </View>
            <TouchableOpacity style={styles.profileButton}>
              <Bell size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Vehicle Section */}
        <View style={styles.vehicleSection}>
          <Text style={styles.vehicleTitle}>Model abc</Text>
          <View style={styles.vehicleStatus}>
            <BatteryFull />
            <Text style={styles.statusText}>158km · Parked</Text>
          </View>
        </View>

        {/* Car Image */}
        <View style={styles.carImageContainer}>
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/045/721/138/non_2x/an-electric-scooter-on-transparent-background-free-png.png",
            }}
            style={styles.carImage}
            resizeMode="contain"
          />
        </View>

        {/* Stats Section */}
        <View style={styles.statsRow}>
          {/* Battery Card */}
          <View style={[styles.card, styles.batteryCard]}>
            <Text style={styles.cardTitle}>Battery</Text>
            <Text style={styles.cardSubtitle}>Last charge 1w ago</Text>

            <View style={styles.batteryContent}>
              {/* Battery Image */}
              <Image
                source={require("../../assets/images/battery.png")}
                style={styles.batteryImage}
                resizeMode="contain"
              />

              {/* Battery Text */}
              <View style={styles.batteryTextContainer}>
                <Text style={styles.batteryPercentage}>95%</Text>
                <Text style={styles.batteryCapacity}>180kw</Text>
              </View>
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            <View style={[styles.card, styles.infoCard]}>
              <Text style={styles.cardTitle}>Health</Text>
              <Text style={styles.infoValue}>89%</Text>
            </View>

            <View style={[styles.card, styles.infoCard]}>
              <Text style={styles.cardTitle}>Temprature</Text>
              <View style={styles.climateRow}>
                <Text style={styles.climateTemp}>28°</Text>
                <View style={styles.climateStatusContainer}>
                  <Fan size={14} color="#1C79FF" />
                  <Text style={styles.climateStatusText}>Cool</Text>
                </View>
              </View>
            </View>

            <View style={[styles.card, styles.infoCard]}>
              <Text style={styles.cardTitle}>Humidity</Text>
              <Text style={styles.infoValue}>20%</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollView: { flex: 1, paddingTop: 50 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  greeting: { fontSize: 25, fontWeight: "900", color: "#1f2937" },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 12 },
  temperatureContainer: {
    backgroundColor: "#000000",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 40,
  },
  temperature: { color: "white", fontSize: 14, fontWeight: "600" },
  profileButton: {
    backgroundColor: "#000000",
    padding: 6,
    borderRadius: 40,
  },

  vehicleSection: { paddingHorizontal: 24, marginBottom: 16 },
  vehicleTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: "#1f2937",
    marginBottom: 2,
  },
  vehicleStatus: { flexDirection: "row", alignItems: "center", gap: 8 },
  batteryIndicator: {
    width: 20,
    height: 12,
    backgroundColor: "#22c55e",
    borderRadius: 2,
  },
  statusText: { fontSize: 14, color: "#6b7280", fontWeight: "500" },

  carImageContainer: { alignItems: "flex-start", marginBottom: 20 },
  carImage: { width: 310, height: 230, marginLeft: -50 },

  /** Stats Section **/
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },

  card: {
    borderRadius: 15,
    backgroundColor: "#B8F9DE",
  },

  batteryCard: {
    flex: 1.2,
    padding: 20,
    marginRight: 10,
    justifyContent: "flex-start",
    backgroundColor: "#B8F9DE",
    borderRadius: 20,
  },

  batteryContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },

  batteryImage: {
    width: 80,
    height: 155,
    marginRight: 6,
  },

  batteryTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  batteryPercentage: {
    fontSize: 31,
    fontWeight: "900",
    color: "#1f2937",
    marginBottom: 4,
  },

  batteryCapacity: {
    fontSize: 15,
    color: "#6b7280",
    fontWeight: "400",
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: "#1f2937",
  },
  cardSubtitle: { fontSize: 12, color: "#6b7280", marginTop: 2 },
  batteryStats: { alignItems: "flex-start" },
  /** Right Column **/
  rightColumn: {
    flex: 1,
    justifyContent: "space-between",
  },
  infoCard: {
    padding: 16,
    marginBottom: 10,
  },
  infoValue: { fontSize: 18, fontWeight: "500", color: "#1f2937" },
  climateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  climateStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  climateStatusText: {
    fontSize: 13,
    color: "#1C79FF",
    fontWeight: "500",
  },
  climateTemp: { fontSize: 18, fontWeight: "500", color: "#1f2937" },
  climateStatus: { fontSize: 13, color: "#1C79FF", fontWeight: "700" },
  bottomSpacer: { height: 80 },
});
