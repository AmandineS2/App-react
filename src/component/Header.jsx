import { Image, StyleSheet, View } from "react-native";
import React from "react"; 

const Header = () => {
  return (
    <View style={styles.header}>
      <Image 
        source={require('../../assets/img/logo.png')}
        resizeMode="contain"
        style={styles.logo} // Appliquer le style du logo
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    width: '100%', // Définit la largeur sur 100% de la largeur de l'écran
    alignItems: 'center', // Centre le contenu horizontalement
  },
  logo: {
    width: 150, // Ajustez la largeur de votre logo selon vos besoins
    height: 150, // Ajustez la hauteur de votre logo selon vos besoins
  }
});