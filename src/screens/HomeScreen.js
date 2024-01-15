import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import axios from "axios";



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

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: 'row', padding: 20 }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: item.image }}
      />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      
      <FlatList
        data={data}
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