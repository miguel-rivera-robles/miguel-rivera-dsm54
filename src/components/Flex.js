import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import Slider from './src/components/Slider';
//import V2_BasedeDatos from './src/components/V2_BasedeDatos';
export const Home = () => {
  return(
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
            <View style={{ flex: 1, backgroundColor: "#fed049", justifyContent: "center"}}><Text style={styles.baseText}>Slider</Text></View>
            <Text style={styles.baseText}>V2-Base De Datos</Text>
            <View style={{flex: 1,backgroundColor: "#007580",justifyContent:"center",flexDirection: "row",alignItems:"center"}}>
                  <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}><Text style={styles.baseText}>Post 1</Text></View>
                  <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}><Text style={styles.baseText}>Post 2</Text></View>
                  <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}><Text style={styles.baseText}>Post 3</Text></View>
            </View>
            <Text style={styles.baseText}>V3-Laravel</Text>
            <View style={{ flex: 1,backgroundColor:"#d8ebe4",flexDirection:"row",justifyContent:"center",alignItems:"center" }}>
                  <View style={{flex:1, flexDirection:"row",justifyContent:"center",}}><Text style={styles.baseText}>L1</Text></View>
                  <View style={{flex:1, flexDirection:"row",justifyContent:"center",}}><Text style={styles.baseText}>L2</Text></View>
                  <View style={{flex:1, flexDirection:"row",justifyContent:"center",}}><Text style={styles.baseText}>L3</Text></View>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

