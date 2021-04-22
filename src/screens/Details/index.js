import React, {Component} from 'react';
import {
  Image
} from 'react-native';
import { Container, Text } from 'native-base';

export default class Details extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <Container>
        <Text> {navigation.getParam('Title')} </Text>
        <Image
          source={{ uri: navigation.getParam('Poster') }}
          style={{ height: 200, width: null, flex: 1 }}
        />
        <Text> YEAR: {navigation.getParam('Year')} </Text>
        <Text> imdbID: {navigation.getParam('imdbID')} </Text>
        <Text> TYPE: {navigation.getParam('Type')} </Text>
      </Container>
    );
  }

}


