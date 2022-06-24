import react from "react";
import { Text,View,StyleSheet,FlatList } from "react-native";

const ListScreen = ()=> {
    const friends = [
        {name: 'friend 1',age:23},
        {name: 'friend 2',age:21},
        {name: 'friend 3',age:20},
        {name: 'friend 4',age:19},
        {name: 'friend 5',age:25},
    ];

    return (
         <FlatList 
            
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend)=> friend.name}
            data={friends} 
            renderItem={({item})=>{
                return <Text style={styles.textStyle}>{item.name} - age {item.age}</Text>;

            }}
            />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;