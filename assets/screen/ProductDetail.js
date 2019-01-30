import React, {Component} from 'react';
import {Image, View, ScrollView, FlatList, Alert, TouchableNativeFeedback, TouchableOpacity, Button} from 'react-native';
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
const regex = /(<([^>]+)>)/;

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

  const images = this.state.data.images;
      this.setState({
         picture: images
      });
      console.log(this.state.data.description);
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

   _renderItem = ({ item, index }) => {
     return (
        <Image
           source={{ uri: item.src }}
           style={{ width: 380, height: 200 }}
        />
     );
  }

   render() {
    return (
       <Content>
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.picture}
              renderItem={this._renderItem}
              sliderWidth={380}
              itemWidth={500}
            />
          <Content style={{ marginHorizontal: 12, marginTop: -25}}>
             <Card>
               <CardItem header>
                   <Text style={{ fontSize: 20 }}>{this.state.data.name}</Text>
               </CardItem>
               <CardItem cardBody>
                   <Text style={{ marginHorizontal: 10 }}>{this.state.data.description}</Text>
               </CardItem>
             </Card>
             <Button
                 onPress={ Alert.alert("yuhu~") }
                 title="Add To Cart"
               />
          </Content>

       </Content>

      );
  }
}
