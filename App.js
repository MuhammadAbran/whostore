/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, View, ScrollView, FlatList} from 'react-native';
import {
   Container,
   Content,
   Header,
   Card, Left, Right,
   CardItem,
   Body,
   Title,
   Text, Thumbnail,
   Icon
   } from 'native-base';

const color = '#e74c3c';
const image = './assets/images/icon.png';
const data = [
   {
      image: image,
      title: "Motor Bekas",
      price: "Rp. 1000"
   },
   {
      image: image,
      title: "Mobil Bekas",
      price: "Rp. 2000"
   },
   {
      image: image,
      title: "Mantan Bekas",
      price: "Rp. 10"
   },
   {
      image: image,
      title: "Lap Bekas",
      price: "Rp. 999900000"
   },
   {
      image: image,
      title: "Bantal Bekas",
      price: "Rp. 9000"
   }
];
const numColumns = 2;

export default class App extends Component {
   renderItem = ({ item, index }) => {
      return (
         <Card>
            <CardItem cardBody>
               <Image source={require(image)} style={{ width:170, height: 170 }}/>
            </CardItem>

            <CardItem>
                  <Text><Text style={{ fontWeight: 'bold' }}>{ item.title } </Text>{"\n"}{ item.price }</Text>
            </CardItem>
         </Card>
         );
   }

  render() {
    return (
      <Container>
         <Header style={{ backgroundColor: color }}>
            <Body>
                  <Title>Who Store?</Title>
            </Body>
         </Header>
         <ScrollView>
            <FlatList
               data={data}
               renderItem={this.renderItem}
               numColumns={numColumns}
               keyExtractor={(item, index) => item.key}
            />
         </ScrollView>
      </Container>
    );
  }
}
