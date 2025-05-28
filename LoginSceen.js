import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const predefinedUser = 'user@example.com'; 
const predefinedPassword = 'password';     

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === predefinedUser && password === predefinedPassword) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro de Login', 'Usuário ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#cccccc"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#cccccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Entrar"
          onPress={handleLogin}
          color="#ffffff" // Cor do texto do botão para combinar com o fundo escuro
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151b54', // Mantendo o background da sua Home
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#ffffff',
    fontFamily: 'monospace',
  },
  inputContainer: {
    backgroundColor: '#333b7e', // Cor de fundo para os inputs, similar ao tema
    margin: 10,
    width: windowWidth * 0.7, // Um pouco maior que o botão para melhor usabilidade
    borderRadius: 5,
    overflow: 'hidden',
  },
  input: {
    height: 40,
    color: '#ffffff', // Cor do texto digitado
    paddingHorizontal: 10,
    fontFamily: 'monospace',
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: '#151b54', // O background do botão será o mesmo do container para esconder o botão em si
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
    overflow: 'hidden',
    fontFamily: 'monospace',
    borderWidth: 1, // Adiciona uma borda para diferenciar o botão do fundo
    borderColor: '#ffffff', // Cor da borda
  },
});