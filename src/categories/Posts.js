import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet} from 'react-native';

export const Posts = () =>{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://10.0.2.2:8000/api/posts')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, 
    []);

    return(
        <View style={styles.header}>
            <Text style={{fontSize: 20, fontWeight:'bold',color:'white' }}> Posts</Text>
        <View style={styles.container}>
        {isLoading ? <ActivityIndicator/> : (
            <View style={styles.list}>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <Text style={styles.postsText}>{item.id}, {item.title}</Text>
            )}
          />
          </View>
        )}
      </View>
      </View>
           
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        height: 20,
        backgroundColor: '#0e49b5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    list: {
        marginTop: 20,
        padding: 20,
        flex: 1,
        backgroundColor: '#ffe6e6',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    postsText:{
        flex: 1,
        padding: 10,
        fontWeight: 'bold',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
    }

  });