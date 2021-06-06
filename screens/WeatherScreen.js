import React from 'react';
import {Text, ScrollView, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import ClothesScreen from './ClothesScreen';

const WeatherScreen = () => {
    return (
        <ScrollView horizontal={true} pagingEnabled={true}>
          <SafeAreaView style={styles.container}>
              <Text style={styles.MainText}>WeatherScreen</Text>
          </SafeAreaView>
          <ClothesScreen />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    MainText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    }
})

export default WeatherScreen;