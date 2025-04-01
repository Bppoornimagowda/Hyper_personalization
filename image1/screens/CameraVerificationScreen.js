import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const CameraVerificationScreen = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Countdown timer
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Camera indicator */}
      <View style={styles.cameraIndicator}>
        <View style={styles.indicatorDot} />
        <Text style={styles.indicatorText}>Camera On</Text>
      </View>
      
      {/* Mock camera view with frame */}
      <View style={styles.cameraFrame}>
        {
            <Image
              source={require("../assets/images/straightpose.png")}
              style={styles.referenceImage}
              resizeMode="contain"
            />
        /* This is where we'd render a real camera, but we're using a View with a dark background instead */}
        <View style={styles.mockCamera}>
          {/* Overlay content */}
          <View style={styles.overlayContent}>
            <View style={styles.silhouetteContainer}>
              {/* Person silhouette - using a placeholder View instead of an Image */}
              <View style={styles.silhouette} />
              
              <View style={styles.countdownContainer}>
                <Text style={styles.getReadyText}>Get Ready</Text>
                <Text style={styles.countdownText}>{countdown}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      
      {/* Instructions */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsText}>
          Hold or place your phone until you fit into this frame
        </Text>
        
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  cameraIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 10,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
    marginRight: 5,
  },
  indicatorText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  cameraFrame: {
    flex: 1,
    marginVertical: 60,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mockCamera: {
    flex: 1,
    backgroundColor: '#222', // Dark gray to simulate camera view
  },
  overlayContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  silhouetteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  silhouette: {
    width: '70%',
    height: '70%',
    backgroundColor: 'rgba(100, 100, 100, 0.2)', // Light gray semi-transparent silhouette
    borderRadius: 5,
  },
  countdownContainer: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
  },
  getReadyText: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  countdownText: {
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  instructionsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  instructionsText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#333333',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CameraVerificationScreen;

