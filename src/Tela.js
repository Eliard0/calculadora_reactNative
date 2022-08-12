import React from "react";
import { Text, StyleSheet, View} from "react-native";

export default props => 
<View style={styles.tela}>
        <Text style={styles.valorTela} numberOfLines={1}>
            {props.value}
        </Text>
    </View>

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#867D70',
        alignItems: 'flex-end',
    },
    valorTela: {
        fontSize: 60,
        color: '#fff',
    }
})