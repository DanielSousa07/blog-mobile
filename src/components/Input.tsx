import { Feather } from '@expo/vector-icons';
import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

//O componente inpit dessa forma irá aceitar as props do textInput para flexibiliodade
// e tbm uma prop icon para fornecer icons do Feather

export default function Input(props: any) { // a prop pode receber qualquuer tipo de valor
    return (
        <View style={styles.container}>
            <Feather name={props.ico} size={20} color="#9FF9CC"/>
            <TextInput style={styles.input} placeholderTextColor="#C4C4CC" {...props}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Os itens são dispostos em uma linha, da esquerda para a direita (no caso de idiomas lidos da esquerda para a direita
        alignItems: 'center', // alinha verticalmente
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderWidth: 1, //espessura da borda representando os quatros lados
        borderColor: '#737379ff',
        width: '100%', // largura de 100%, ocupa toda a largura de seu elemento pai
        borderRadius: 20, 
        gap: 12, //Espaçamento entre linhas e colunas
    },
    input: {
        flex: 1, // ocupa todo espaçado disponível
        color: '#C4C4CC',
        fontSize: 16,
    },
});