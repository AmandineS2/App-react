import { Image, StyleSheet, View } from "react-native";
import React from "react"; 

const header = () => {

return <Image 
style={styles.header}
source={require('../../assets/img/logo.png')}
resizeMode="contain"
/>;

};

export default header;

const styles = StyleSheet.create({
    header: {
        height: 100,
        width: 100,
        alignSelf: "center",
    }
});