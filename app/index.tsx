import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  ImageBackground,
  PanResponder,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function GetStartedScreen() {
  const router = useRouter();
  const swipeX = useRef(new Animated.Value(0)).current;

  const SLIDER_WIDTH = width * 0.9;
  const BUTTON_WIDTH = 140;
  const MAX_SLIDE = SLIDER_WIDTH - BUTTON_WIDTH;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 5,
      onPanResponderMove: (_, gestureState) => {
        const newX = Math.max(0, Math.min(gestureState.dx, MAX_SLIDE));
        swipeX.setValue(newX);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > MAX_SLIDE * 0.7) {
          Animated.timing(swipeX, {
            toValue: MAX_SLIDE,
            duration: 250,
            easing: Easing.out(Easing.exp),
            useNativeDriver: false,
          }).start(() => {
            setTimeout(() => router.replace("/(tabs)"), 150);
          });
        } else {
          Animated.spring(swipeX, {
            toValue: 0,
            bounciness: 10,
            speed: 10,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../assets/images/bg2.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={styles.gradient}
        />

        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Power Up Your Journey:{"\n"}
            <Text style={styles.boldTitle}>
              Stay in Control with Your EV battery tracking.
            </Text>
          </Text>
          <Text style={styles.subtitle}>
            Experience the future of real time battery tracking with electric
            vehicle (EV).
          </Text>
        </View>

        {/* Swipe Button */}
        <View style={[styles.swipeContainer, { width: SLIDER_WIDTH }]}>
          <Animated.View
            style={[
              styles.swipeButton,
              { transform: [{ translateX: swipeX }] },
            ]}
            {...panResponder.panHandlers}
          >
            <Text style={styles.swipeText}>Get start</Text>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    flex: 1,
    width: width,
    height: height + (StatusBar.currentHeight ?? 0),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  textContainer: {
    paddingHorizontal: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    lineHeight: 28,
  },
  boldTitle: {
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 15,
    color: "#dcdcdc",
    marginTop: 12,
    lineHeight: 22,
  },
  swipeContainer: {
    height: 68,
    backgroundColor: "#161717",
    borderRadius: 40,
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: 40,
    padding: 5,
    borderColor: "#424343",
    borderWidth: 1,
  },
  swipeButton: {
    position: "absolute",
    left: 5,
    backgroundColor: "#0057FF",
    borderRadius: 40,
    height: "100%",
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#007BFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  swipeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
