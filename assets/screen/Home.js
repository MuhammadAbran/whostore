export default class Home extends Component {
   static navigationOptions = {
       title: 'Who Store?',
       headerStyle: {
         backgroundColor: '#f4511e'
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
                     source={require(image)}
                     style={{ width:170, height: 170 }}
                     />
                </TouchableNativeFeedback>
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
