import React from 'react';
import { View } from 'react-native';
import Titulo from './componentes/Titulo';
import TelaInicial from './componentes/TelaInicial';

const App = () => {
  return (
    <View>
      <Titulo />
      <TelaInicial />
    </View>
  );
}

export default App;