import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [nome, setNome] = useState(null);

  const onPress = () => calcular(peso, altura, nome);

  return (
    <View style={styles.container}>
      <Text  
        style={styles.label}>
        Calculadora IMC
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        placeholder="Informe seu nome"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPeso}
        value={peso}
        placeholder="Informe seu peso (kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={setAltura}
        value={altura}
        placeholder="Informe sua altura (metro e cm)"
        keyboardType="numeric"
      />

      <Button
        title="Calcular"
        color="#0000ff"
        onPress={onPress}
      />

      <StatusBar style="auto" />
    </View>
  );
}

function calcular(peso, altura, nome) {

  let alturaF = parseFloat(altura);
  let pesoF = parseFloat(peso);

  let imc = pesoF / (alturaF * alturaF);
  let result = imc.toFixed(2);

  if(imc < 20) {
    Alert.alert(`${nome} - seu imc é ${result} - Você esta abaixo do peso!`);
  } else if(imc >20 && imc <= 25) {
    Alert.alert(`${nome} - seu imc é ${result} - Você esta com o peso Ideal`);
  } else if(imc >25 && imc <= 30) {
    Alert.alert(`${nome} - seu imc é ${result} - Você esta com sobrepeso`);
  } else if(imc >30 && imc <= 35) {
    Alert.alert(`${nome} - seu imc é ${result} - Você esta com obesidade`);
  } else if(imc >35 && imc <= 40) {
    Alert.alert(`${nome} - seu imc é ${result} - Você esta com obesidade Severa`);
  } else if(imc >40 && imc <= 50) {
    Alert.alert(`${nome} - seu imc é ${result} - Você esta com obesidade Morbida`);
  }

}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  container: {
    marginTop: 50
  },
  label: {
    fontSize: 20,
    color: '#ff6961',
    marginLeft: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
