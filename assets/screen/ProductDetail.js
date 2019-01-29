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
   picture: []
 }
}

fetchData = async()=> {
  const id = this.props.navigation.state.params.id;
  console.log(id);

  const response = await fetch('http://sppd.dayatfadila.com/public/wootest/'+id);
  const post = await response.json();
      this.setState({
         data: post
      });

      // const images = JSON.stringify(this.state.data.images);
      const images = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];
      this.setState({
         picture: images
      });
      console.log(this.state.data);
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
      <View>
                <Text>{ item.title }</Text>
            </View>
     );
  }

   render() {
    return (
       <Content>
       <ScrollView>
          <Text>{this.state.data.name}</Text>
          </ScrollView>
       </Content>

      );
  }
}
