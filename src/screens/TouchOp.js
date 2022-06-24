import React from "react";
import { Text, StyleSheet , View ,TouchableOpacity  } from "react-native";

const touchOp = ()=>{

    return (
    
    <View >
        <TouchableOpacity onPress={()=> console.log('Pressed')}style={styles.buttonContainer}><Text style={styles.buttonText}>Custom Button</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> console.log('Pressed')} style={styles.buttonContainer2}><Text style={styles.buttonText2}>Custom Button</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> console.log('Pressed')} style={styles.buttonContainer3}><Text style={styles.buttonText3}>Custom Button</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> console.log('Pressed')} style={styles.buttonContainer4}><Text style={styles.buttonText4}>Custom Button</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> console.log('Pressed')} style={styles.buttonContainer5}><Text style={styles.buttonText5}>Custom Button</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> console.log('Pressed')} style={styles.buttonContainer6}><Text style={styles.buttonText6}>Custom Button</Text></TouchableOpacity>

    </View>
    );
};

const styles=StyleSheet.create({

    buttonContainer: {
        
        height: 50,
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#7fffd4',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    buttonText: {
        textTransform:'uppercase',
        color:'black',
        fontSize: 18,

    },
    buttonContainer2: {
        height: 50,
        marginHorizontal: 10,
        marginTop: 20,
        backgroundColor: '#7fffd4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    buttonText2: {
        textTransform:'uppercase',
        color:'black',
        fontSize: 18,
        fontWeight: 'bold',

    },
    buttonContainer3: {
        height: 50,
        marginHorizontal: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 5,
        borderColor: '#7fffd4',
    },
    buttonText3: {
        textTransform:'uppercase',
        color:'blue',
        fontSize: 16,
        fontWeight: 'bold',

    },
    buttonContainer4: {
        height: 150,
        width: 150,
        marginHorizontal: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7fffd4',
        borderRadius: 80,
        borderWidth: 5,
        
    },
    buttonText4: {
        textTransform:'uppercase',
        color:'blue',
        fontSize: 16,
        fontWeight: 'bold',

    },
    buttonContainer5: {
        height: 150,
        width: 150,
        marginHorizontal: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7fffd4',
        borderRadius: 50,
        borderWidth: 5,
        
    },
    buttonText5: {
        textTransform:'uppercase',
        color:'blue',
        fontSize: 16,
        fontWeight: 'bold',

    },
    buttonContainer6: {
        
        height: 50,
        width: 200,
        marginHorizontal: 10,
        marginTop: 20,
        backgroundColor: '#7fffd4',
        opacity: 0.7,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        
    },
    buttonText6: {
        textTransform:'uppercase',
        color:'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default touchOp;