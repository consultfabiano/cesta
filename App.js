import { StatusBar ,SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta/componentes/index';
import { useFonts, Montserrat_700Bold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';

import mock from './src/mocks/cesta'


export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_500Medium,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    <View />
  }

  return (
    <SafeAreaView >
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

