import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

const ClothesScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.MainText}>ClothesScreen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 450,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    MainText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    }
})

export default ClothesScreen;