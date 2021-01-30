import React, {Component} from 'react';

import {View, Text, StyleSheet } from 'react-native';

//declaramos nuestro componente tipo class

class CoinDetailScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>pantalla detalle Pantalla De Detalle DEL DSM-54</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "yellow"
    },
    text:{
        color : "#000",
        textAlign: "center",
    }

});

export default CoinDetailScreen;