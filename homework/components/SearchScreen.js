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

import popcornImg from './popcorn.png';
import SearchResults from './SearchResults.js';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 60,
    backgroundColor: 'rgba(76,217,175,1)',
    marginBottom: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    color: 'white',
    margin: 10,
    height: 45,
    paddingLeft: 10,
    backgroundColor: 'rgba(76,217,175,1)',
    fontSize: 18,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: screenWidth,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  icon: {
    width: 90,
    height: 90,
    position: 'absolute',
    left: (screenWidth / 2 - 45),
    bottom: 0
  }
});

export default class SearchScreen extends Component {
  // We make a constructor to initialize our states.
  static navigationOptions = () => ({
    title: 'Recipe',
  });
  constructor() {
    super();
    this.state = {
      inputText: '',
      recipes: [{}],
    };
    this.handleRecipesubmit = this.handleRecipesubmit.bind(this);
  }

  fetchData() {
    const recipeTitle = this.state.inputText.replace(/ /g, '+');
    let self = this;
    fetch(`http://localhost:3001/data`, {
      method: 'POST',
      mode: 'no-cors', 
      body: JSON.stringify({
        recipeTitle,
      })
    })
    .then(response=>{
      console.log("response is>>>>", response);
      return response.json()
    })
    .then(result => {
      console.log("responseData is >>>", result);
      console.log("self is >>>", self);
      self.setState({recipes: result});
    })
    .catch(err=>console.log(err));
  }

  handleRecipesubmit () {
    this.fetchData();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            <Text style={{color: 'white'}}>
              Recipe Search
            </Text>
          </Text>
        </View>
        <View>
          <TextInput
            autoFocus
            style={styles.input}
            placeholderTextColor="white"
            placeholder="Search"
            onChangeText={inputText=>this.setState({inputText})}
            onSubmitEditing={()=>this.fetchData()}
          />
          <SearchResults recipes={this.state.recipes} navigate={this.props.navigation}/>
          
        </View>
        <View style={styles.footer} />
        <Image source={popcornImg} style={styles.icon} />
      </View>
    )
  }
}
