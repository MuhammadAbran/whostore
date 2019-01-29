import React, {Component} from 'react';
import {Image, View, ScrollView, FlatList, Alert, TouchableNativeFeedback} from 'react-native';
import Carousel from 'react-native-snap-carousel';
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
   data:[],
   image: []
 }
}

fetchData = async()=> {
  const response = await fetch('http://sppd.dayatfadila.com/public/wootest/65');
  const post = await response.json();
      this.setState({
         data: post
      });

      const images = JSON.stringify(this.state.data.images);
      this.setState({
         image: images
      });
      console.log(this.state.image);
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

   _renderItem = (item, index) => {
     return (
       <Image
         source={{ uri: item.src }}
       />
     );
  }

   render() {
    return (
       <Content>
          <Carousel
            ref={(c)=> { this._carousel = c; }}
            data={ this.state.image }
            renderItem={ this._renderItem }
            sliderWidth={ 150 }
            itemWidth={ 100 }
          />
         <Text>{this.state.data.name}</Text>
       </Content>

      );
  }
}
