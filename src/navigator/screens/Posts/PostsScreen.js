import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet,Image} from 'react-native';
import{Avatar, Card, Title, Paragraph } from 'react-native-paper';


const LeftContent = props => <Avatar.Icon {...props} icon="card-text" />

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
        
        <View style={styles.container}>
            
            {isLoading ? <ActivityIndicator/> : (
                
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                      <View>
                          <Card>
                          <Card.Title title={item.id} subtitle={item.title} left={LeftContent} />
                          <Card.Content>
                            <Title>{item.slug}</Title>
                            <Paragraph>{item.description}</Paragraph>
                          </Card.Content>
                          <Card.Cover source={{ uri: item.image }} />
                          </Card>
                      </View>
                    )}
                />
               
            )}
           </View> 
        
       
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
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

  