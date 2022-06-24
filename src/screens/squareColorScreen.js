import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import ColorCounter from "../Components/ColorCounter";

const squareColorScreen=()=>{
    return(
        <View>
            <ColorCounter color="Red" />
            <ColorCounter color="Green"/>
            <ColorCounter color="Blue"/>
        </View>
    );
};

const styles=StyleSheet.create({

});

export default squareColorScreen;