import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from "axios";

function SearchScreen() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchValue) {
      setLoading(true);
      axios.get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
        .then(response => {
          setSearchResults(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher..."
        value={searchValue}
        onChangeText={text => setSearchValue(text)}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        data={searchResults}
        numColumns={2} 
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{ uri: item.image }}
              />
            </View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EA54A',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginBottom: 16,
    alignSelf: 'stretch',
  },
  itemContainer: {
    marginBottom: 16,
    alignItems: 'center',
    flex: 1, // add this
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default SearchScreen;