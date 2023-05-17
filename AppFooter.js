import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function AppFooter({footer,text}) {
    return (
        <View style={styles.container}>
            <Text sylte={styles.footer}>{footer} 
                <Text style={styles.text}>{text}</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.075,
        backgroundColor: 'fuchsia'
    },
    footer: {
        textAlign: 'auto',
    },
    text: {
        fontStyle: 'italic',
    },
});