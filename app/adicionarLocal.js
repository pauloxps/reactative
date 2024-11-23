import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Biblioteca de ícones


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

  const handleahome = () => router.push('/home');
  const handlealocal = () => router.push('/adicionarLocal');
  const handleaPerfil = () => router.push('/perfil');
  const handleaProduto = () => router.push('/adicionap');
  const handleacategoria = () => router.push('/categoria');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scrollView}>
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

      {/* Barra de Navegação no Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("/")} // Navega para a tela inicial
        >
          <Ionicons name="log-out-outline" size={18} color="#333" />
          <Text style={styles.footerText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleahome}>
          <Ionicons name="home-outline" size={18} color="#333" />
          <Text style={styles.footerText}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={handleaProduto}>
          <Ionicons name="add-circle-outline" size={18} color="#333" />
          <Text style={styles.footerText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleacategoria}>
          <Ionicons name="grid-outline" size={18} color="#333" />
          <Text style={styles.footerText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handlealocal}>
          <Ionicons name="map-outline" size={18} color="#333" />
          <Text style={styles.footerText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleaPerfil}>
          <Ionicons name="person-circle-outline" size={18} color="#333" />
          <Text style={styles.footerText}></Text>
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
    paddingBottom: 100, // Adicionando padding para garantir espaço suficiente para a barra de navegação
  },
  scrollView: {
    flex: 1,
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
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerButton: {
    alignItems: "center",
    padding: 10,
  },
  footerText: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
});

export default AdicionaProdutoScreen;
