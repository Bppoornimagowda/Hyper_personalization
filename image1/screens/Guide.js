import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Guide = () => {
  const navigation = useNavigation();
  
  // Function to handle navigation to CameraVerificationScreen
  const goToCameraVerification = () => {
    navigation.navigate('CameraVerificationScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Scan</Text>
      
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.validCard]}>
          <Image source={require("../assets/images/full-body.png")} style={styles.image} />
          <Text style={styles.checkMark}>✔</Text>
        </View>
        
        <View style={[styles.card, styles.invalidCard]}>
          <Image source={require("../assets/images/close-up.png")} style={styles.image} />
          <Text style={styles.crossMark}>✖</Text>
        </View>
      </View>
      
      <Text style={styles.subTitle}>Lighting</Text>
      <Text style={styles.description}>
        Ensure proper lighting for an accurate AI analysis of your body type. Good lighting helps the AI capture detailed and precise photo data, leading to better insights.
      </Text>
      
      <TouchableOpacity style={styles.button}
      onPress={goToCameraVerification}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#1C1C1E",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    width: 150,
    height: 250,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: 10,
  },
  validCard: {
    backgroundColor: "#E0F7FA",
    borderWidth: 2,
    borderColor: "#4CAF50",
  },
  invalidCard: {
    backgroundColor: "#FFEBEE",
    borderWidth: 2,
    borderColor: "#D32F2F",
  },
  image: {
    width: "100%",
    height: "85%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  checkMark: {
    position: "absolute",
    bottom: 10,
    fontSize: 20,
    color: "#4CAF50",
    fontWeight: "bold",
  },
  crossMark: {
    position: "absolute",
    bottom: 10,
    fontSize: 20,
    color: "#D32F2F",
    fontWeight: "bold",
  },
  subTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    color: "#bbb",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Guide;