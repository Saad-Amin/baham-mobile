import { Text, View, StyleSheet, Pressable} from "react-native";
import { useState } from "react";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Baham</Text>
            <Text style={styles.text}>Join Baham today and be part of the solution!</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginButton}>Login</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex : 1,
        marginTop: 130,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        width: 200,
        textAlign: 'center',
        margin: 30,
        padding: 10,
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 25,
        color: 'white',
        backgroundColor: 'darkblue',
    },
    text: {
        marginBottom: 10,
        fontSize: 22,
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: 'auto',
    },
});