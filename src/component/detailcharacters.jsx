import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LikedCharactersContext } from './LikedCharactersContext';

function DetailCharacters() {
  const route = useRoute();
  const { character } = route.params;

  // Ajoutez un état pour suivre si l'image a été aimée
  const [liked, setLiked] = useState(false);

  // Utilisez useContext pour accéder à likedCharacters et setLikedCharacters
  const { likedCharacters, setLikedCharacters } = useContext(LikedCharactersContext);

  // Ajoutez une fonction pour aimer un personnage
  const likeCharacter = () => {
    setLiked(!liked);
    if (!liked) {
      setLikedCharacters([...likedCharacters, character]);
    } else {
      setLikedCharacters(likedCharacters.filter(item => item.id !== character.id));
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', padding: 20, backgroundColor: '#e3e3e3', borderRadius: 10, margin: 10 }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 10 }}
          source={{ uri: character.image }}
        />
        <Text style={{ marginTop: 10 }}>Nom : {character.name}</Text>
        <Text>Statut : {character.status}</Text>
        <Text>Espèce : {character.species}</Text>
        <Text>Localisation : {character.location?.name}</Text>

        {/* Modifiez le bouton "Like" pour qu'il aime un personnage lorsqu'il est pressé */}
        <TouchableOpacity onPress={likeCharacter}>
          <Icon name={liked ? 'heart' : 'heart-outline'} size={24} color="red" style={{ paddingTop: 10 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EA54A',
  },
});

export default DetailCharacters;