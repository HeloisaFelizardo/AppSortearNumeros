import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  tela: { 
    width: '100%',
    justifyContent: "center", 
    alignItems: 'center',
  },
  
  boxNumero:{
    borderColor: '#13b0c5',
    backgroundColor: '#13b0c5',
    borderWidth: 5,
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems:"center",
    marginBottom: 50
  },

  titulo: {
    fontSize: 14,
    marginVertical: 30,
    paddingHorizontal: 20,
    textAlign: "center"
  },

  numero: {
    fontSize: 80,
    color: '#fff'
  },
  boxBotao: {
    width:200
  }

});

export default estilo;