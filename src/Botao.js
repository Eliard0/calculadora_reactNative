import React from 'react'
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
    botao: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    botoesDeOperacao: {
        color: '#fff',
        backgroundColor: '#fa8232',
    },

    botaoDuasVezesMaior: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    
    botaoTresVezesMaior: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})


export default props => {
    const estilosBotoes = [styles.botao]
    if (props.duas) estilosBotoes.push(styles.botaoDuasVezesMaior)
    if (props.tres) estilosBotoes.push(styles.botaoTresVezesMaior)
    if (props.operacao) estilosBotoes.push(styles.botoesDeOperacao)
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={estilosBotoes}>{props.label}</Text>
        </TouchableHighlight>
    ) 
}