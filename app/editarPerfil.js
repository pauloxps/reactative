import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router"; // Importa o useRouter
import { Ionicons } from "@expo/vector-icons"; // Biblioteca de ícones


const EditarPerfilScreen = () => {
  const router = useRouter(); // Hook para navegação

  const [nome, setNome] = useState("João Silva");
  const [email, setEmail] = useState("joao@gmail.com");
  const [cpf, setCpf] = useState("123.456.789-00");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("(99) 99999-9999");

  const handleSalvar = () => {
    alert("Perfil atualizado com sucesso!");
  };

  const handleahome = () => {
    // Aqui você pode adicionar validações de login, se necessário
    // Depois que o login for bem-sucedido, você pode navegar para a home
    router.push('/home'); // Navega para a tela home
  };

  const handlealocal = () => {
    // Aqui você pode adicionar validações de login, se necessário
    // Depois que o login for bem-sucedido, você pode navegar para a home
    router.push('/adicionarLocal'); // Navega para a tela home
  };

  const handleaPerfil = () => {
    // Aqui você pode adicionar validações de login, se necessário
    // Depois que o login for bem-sucedido, você pode navegar para a home
    router.push('/editarPerfil'); // Navega para a tela home
  };

  const handleaProduto = () => {
    // Aqui você pode adicionar validações de login, se necessário
    // Depois que o login for bem-sucedido, você pode navegar para a home
    router.push('/adicionap'); // Navega para a tela home
  };
  const handleacategoria = () => {
    // Aqui você pode adicionar validações de login, se necessário
    // Depois que o login for bem-sucedido, você pode navegar para a home
    router.push('/categoria'); // Navega para a tela home
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Topo com a foto e nome */}
        <View style={styles.header}>
          <Image source={require("../assets/imagem/foto.png")} style={styles.foto} />
          <Text style={styles.nome}>{nome}</Text>
        </View>

        {/* Campos de edição */}
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>CPF</Text>
            <TextInput style={styles.input} value={cpf} onChangeText={setCpf} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Telefone</Text>
            <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />
          </View>

          {/* Botão Salvar */}
          <TouchableOpacity style={styles.button} onPress={handleSalvar}>
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
          <Ionicons name="home-outline" size={24} color="#333" />
          <Text style={styles.footerText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="ios-list-outline" size={24} color="#333" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("/adicionarLocal")} // Navega para a tela adicionarLocal
        >
          <Ionicons name="map-outline" size={24} color="#333" />
          <Text style={styles.footerText}>Local</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="add-circle-outline" size={24} color="#333" />
          <Text style={styles.footerText}>Adicionar Categoria</Text>
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
  scrollView: {
    marginTop: 20,
  },
  header: {
    height: 250,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: "#f9f9f9",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
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

export default EditarPerfilScreen;
