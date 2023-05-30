import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function Settings() {
    return (
        <View>
            <Pressable>
                <Text style={styles.loginButton}>Profile</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.loginButton}>Account</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.loginButton}>Services</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.loginButton}>Rides</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.loginButton}>Fares</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.loginButton}>Logout</Text>
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
        textAlign: 'center',
        padding: 20,
        fontSize: 24,
        borderWidth: 1,
        marginBottom: 12,
        marginTop: 10,
        borderRadius: 50,
        borderColor: 'white',
        color: 'white',
        backgroundColor: 'grey',
    },
    text: {
        marginBottom: 10,
        fontSize: 22,
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: 'auto',
    },
});