import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Para navegação com Expo Router
import { Ionicons } from "@expo/vector-icons"; // Biblioteca de ícones

const ProfileScreen = () => {
  const router = useRouter();

  const handleEditarPerfil = () => {
    // Navega para a tela de edição de perfil
    router.push("/editarPerfil");
  };

  return (
    <View style={styles.container}>
      {/* Parte superior com fundo verde */}
      <View style={styles.header}>
        <Image
          source={require("../assets/imagem/foto.png")} // Substitua pelo caminho da imagem de perfil
          style={styles.profileImage}
        />
        <Text style={styles.userName}>João</Text>
      </View>

      {/* Parte inferior com opções */}
      <View style={styles.body}>
        {/* A opção de Editar Perfil sem estilo de botão */}
        <TouchableOpacity onPress={handleEditarPerfil}>
          <Text style={styles.optionText}>Editar Perfil</Text>
        </TouchableOpacity>

        {/* Outras opções */}
        <TouchableOpacity>
          <Text style={styles.optionText}>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Excluir Minha Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Sair</Text>
        </TouchableOpacity>
      </View>

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
        <TouchableOpacity style={styles.footerButton}>
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
  },
  header: {
    flex: 1,
    backgroundColor: "#4CAF50", // Fundo verde
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  body: {
    flex: 2,
    backgroundColor: "#f9f9f9", // Cor normal
    padding: 20,
  },
  optionText: {
    fontSize: 18,
    color: "#333",
    paddingVertical: 15, // Adicionando um pouco de espaçamento para cada item
    borderBottomWidth: 1, // Linha separadora
    borderBottomColor: "#ddd", // Cor da linha
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

export default ProfileScreen;
