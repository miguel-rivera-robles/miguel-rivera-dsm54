import React, {Component} from 'react';

//import componentes de react native

import {View, Text, Pressable, StyleSheet} from 'react-native';

// componente de tipo clase
class CoinScreen extends Component{

    handlesPress = () => {
        console.log("ENTRA A LA PANTALLA DETALLE");
        this.props.navigation.navigate('CoinDetailScreen')
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.btnText}>Mi primer pantalla</Text>
                <Pressable  style = {styles.btn} onPress={this.handlesPress}><Text style={styles.btnText}>Ir  a Detalle </Text></Pressable>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: "blue"
     },
    btn:{
        padding : 8 ,
        backgroundColor : "red",
        borderRadius : 8,
        margin : 22   
    },
    btnText:{
        color: "#fff",
        textAlign: "center",

    }

})

export default CoinScreen;