import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Slider = () => {
  return (
    <View style={[styles.container, {
     
      flexDirection: "column"
    }]}>
            <View style={{ flex: 1, backgroundColor: "#fed049", justifyContent: "center"}}><Text style={styles.baseText}>Slider</Text></View>
            <Text style={styles.baseText}>V2-Base De Datos</Text>
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

export default Slider;