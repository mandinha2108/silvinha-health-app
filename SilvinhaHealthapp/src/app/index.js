import { StyleSheet, Text, View } from "react-native";
import React from 'react'
import {Link} from "expo-router"

export default function Welcome() {
    return (
        <View> 
            <Text>Welcome</Text>
            <Link href="imc">
               <Text>Abrir o IMC</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
