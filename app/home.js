import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const router = useRouter();

  // Funções de navegação
  const handleahome = () => router.push('/home');
  const handlealocal = () => router.push('/adicionarLocal');
  const handleaPerfil = () => router.push('/perfil');
  const handleaProduto = () => router.push('/adicionap');
  const handleacategoria = () => router.push('/categoria');

  // Dados dos produtos
  const products = [
    {
      name: "Abacate Paulista",
      location: "Rio de Janeiro",
      price: "R$ 5,00",
      usuario: "Pauloxps",
      imageUrl: require("../assets/imagem/gg.png"),
    },
    {
      name: "Banana Prata",
      location: "Minas Gerais",
      price: "R$ 3,00",
      usuario: "Pauloxps",
      imageUrl: require("../assets/imagem/gg.png"),
    },
    {
      name: "Coco",
      location: "Espírito Santo",
      price: "R$ 7,00",
      usuario: "Pauloxps",
      imageUrl: require("../assets/imagem/gg.png"),
    },
    {
      name: "Uva",
      location: "São Paulo",
      price: "R$ 10,00",
      usuario: "Pauloxps",
      imageUrl: require("../assets/imagem/gg.png"),
    },
    {
      name: "Melancia",
      location: "Bahia",
      price: "R$ 8,00",
      usuario: "Pauloxps",
      imageUrl: require("../assets/imagem/gg.png"),
    },
    // Outros produtos...
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {products.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            <Image source={product.imageUrl} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productLocation}>{product.location}</Text>
              <Text style={styles.productUsuario}>{product.usuario}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/")}>
          <Ionicons name="log-out-outline" size={18} color="#333" />
          <Text style={styles.footerText}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={handleahome}>
          <Ionicons name="home-outline" size={18} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={handleaProduto}>
          <Ionicons name="add-circle-outline" size={18} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={handleacategoria}>
          <Ionicons name="grid-outline" size={18} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={handlealocal}>
          <Ionicons name="map-outline" size={18} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={handleaPerfil}>
          <Ionicons name="person-circle-outline" size={18} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  scrollView: {
    flexGrow: 1, // Garante que a rolagem ocupe o espaço restante
    paddingBottom: 80, // Adiciona espaço extra para não sobrepor os itens ao rodapé
  },
  productContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    alignItems: "flex-start",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  productLocation: {
    fontSize: 14,
    color: "#777",
    marginVertical: 5,
  },
  productUsuario: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#777",
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
    marginTop: 10,
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

export default HomeScreen;
