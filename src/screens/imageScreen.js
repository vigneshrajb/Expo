import React from "react";
import { View, Text , StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";
const imageScreen = ()=> {
return (
<View>
    <ImageDetail imageSource={require('../../assets/forest.jpg')} title='Forest' score='8' />
    <ImageDetail imageSource={require('../../assets/beach.jpg')} title='Beach' score='9'/>
    <ImageDetail imageSource={require('../../assets/mountain.jpg')} title='Mountain'score='10'/>


    

</View>
);
};

const styles=StyleSheet.create({

});

export default imageScreen;