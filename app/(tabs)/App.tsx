import WelcomeScreen from "@/screens/WelcomeScreen";
import React from "react";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#EDEFEE" />
      <WelcomeScreen />
    </>
  );
}
