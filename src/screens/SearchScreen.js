import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, FlatList, Text, ActivityIndicator } from 'react-native';
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
    <View style={{ flex: 1, backgroundColor: 'green', padding: 16 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#fff', paddingHorizontal: 8, marginBottom: 16 }}
        placeholder="Rechercher..."
        value={searchValue}
        onChangeText={text => setSearchValue(text)}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        data={searchResults}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <Image
              style={{ width: 100, height: 100 }}
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

export default SearchScreen;