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
import {
  ChevronRight,
  Zap,
  Thermometer,
  Droplets,
  Shield,
  User,
} from "lucide-react-native";

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
          <View style={styles.headerLeft}>
            <Text style={styles.greeting}>Hi Sarthak,</Text>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.temperatureContainer}>
              <Text style={styles.temperature}>33°C</Text>
            </View>
            <TouchableOpacity style={styles.profileButton}>
              <User size={20} color="#2d5530" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Vehicle Section */}
        <View style={styles.vehicleSection}>
          <Text style={styles.vehicleTitle}>Tesla Model S</Text>
          <View style={styles.vehicleStatus}>
            <View style={styles.batteryIndicator} />
            <Text style={styles.statusText}>158km. Parked</Text>
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

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {/* First Row - Battery and Safety */}
          <View style={styles.topRow}>
            <View style={[styles.card, styles.batteryCard]}>
              <Text style={styles.cardTitle}>Battery</Text>
              <Text style={styles.cardSubtitle}>Last charge 1w ago</Text>
              <View style={styles.batteryContainer}>
                <View style={styles.batteryIcon}>
                  <LinearGradient
                    colors={["#4ade80", "#22c55e"]}
                    style={styles.batteryFill}
                  >
                    <Zap size={16} color="white" />
                  </LinearGradient>
                </View>
                <View style={styles.batteryStats}>
                  <Text style={styles.batteryPercentage}>95%</Text>
                  <Text style={styles.batteryCapacity}>180kw</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={[styles.card, styles.safetyCard]}>
              <Text style={styles.cardTitle}>Safety</Text>
              <View style={styles.safetyArrow}>
                <ChevronRight size={16} color="#2d5530" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Second Row - Climate and Humidity */}
          <View style={styles.bottomRow}>
            <View style={[styles.card, styles.climateCard]}>
              <Text style={styles.cardTitle}>Climate</Text>
              <View style={styles.climateContainer}>
                <View style={styles.climateIndicator}>
                  <View style={styles.greenDot} />
                  <Text style={styles.climateStatus}>Cool</Text>
                </View>
                <Text style={styles.climateTemp}>33°</Text>
              </View>
            </View>

            <View style={[styles.card, styles.humidityCard]}>
              <Text style={styles.cardTitle}>Humidity</Text>
              <View style={styles.humidityContainer}>
                <Text style={styles.humidityValue}>20%</Text>
              </View>
            </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  headerLeft: {
    flex: 1,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1f2937",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  temperatureContainer: {
    backgroundColor: "rgba(45, 85, 48, 0.9)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  temperature: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  profileButton: {
    backgroundColor: "rgba(45, 85, 48, 0.1)",
    padding: 8,
    borderRadius: 20,
  },
  vehicleSection: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  vehicleTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 8,
  },
  vehicleStatus: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  batteryIndicator: {
    width: 20,
    height: 12,
    backgroundColor: "#22c55e",
    borderRadius: 2,
    position: "relative",
  },
  statusText: {
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "500",
  },
  carImageContainer: {
    alignItems: "flex-start",
    paddingLeft: 0, // Remove left padding to start from edge
    marginBottom: 32,
  },
  carImage: {
    width: 290, // Increased from 200
    height: 220, // Increased from 180
    marginLeft: -30, // Pull image slightly to the left
  },
  statsGrid: {
    paddingHorizontal: 20,
    marginBottom: 20, // Reduced from 32 to remove extra gap
  },
  topRow: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 16,
  },
  bottomRow: {
    flexDirection: "row",
    gap: 16,
  },
  card: {
    backgroundColor: "#B8F9DE",
    borderRadius: 16,
    padding: 18,
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
  batteryCard: {
    height: 130,
    flex: 1.4, // Slightly larger than safety card
  },
  safetyCard: {
    height: 130,
    flex: 1,
    justifyContent: "space-between",
    position: "relative",
  },
  safetyArrow: {
    position: "absolute",
    top: 16, // Adjusted for new padding
    right: 16, // Adjusted for new padding
  },
  climateCard: {
    height: 100,
    flex: 1,
  },
  humidityCard: {
    height: 100,
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 10,
    color: "#6b7280",
    marginBottom: 8, // Reduced from 12
  },
  batteryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12, // Reduced from 14
    marginTop: 4, // Reduced from 8
  },
  batteryIcon: {
    width: 35,
    height: 55,
    backgroundColor: "#e5e7eb",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  batteryFill: {
    width: "100%",
    height: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  batteryStats: {
    flex: 1,
  },
  batteryPercentage: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1f2937",
    lineHeight: 32,
  },
  batteryCapacity: {
    fontSize: 13,
    color: "#6b7280",
    fontWeight: "500",
  },
  climateContainer: {
    marginTop: 4, // Reduced from 6
  },
  climateIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },
  greenDot: {
    width: 8,
    height: 8,
    backgroundColor: "#22c55e",
    borderRadius: 4,
  },
  climateStatus: {
    fontSize: 13,
    color: "#22c55e",
    fontWeight: "500",
  },
  climateTemp: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2937",
  },
  humidityContainer: {
    marginTop: 6, // Reduced from 8
  },
  humidityValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2937",
  },
  locateSection: {
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  locateButton: {
    backgroundColor: "#b5e6bd",
    borderRadius: 16,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  locateText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
  },
  bottomSpacer: {
    height: 80, // Reduced from 120
  },
});
