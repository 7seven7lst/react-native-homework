// Importing React
import React, { Component } from 'react';
import { map } from 'lodash';

// Importing all of the React Components that we're going to use.
import {
  Text,
  View,
  StyleSheet, 
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// Creating the 'Results' component.
class SearchResults extends Component {

  
  // This is what will be displayed on the page.
  render() {
    const { navigate } = this.props.navigate;
    // We reference this.state.movie to display results from the API call.
    if (!this.props.recipes) {
      return (
        <View style={styles.item}>
          <Text>
            ...
          </Text>
        </View>
      )
    }
    return (
      <ScrollView>
      {
        map(this.props.recipes, recipe =>(
          <TouchableOpacity onPress={() =>
          navigate('About', { recipe: recipe })
          }>
            <View style={styles.item} key={recipe.uri}>
              <Text style={styles.txt}>
                <Text style={{ fontWeight: 'bold' }}>
                Name:
                </Text>
                  {recipe.label}
                {"\n"}
              </Text>
              <Text style={styles.txt}>
                <Text style={{ fontWeight: 'bold' }}>
                Image:
                </Text>
            
                {"\n"}
              </Text>
              <Text style={styles.txt}>
                <Text style={{ fontWeight: 'bold' }}>
                Ingredients:
                </Text>
                  {recipe.ingridentLines}
                {"\n"}
              </Text>
              <Text style={styles.txt}>
                <Text style={{ fontWeight: 'bold' }}>
                Source:
                </Text>
                  {recipe.source}
                {"\n"}
              </Text>
              <Text style={styles.txt}>
                <Text style={{ fontWeight: 'bold' }}>
                healthLabels:
                </Text>
                  {recipe.healthLabels}
                {"\n"}
              </Text>
            </View>
          </TouchableOpacity>
          )
        )
      }
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    color: 'white'
  },
  item: {
    margin: 10,
    backgroundColor: 'rgba(76,217,175,1)',
    padding: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});

// Exporting our component.
export default SearchResults;
