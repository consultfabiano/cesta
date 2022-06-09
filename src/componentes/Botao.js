import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import Texto from "./Texto";

export default function Botao({ children, style }) {
    
   return  <>
    <TouchableOpacity>
        <Text style={estilos.botao}>{ Botao } onPress={()=>{}}</Text>
        <Text style={estilos.textoBotao}>{ textoBotao }</Text>
        </TouchableOpacity> 
        </>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },

    textoBotao: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    }

});