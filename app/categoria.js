import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const AdicionarCategoriaScreen = () => {
  const [nome, setNome] = useState(""); // Estado para o nome da categoria
  const router = useRouter();

  const handleSave = () => {
    if (!nome) {
      Alert.alert("Erro", "Por favor, preencha o nome da categoria!");
      return;
    }

    // Aqui você pode processar a categoria e salvar
    Alert.alert("Sucesso", "Categoria adicionada com sucesso!");
    router.push("/home"); // Navega para a página inicial ou para onde você preferir
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Categoria</Text>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Nome da Categoria</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome da categoria"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  fieldContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AdicionarCategoriaScreen;
