import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/welcome.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.welcome}>WELCOME!</Text>
        <Image
          source={require('../assets/greentechlogo.png')}
          style={styles.logo}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Auth' as never)}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 30,
  },
  welcome: {
    fontSize: 48, 
    fontWeight: 'bold',
    color: '#004d00',
  },
  logo: {
    width: 250, 
    height: 250,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#006400',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
