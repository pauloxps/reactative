import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

const AdicionaProdutoScreen = () => {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = () => {
    if (!nome || !cep || !logradouro || !numero || !bairro || !cidade || !estado) {
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }

    Alert.alert("Sucesso", "Produto adicionado com sucesso!");
    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o nome"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>CEP</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o CEP"
              value={cep}
              onChangeText={setCep}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Logradouro</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o logradouro"
              value={logradouro}
              onChangeText={setLogradouro}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Número</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o número"
              value={numero}
              onChangeText={setNumero}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Bairro</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o bairro"
              value={bairro}
              onChangeText={setBairro}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Cidade</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a cidade"
              value={cidade}
              onChangeText={setCidade}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Estado</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o estado"
              value={estado}
              onChangeText={setEstado}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Barra de Navegação */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/adicionap")}>
          <Text style={styles.navItem}>Adicionar P</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/perfil")}>
          <Text style={styles.navItem}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  fieldContainer: {
    marginBottom: 15,
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
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#eee",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navItem: {
    fontSize: 16,
    color: "#007BFF",
  },
});

export default AdicionaProdutoScreen;
