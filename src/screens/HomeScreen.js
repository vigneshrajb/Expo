import React from 'react';
import { Text, StyleSheet ,View,Button,TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
  return (
  <View> 
    <Text style={styles.text}>Hi There</Text>
    <TouchableOpacity 
      style={styles.buttonContainer}
      onPress={()=> props.navigation.navigate('Components')}>
      <Text>Components Demo</Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.buttonContainer} onPress={()=> props.navigation.navigate('List')}>
      <Text>List Demo</Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.buttonContainer} onPress={()=> props.navigation.navigate('image')}>
      <Text>Image Demo</Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.buttonContainer} onPress={()=> props.navigation.navigate('Counter')}>
      <Text>Counter </Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.buttonContainer} onPress={()=> props.navigation.navigate('Color')}>
      <Text>Color </Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.buttonContainer} onPress={()=> props.navigation.navigate('SquareColor')}>
      <Text>SquareColor </Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonContainer: {
    height: 50,
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: '#7fffd4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
},
});

export default HomeScreen;
