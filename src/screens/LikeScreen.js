import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { LikedCharactersContext } from '../component/LikedCharactersContext';

function LikeScreen() {
  const { likedCharacters } = useContext(LikedCharactersContext);

  return (
    <View>
      {likedCharacters.map(character => (
        <Text key={character.id}>{character.name}</Text>
      ))}
    </View>
  );
}

export default LikeScreen;