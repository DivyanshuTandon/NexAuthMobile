import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Platform,
  ToastAndroid,
} from 'react-native';
import { HandWaving } from 'phosphor-react-native';
import Toast from 'react-native-toast-message';
import { useAuth } from '../hooks/useAuth';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  card: { backgroundColor: '#fff', padding: 24, borderRadius: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: { backgroundColor: '#9ca3af' },
  buttonText: { color: '#fff', fontWeight: '600' },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    color: '#6b7280',
  },
});

const LoginScreen = () => {
  const { login, authLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = email.includes('@') && password.length >= 6;

  const handleLogin = async () => {
  if (authLoading) return;

  await login(email, password);


  if (Platform.OS === 'android') {
    ToastAndroid.show('Login successful', ToastAndroid.SHORT);
  } else {
    Toast.show({
      type: 'success',
      text1: 'Login successful',
      position: 'bottom',
    });
  }
};


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ alignItems: 'center', marginBottom: 12 }}>
          <HandWaving size={32} color="#2563eb" weight="fill" />
          <Text style={styles.title}>Welcome Back</Text>
        </View>

        <Text style={styles.subtitle}>Login to continue</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={[
            styles.button,
            (!isValid || authLoading) && styles.buttonDisabled,
          ]}
          disabled={!isValid || authLoading}
          onPress={handleLogin}
        >
          {authLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
