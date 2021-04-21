import * as React from 'react';
import {ImageBackground,Text, View,StyleSheet} from 'react-native';
import  ComponentSlider from 'app/src/components/Slider/ComponentSlider';

const image={uri:"https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=613&q=80"};

export default function HomeScreen(){

    return(
       <ImageBackground source={image} style={styles.image}>
     <View style={[styles.container, {flexDirection: "column"}]}>
      

      <ComponentSlider />
      {/* <View style={{ flex: 1, backgroundColor: "red", justifyContent:"center",}}><Text>Slider</Text></View>
       */}
      
      <Text>V2-Base De Datos</Text>
      <View style={{flex:1, backgroundColor:"#000000a0", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-1</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-2</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-3</Text></View>
      </View>

    
      <Text>V3-Laravel</Text>
      <View style={{flex:1, backgroundColor:"#000000a0", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-4</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-5</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-6</Text></View>
      </View>
    </View>  
    </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    });

