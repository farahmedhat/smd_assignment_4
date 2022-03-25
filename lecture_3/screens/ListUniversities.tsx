import React , {PureComponent, useState}  from 'react'; 
import {StyleSheet, Text, TouchableOpacity, View, FlatList, StatusBar, Image} from 'react-native'; 
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { useEffect } from 'react';
import * as axios from 'axios'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';


const Item = ({ name,title, address, slug, image }) => (
    <View>
        <Card containerStyle={{ justifyContent: "center" }}>

            <Carousel
              data={image}
              renderItem={slideshow}
              sliderWidth={327}
              itemWidth={300}
            />
            <Card.Divider />
            <Card.Title>{name}</Card.Title>
            <Card.Divider />
            <Text>{title}</Text>
        <Text>{address}</Text>
        </Card>
    </View>
)
const slideshow = ({item, index}) => {

    return (

        <View style={{
            borderRadius: 5,
            height: 300,
            width: 300,
            justifyContent: 'center',
        }}>
            <Image
                style={{ resizeMode: "contain", height: 300,
                width: 300}}

                source={item ? { uri: item } : require('../assets/noooo.png')}
            />
        </View>
    );
}

const ListUniversities = () => {
    const route = useRoute<RouteProps>();
    const { term } = route.params;
    const [universities, setUniversity] = useState<University[]>();

useEffect(() => {
    Promise.all([
      
      axios.default.get(`http://172.20.10.10:3000/universities/${term}`),
    ])
      .then(([ { data: universitiesResults }]) => {
        if (universitiesResults) setUniversity(universitiesResults);
        console.log(term); 
        console.log(universities);
      });
  }, []);
  const renderItem = ({ item }) => (
    <Item title={item.name}  address= {item.addressFmt} image= {item.image}/>
  );
  


    return (
        <SafeAreaView>
            <View > 
                <FlatList
                    data= {universities}
                    renderItem= {renderItem}
                    keyExtractor={(item) => item.name}
                />
            </View>
            
        </SafeAreaView>
    )
}



type NavProps = {
    term: string;
};
type RouteParams = {
    term: string;
};
type RouteProps = {
    params: RouteParams
    name: string;
    key: string;
};
type University = {
    name: string;
    lat: number;
    lng: number;
    addressFmt: string; 
    image: Array<string>;
};

export default ListUniversities

