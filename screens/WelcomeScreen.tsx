import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          source={require("@/img/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>ENS Marrakech</Text>
      </View>

      <Text style={styles.subtitle}>
        Welcome to our School Website
      </Text>
      <View style={styles.gallery}>
        <Image
          source={require("../img/photo1.png")}
          style={styles.photo}
          resizeMode="contain"
        />
        <Image
          source={require("../img/photo2.png")}
          style={styles.photo}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEFEE",
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#EE9972",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    fontSize: 16,
    color: "black",
  },
  gallery: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flexDirection: "column", 
    gap: 12,
  },
  photo: {
    width: "100%",   
    height: 180,     
    borderRadius: 8,
    marginBottom: 12,
  },
});