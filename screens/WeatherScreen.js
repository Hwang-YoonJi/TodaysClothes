import React from 'react';
import {Text, ScrollView, StyleSheet, SafeAreaView, Dimensions} from 'react-native';


const WeatherScreen = () => {
    return (
      
          <SafeAreaView style={styles.container}>
              <Text style={styles.MainText}>WeatherScreen</Text>
          </SafeAreaView>
        
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