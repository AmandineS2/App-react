import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

function detailcharacters() {
  const route = useRoute();
  const { character } = route.params;

  return (
    <View>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: character.image }}
      />
      <Text>Nom : {character.name}</Text>
      <Text>Statut : {character.status}</Text>
      <Text>Espèce : {character.species}</Text>
      {/* Affichez d'autres détails du personnage ici */}
    </View>
  );
}

export default detailcharacters;