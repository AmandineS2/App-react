import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { LikedCharactersContext } from '../component/LikedCharactersContext';

function LikeScreen() {
  const { likedCharacters } = useContext(LikedCharactersContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={likedCharacters}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: character }) => (
          <View style={styles.characterContainer}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text>Nom : {character.name}</Text>
            <Text>Statut : {character.status}</Text>
            <Text>Espèce : {character.species}</Text>
            <Text>Localisation : {character.location?.name}</Text>
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
  },
  characterContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default LikeScreen;