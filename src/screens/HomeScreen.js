import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';



function HomeScreen() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
      setData(prevData => [...prevData, ...response.data.results]);
      setPage(prevPage => prevPage + 1);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const navigation = useNavigation();

  const handleCharacterPress = (character) => {
    navigation.navigate('Detail', { character: character });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCharacterPress(item)}>
      <View style={{ flex: 1, flexDirection: 'row', padding: 20, alignItems: 'center', backgroundColor: '#3EA54A' }}>
        <Image
          style={{ width: 50, height: 50, marginRight: 10 }} // Add marginRight to create space between image and text
          source={{ uri: item.image }}
        />
        <Text style={{ color: 'white' }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, paddingTop: 20, backgroundColor: '#3EA54A', alignItems: 'center' }}> {/* Set the background color to dark green and align items to center */}
      <FlatList
        data={data}
        numColumns={2} // Set the number of columns to 2
        columnWrapperStyle={{ justifyContent: 'space-around' }} // Add space around the items in the columns
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={fetchData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      />
    </View>
  );
}

export default HomeScreen;