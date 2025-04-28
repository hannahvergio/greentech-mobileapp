import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginSignupScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/loginsignupbg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={require('../assets/greentechlogo.png')} style={styles.logo} />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login' as never)}
        >
          <Image source={require('../assets/textbox.png')} style={styles.leafIcon} />
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate('Signup' as never)}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 0,
  },
  logo: {
    width: 150, 
    height: 150,
    resizeMode: 'contain',
    marginTop: -165,
    marginBottom: 100,
  },
  loginButton: {
    backgroundColor: '#d4f8c4',
    width: '80%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'relative', 
  },
  signupButton: {
    backgroundColor: '#d4f8c4',
    width: '80%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#004d00',
    fontSize: 22,
    fontWeight: 'bold',
  },
  leafIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    top: -50, 
    left: -30, 
    zIndex: 2,
  },
});

export default LoginSignupScreen;
