
import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import { useNavigation } from '@react-navigation/native';


const Terms = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
  const handleContinue = () => {
    if (isChecked) {
      navigation.navigate('Guide');
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/Frame1.jpeg")} // Replace with your image path
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Shield Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🔒</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>
          Receive your comprehensive dress collection in under a minute.
        </Text>

        {/* Privacy Policy */}
        <Text style={styles.description}>
          Areta360 takes your privacy seriously. Learn more about your personal data in our{" "}
          <Text style={styles.link}>privacy policy</Text>.
        </Text>

        {/* Custom Checkbox */}
        <View style={styles.checkboxContainer}>
          <Pressable
            style={[
              styles.checkbox,
              { backgroundColor: isChecked ? "#FFD700" : "transparent" },
            ]}
            onPress={() => setIsChecked(!isChecked)}
          >
            {isChecked && <Text style={styles.checkmark}>✓</Text>}
          </Pressable>
          <Text style={styles.termsText}>
            I Agree To Fitwave{" "}
            <Text style={styles.boldText}>Public Agreement, Terms, Privacy Policy</Text>, and confirm that I am over 17 years old.
          </Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
  style={[styles.button, { backgroundColor: isChecked ? "white" : "gray" }]}
  disabled={!isChecked}
  onPress={handleContinue}
>
  <Text style={styles.buttonText}>Continue</Text>
</TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    width: "85%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
  },
  title: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 5,
  },
  link: {
    color: "#FFD700",
    textDecorationLine: "underline",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  checkmark: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  termsText: {
    color: "white",
    fontSize: 12,
    flexShrink: 1,
  },
  boldText: {
    fontWeight: "bold",
    color: "#FFD700",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Terms;