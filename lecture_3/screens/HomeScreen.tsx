import { Image, SafeAreaView, StyleSheet, Text, TextInput, View , ImageBackground} from 'react-native'
import React, { useEffect, useState } from 'react'
import NavOptions from '../components/NavOptions';




const HomeScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView>
      <ImageBackground
         style={styles.image}
        source={require('C:/Users/Farah/Downloads/smd-master/lecture_3/assets/sea2.jpg')}>
          </ImageBackground>
      <View style={styles.container}>
      
          <Text style={{fontWeight: 'bold', color: 'midnightblue' ,fontSize:60}}>
       Google 
    </Text>
        <TextInput style={styles.searchInput}
          placeholder="Type Here..."
          onChangeText={(text: string) => setSearch(text)}
          value={search}
          autoCapitalize='none'
        />
        <NavOptions term={search} />
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
    bottom:-150,
    
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position:'absolute',
    height: "277%",
    width: "100%",
  },
  searchInput: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
  }
  
});

export default HomeScreen
