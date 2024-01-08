import { Image, StyleSheet, View } from "react-native";
import React from "react"; 

const Logo = () => {

return <Image 
style={styles.image}
source={require('../../assets/img/logo.png')}
resizeMode="contain"
/>;

};

export default Logo;

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        alignSelf: "center",
    }
});