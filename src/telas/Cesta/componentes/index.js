import React from "react";
import { Image, StyleSheet, View } from 'react-native';

import Texto from "../../../componentes/Texto";
import Detalhes from "./Detalhes";
import Topo from "./Topo";

export default function Cesta() {
    return <>
        <Topo />
        <Detalhes />
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



