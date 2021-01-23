import React, {Component} from 'react';

//import componentes de react native

import {View, Text} from 'react-native';

// componente de tipo clase
class CoinScreen extends Component{
    render(){
        return (
            <View>
                <Text>
                   Mi primer pantalla de React Native 
                </Text>
            </View>
        );
    }
}

export default CoinScreen;