import { StatusBar ,SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_700Bold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';

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
      <Cesta />
    </SafeAreaView>
  );
}

