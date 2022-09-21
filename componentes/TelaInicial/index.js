import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import estilo from './estilo';

const TelaInicial = () => {
  const [ numeroSorteado, setNumeroSorteado ] = useState(0);

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * (101 - 1) + 1);
    setNumeroSorteado(novoNumero);
  }

  return (
    <View style={estilo.tela}>
      <Text style={estilo.titulo}>
        Toque no botão e veja quem é o vencedor de 1 à 100
      </Text>

      <View style={estilo.boxNumero}>
        <Text style={estilo.numero}>{numeroSorteado}</Text>
      </View>

      <View style={estilo.boxBotao}>
        <Button title="Sortear" onPress={gerarNumero} color="#1f4f66"/>
      </View>
    </View>
  );
}

export default TelaInicial;