import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import axios from "axios";

function detailcharacters() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/1'); // Remplacez 1 par l'ID du personnage souhaité
        setCharacter(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération du personnage :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!character) {
    return <Text>Aucun personnage trouvé</Text>;
  }

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