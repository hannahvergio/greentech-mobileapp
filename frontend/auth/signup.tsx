import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  SignupScreen: undefined;
  LoginScreen: undefined;
};

const SignupScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <ImageBackground
      source={require('../assets/loginsignupbg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/greentechlogo.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>Register</Text>

        <View style={styles.loginBox}>

          <Image
            source={require('../assets/textbox.png')}
            style={styles.leafIcon}
          />

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Username"
              placeholderTextColor="#7DA97D"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#7DA97D"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#7DA97D"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>

        </View>
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
    marginTop: -70,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004d00',
    marginBottom: 20,
  },
  loginBox: {
    width: '85%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
    position: 'relative',
  },
  inputWrapper: {
    backgroundColor: '#d4f8c4',
    width: '100%',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    justifyContent: 'center',
    height: 55,
  },
  input: {
    fontSize: 18,
    color: '#004d00',
    width: '100%',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#004d00',
    width: '80%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'relative',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#d4f8c4',
    fontSize: 20,
    fontWeight: 'bold',
  },
  leafIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    top: -15,
    left: -11,
    zIndex: 2,
  },
});

export default SignupScreen;
