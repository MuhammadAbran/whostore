/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, View, ScrollView} from 'react-native';
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

// componentDidMount(){
//    this.timer = setInterval()
// }

export default class App extends Component {
  render() {
    return (
      <Container>
         <Header style={{ align: 'center' }}>
            <Body>
                  <Title>Who Store?</Title>
            </Body>
         </Header>
         <ScrollView>
            <View style={{ flexDirection: 'row', flex: 1, paddingHorizontal: 5 }}>
               <View style={{ flex: 1 }}>
               <Card>
                  <CardItem cardBody>
                     <Image source={require('./assets/images/icon.png')} style={{ width:170, height: 170 }}/>
                  </CardItem>

                  <CardItem>
                        <Text><Text style={{ fontWeight: 'bold' }}>Mantan Bekas</Text>{"\n"}Rp. 1000</Text>
                  </CardItem>
               </Card>
               </View>

               <View style={{ flex: 1 }}>
               <Card>
                  <CardItem cardBody>
                     <Image source={require('./assets/images/icon.png')} style={{ width:170, height: 170 }}/>
                  </CardItem>
                  <CardItem>
                        <Text><Text style={{ fontWeight: 'bold' }}>Mantan Bekas</Text>{"\n"}Rp. 1000</Text>
                  </CardItem>
               </Card>
               </View>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, paddingHorizontal: 5 }}>
               <View style={{ flex: 1 }}>
               <Card>
                  <CardItem cardBody>
                     <Image source={require('./assets/images/icon.png')} style={{ width:170, height: 170 }}/>
                  </CardItem>

                  <CardItem>
                        <Text><Text style={{ fontWeight: 'bold' }}>Mantan Bekas</Text>{"\n"}Rp. 1000</Text>
                  </CardItem>
               </Card>
               </View>

               <View style={{ flex: 1 }}>
               <Card>
                  <CardItem cardBody>
                     <Image source={require('./assets/images/icon.png')} style={{ width:170, height: 170 }}/>
                  </CardItem>
                  <CardItem>
                        <Text><Text style={{ fontWeight: 'bold' }}>Mantan Bekas</Text>{"\n"}Rp. 1000</Text>
                  </CardItem>
               </Card>
               </View>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, paddingHorizontal: 5 }}>
               <View style={{ flex: 1 }}>
               <Card>
                  <CardItem cardBody>
                     <Image source={require('./assets/images/icon.png')} style={{ width:170, height: 170 }}/>
                  </CardItem>

                  <CardItem>
                        <Text><Text style={{ fontWeight: 'bold' }}>Mantan Bekas</Text>{"\n"}Rp. 1000</Text>
                  </CardItem>
               </Card>
               </View>

               <View style={{ flex: 1 }}>
               <Card>
                  <CardItem cardBody>
                     <Image source={require('./assets/images/icon.png')} style={{ width:170, height: 170 }}/>
                  </CardItem>
                  <CardItem>
                        <Text><Text style={{ fontWeight: 'bold' }}>Mantan Bekas</Text>{"\n"}Rp. 1000</Text>
                  </CardItem>
               </Card>
               </View>
            </View>
          </ScrollView>
      </Container>
    );
  }
}
