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
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              style={styles.image}
              source={{ uri: item.image }} // Assuming the image URL is under the 'image' property of each character object
            />
            <Text>{item.name}</Text>
           
            {/* You can display other character details here */}
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
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default SearchScreen;