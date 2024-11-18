import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Modal } from "react-native";
import { useRouter } from "expo-router";

const AdicionaProdutoScreen = () => {
  const router = useRouter();

  const [local, setLocal] = useState("");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [observacao, setObservacao] = useState("");
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar o Modal

  const handleSubmit = () => {
    if (!local || !nome || !preco || !categoria || !observacao) {
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }

    // Aqui você pode processar as informações do formulário
    Alert.alert("Sucesso", "Produto adicionado com sucesso!");
    router.push("/home"); // Navega para a página inicial
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Local</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o local"
              value={local}
              onChangeText={setLocal}
            />
          </View>

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
            <Text style={styles.label}>Preço</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o preço"
              value={preco}
              onChangeText={setPreco}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Categoria</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a categoria"
              value={categoria}
              onChangeText={setCategoria}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Observação</Text>
            <TextInput
              style={[styles.input, styles.observacaoInput]}
              placeholder="Digite a observação"
              value={observacao}
              onChangeText={setObservacao}
              multiline
            />
          </View>

          {/* Seção de Fotos */}
          <View style={styles.fotoContainer}>
            <Text style={styles.label}>Fotos</Text>
            <Text style={styles.fotoText}>Nenhuma foto adicionada</Text>
            <Text style={styles.fotoText}>Fotos podem ser adicionadas mais tarde.</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(true)} // Abre o Modal
            >
              <Text style={styles.modalButtonText}>Adicionar Foto</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal para adicionar foto */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)} // Fecha o Modal
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)} // Fecha o Modal
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Adicionar Foto</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => {}}>
              <Text style={styles.modalButtonText}>Adicionar Foto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Barra de Navegação */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/adicionarLocal")}>
          <Text style={styles.navItem}>Adicionar Local</Text>
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
  observacaoInput: {
    height: 100,
  },
  fotoContainer: {
    marginBottom: 20,
  },
  fotoText: {
    fontSize: 14,
    color: "#666",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#f00",
    borderRadius: 50,
    padding: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default AdicionaProdutoScreen;
