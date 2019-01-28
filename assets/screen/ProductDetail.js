import React, {Component} from 'react';
import {Image, View, ScrollView, FlatList, Alert, TouchableNativeFeedback} from 'react-native';
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
import { createStackNavigator, createAppContainer } from 'react-navigation';

const color = '#3498db';
const numColumns = 2;


export default class ProductDetail extends Component {
   constructor(props){
      super(props);
      this.state ={
         data:[]
      }
   }

   fetchData = async()=> {
      const responses = await fetch('http://sppd.dayatfadila.com/public/wootest/65');
      const posts = await response.json();
      // const pos = JSON.stringify(posts);
      this.setState({data: posts});
   }

   componentDidMount(){
      this.fetchData();
   }

   static navigationOptions = {
       title: 'Who Store?',
       headerStyle: {
         backgroundColor: color
       },
       headerTintColor: '#fff',
     };

     renderItem = ({ item, index }) => {
        return (
          <Card>
              <CardItem cardBody>
                 <TouchableNativeFeedback
                    onPress={() => this.props.navigation.navigate('ProductDetail')}>
                    <Image
                       source={{ uri: item.images[0].src }}
                       style={{ width:170, height: 170 }}
                       />
                 </TouchableNativeFeedback>
              </CardItem>

              <CardItem>
                    <Text><Text style={{ fontWeight: 'bold' }}>{ item.name } </Text>{"\n"}Rp. { item.price }.000</Text>
              </CardItem>
          </Card>
          );
    }


    render() {
    return (
        <Container>
          <ScrollView>
              <FlatList
                 data={this.state.data}
                 renderItem={this.renderItem}
                 numColumns={numColumns}
                 keyExtractor={(item, index) => item.key}
              />
          </ScrollView>
        </Container>
    );
    }
}
