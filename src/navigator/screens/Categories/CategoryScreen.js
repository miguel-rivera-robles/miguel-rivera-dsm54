import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet,Image} from 'react-native';

export default function PostsScreen(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://10.0.2.2:8000/api/category')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return(
        
        <View>
            
            {isLoading ? <ActivityIndicator/> : (
              
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                      <Text>{item.nombre}</Text>
                    )}
                    
                />
              
            )}
           </View> 
        
       
    );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '85%',
      padding: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    box: {
      width: '20%',
      height: '20%',
      padding: 5,
    },
    inner:{
      flex:1,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  