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
  const response = await fetch('http://sppd.dayatfadila.com/public/wootest/65');
  const post = await response.json();
      this.setState({data: post});
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

   render() {
    return (
    <Content>
      <Text>{this.state.data.name}</Text>
      </Content>
      
      );
  }
}
