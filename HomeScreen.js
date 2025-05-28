import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
                />    
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#151b54',
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#ffffff',
        fontFamily: 'monospace',
    },
    
    buttonContainer: {
        backgroundColor: '#151b54',
        margin: 10,
        width: windowWidth * 0.5, //50% da largura da tela 
        borderRadius: 5,
        overflow: 'hidden',
        fontFamily: 'monospace',
    },
});