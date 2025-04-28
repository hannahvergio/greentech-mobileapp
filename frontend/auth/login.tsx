import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

const CustomCheckbox = ({ value, onValueChange }: { value: boolean, onValueChange: (newValue: boolean) => void }) => {
  return (
    <TouchableOpacity
      onPress={() => onValueChange(!value)}
      style={{
        height: 20, // back to smaller box like your image
        width: 20,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: '#d4f8c4',
        backgroundColor: value ? '#7DA97D' : 'transparent', // ✅ greenish background when checked
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {value && (
        <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>✔</Text> // ✅ White checkmark
      )}
    </TouchableOpacity>
  );
};


const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

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

        <Text style={styles.title}>Welcome Back</Text>

        <View style={styles.loginBox}>

          <Image
            source={require('../assets/textbox.png')}
            style={styles.leafIcon}
          />

          {/* Username Input */}
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Username"
              placeholderTextColor="#7DA97D"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
            />
          </View>

          {/* Password Input */}
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

          <View style={styles.optionsRow}>
            <View style={styles.rememberMe}>
              <CustomCheckbox
                value={rememberMe}
                onValueChange={setRememberMe}
              />
              <Text style={styles.rememberMeText}>Remember me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>LOGIN</Text>
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
    marginTop: -110,
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
  optionsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center'
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    color: '#d4f8c4',
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#d4f8c4',
    textDecorationLine: 'none',
    fontSize: 12,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#d4f8c4',
    width: '80%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'relative',
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
    top: -15,
    left: -11,
    zIndex: 2,
  },
});

export default LoginScreen;
