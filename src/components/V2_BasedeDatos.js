import React from "react";
import { StyleSheet, Text, View } from "react-native";

const V2_BasedeDatos = () => {
  return (
    <View style={[styles.container, {
     
      flexDirection: "column"
    }]}>
            
            <View style={{flex: 1,backgroundColor: "#007580",justifyContent:"center",flexDirection: "row",alignItems:"center"}}>
                  <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}><Text style={styles.baseText}>Post 1</Text></View>
                  <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}><Text style={styles.baseText}>Post 2</Text></View>
                  <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}><Text style={styles.baseText}>Post 3</Text></View>
            </View>
            <Text style={styles.baseText}>V3-Laravel</Text>
    </View>
  );
};

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

export default V2_BasedeDatos;