import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet,Image} from 'react-native';


export default function PostsScreen(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://10.0.2.2:8000/api/posts')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return(
        <View style={styles.header}>
        <View style={styles.container}>
            
            {isLoading ? <ActivityIndicator/> : (
                <View style={styles.list}>
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                      <View style={{flex: 1, flexDirection: 'row'}}>
                      <Image
                      style={{width:60, height:60, borderRadius:50}}
                      source={{uri: item.image}}/>
                        <View>
                          <Text style={styles.text}>{item.title}</Text>
                        </View>
                      </View>    
                          
                    )}
                />
                </View>
            )}
           </View> 
        </View> 
       
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        height: 20,
        backgroundColor: '#d3e0dc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
    },
    list: {
        marginTop: 5,
        padding: 5,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    text:{
        flex: 1,
        padding: 3,
        fontWeight: 'bold',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
  });

  