import React from "react";
import { Image, StyleSheet, View } from 'react-native';
//import * as SplashScreen from 'expo-splash-screen'; buscar saber como implementar


import Detalhes from "./Detalhes";
import Topo from "./Topo";

export default function Cesta({ topo, detalhes }) {
    return <>
        <Topo {...topo}/>
        <Detalhes {...detalhes} />
        <View style={estilos.cesta}>

        </View>
        </>
}

const estilos = StyleSheet.create({
   

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

});






