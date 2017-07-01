import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  // Notice these imports:
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity

} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class AboutScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.recipe.label,
  });
  render() {
    const { goBack } = this.props.navigation;
    const imgUrl = this.props.navigation.state.params.recipe.image;
    console.log("imgUrl is >>>", imgUrl);
    console.log("this.props.navigation is >>>", this.props.navigation);
    return (
      <View style={styles.container}>
        <View style={styles.picture}>
          <Image
              style={{width: 200, height: 200}}
              source={{uri: imgUrl}}
            /> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  picture: {
    margin: 10,
    height: screenWidth *0.8,
    paddingLeft: 10,
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
 
});
