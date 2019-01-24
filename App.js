/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, View} from 'react-native';
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

export default class App extends Component {
  render() {
    return (
      <Container>
         <Header style={{ align: 'center' }}>
            <Body>
                  <Title>Who Store?</Title>
            </Body>
         </Header>
            <View style={{ flexDirection: 'row', flex: 1, paddingHorizontal: 5 }}>
               <View style={{ flex: 2 }}>
               <Card>
                  <CardItem cardBody>
                     <Image source={require('./assets/images/icon.png')} style={{ width:150, height: 150 }}/>
                  </CardItem>

                  <CardItem>
                        <Text><Text style={{ fontWeight: 'bold' }}>Mantan Bekas</Text>{"\n"}Rp. 1000</Text>
                  </CardItem>
               </Card>
               </View>

               <View style={{ flex: 2 }}>
               <Card>
                  <CardItem cardBody>
                     <Image source={require('./assets/images/icon.png')} style={{ width:150, height: 150 }}/>
                  </CardItem>
                  <CardItem>
                        <Text><Text style={{ fontWeight: 'bold' }}>Mantan Bekas</Text>{"\n"}Rp. 1000</Text>
                  </CardItem>
               </Card>
               </View>
            </View>
      </Container>
    );
  }
}
