/* App lista de tarefas 
Criador:Felipe Souza Silva Blanco
Data: 10 - 23/04/2026
Objetivo: o app cria é um facilitador para criar listas de tarefas para ajudar no dia a dia, ou até mesmo ser usado para organização de possiveis trabalhos que o prestador de serviços tem.
*/


import React, { useState } from "react"; /* importação de "tags" do react native. */
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";

export default function App() { /* funções do app*/
  const [nome, setNome] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    if (nome === "") {
      return;
    }

    const novoItem = {
      id: Math.random().toString(),
      nome: nome
    };

    setLista([...lista, novoItem]);
    setNome("");
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Minha Lista 📝</Text>

      <TextInput
        style={styles.input}
        placeholder="coloque a sua tarefa do dia..."
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={adicionarItem}
      >
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({  /* estilização do app */
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },

  botao: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20
  },

  textoBotao: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },

  card: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  }
});