import React, {Component} from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, View, ScrollView, FlatList, Alert, Picker, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
 Container,
 Content,
 Header,
 Card, Left, Right,
 CardItem,
 Body,
 Title,
 Text, Thumbnail
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

  const images = this.state.data.images;
  this.setState({
   picture: images
 });
  console.log(this.state.data.description);
}

componentDidMount(){
  this.fetchData();
}

addToCart = () => {
  var postData = {
    'product_id': this.state.data.id,
    'quantity': 1
  };

  var formBody = [];
  for (var property in postData) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(postData[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  fetch('http://sppd.dayatfadila.com/shop/wp-json/wc/v2/cart/add', {
   method: 'POST',
   headers:{
    // Accept: 'aplication/json',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: formBody,
})
  .then( response => response.json())
  .then((responseJson) => {
    Alert.alert(JSON.stringify(responseJson))
    console.log(JSON.stringify(responseJson))
    "Post Response",
    "Response Body -> " + JSON.stringify(responseJson)
  })
  .done();
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
   <Text style={{ fontSize: 25 }}>{this.state.data.name}<Text style={{ fontSize: 30, color: color, marginTop: 10  }}>{"\n"}Rp. {this.state.data.price}.000</Text></Text>
   </CardItem>
   <CardItem cardBody>
   <Text style={{ marginHorizontal: 10 }}>{this.state.data.description}</Text>
   </CardItem>
   </Card>
   <Body>
   <Left>
   <Button
      onPress = {this.addToCart}
   icon={
     <Icon
     name="cart-plus"
     size={15}
     color="white"
     />
   }
   buttonStyle={{ width: 120 }}
   title=" Add To Cart"
   />
   </Left>
   <Right>
   </Right>
   </Body>
   </Content>

   </Content>

   );
}
}
