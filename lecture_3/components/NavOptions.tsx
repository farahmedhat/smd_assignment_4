import { View, Button, Text, ScrollView,StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React ,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'

  

const data = [
  {
    id: 1,
    title: 'Google Search',
    screen: 'MapScreen',
  },
  {
    id: 2,
    title: 'I\'m Feeling Lucky',
    screen: 'MapScreen',
  }
]

const NavOptions = (props: NavProps) => {
  
  
  const navigation = useNavigation();
  
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <View style={styles.container}>

       

          <TouchableOpacity
            onPress={() => props.term && navigation.navigate(item.screen as never, {
              term: props.term,
            } as never)}
            style={styles.button}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    backgroundColor: "#afeeee",
    padding: 10,
    borderColor: '#afeeee',
    borderWidth: 2,
    borderRadius: 9,
  },
  text: {
    color: "black",
    textAlign: "center",
  },
  btn : {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type NavProps = {
  term: string;
}

export default NavOptions