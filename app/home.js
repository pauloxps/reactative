import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Importa o useRouter

const HomeScreen = () => {
  const router = useRouter(); // Hook para navegação
  
  const handleLogins = () => {
    // Aqui você pode adicionar validações de login, se necessário
    // Depois que o login for bem-sucedido, você pode navegar para a home
    router.push('/adicionarLocal'); // Navega para a tela home
  };
  const handleaP = () => {
    // Aqui você pode adicionar validações de login, se necessário
    // Depois que o login for bem-sucedido, você pode navegar para a home
    router.push('/adicionap'); // Navega para a tela home
  };
  const handleaCategoria = () => {
    // Aqui você pode adicionar validações de login, se necessário
    // Depois que o login for bem-sucedido, você pode navegar para a home
    router.push('/categoria'); // Navega para a tela home
  };
  const handleaPerfil = () => {
    // Aqui você pode adicionar validações de login, se necessário
    // Depois que o login for bem-sucedido, você pode navegar para a home
    router.push('/perfil'); // Navega para a tela home
  };


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
      usuario: "Pauloxps",
      price: "R$ 3,00",
      imageUrl: require("../assets/imagem/gg.png"),
    },
    {
      name: "Coco",
      location: "Espírito Santo",
      usuario: "Pauloxps",
      price: "R$ 7,00",
      imageUrl: require("../assets/imagem/gg.png"),
    },
    {
      name: "Uva",
      location: "São Paulo",
      usuario: "Pauloxps",
      price: "R$ 10,00",
      imageUrl: require("../assets/imagem/gg.png"),
    },
    {
      name: "Melancia",
      location: "Bahia",
      usuario: "Pauloxps",
      price: "R$ 8,00",
      imageUrl: require("../assets/imagem/gg.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
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

      {/* Barra de Navegação no Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push("/")} // Navega para a tela index.js
        >
          <Text style={styles.footerText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleaP}>
          <Text style={styles.footerText}>adicionaPr</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogins}>
            <Text style={styles.buttonText}>Local</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleaCategoria}>
            <Text style={styles.buttonText}>Categoria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleaPerfil}>
            <Text style={styles.buttonText}>Perfil</Text>
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
    marginTop: 20,
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
    marginLeft: 40,
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
  },
  footerButton: {
    padding: 10,
  },
  footerText: {
    fontSize: 14,
    color: "#333",
  },
});

export default HomeScreen;
