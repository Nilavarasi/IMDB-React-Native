import React, { Component } from 'react';
import {
  Text, Image, TouchableOpacity
} from 'react-native';

import { Container, Item, Input, Icon, Button, Header, Content, Card, CardItem, Title, Left, Body, Right } from 'native-base';

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      inputMovie: '',
      resultantMovie: [],
    }
  }

  handleSubmit = () => {
    return fetch('http://www.omdbapi.com/?s=' + this.state.inputMovie + '&apikey=e27cde60&page=1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 'resultantMovie': responseJson.Search })
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Container>
        <Item>
          <Input
            placeholder='Movie Name'
            onChangeText={(inputMovie) => this.setState({ inputMovie })}
          />
          <Button
            iconLeft
            dark
            onPress={() => this.handleSubmit()}
          >
            <Icon name='search' />
          </Button>
          
        </Item>

        {
          this.state.resultantMovie.length > 0 &&
          <Content>

            <Card dataArray={this.state.resultantMovie} renderRow={(movie) => {
              return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', movie)}>
                  <Card pointerEvents="none" >
                    <Header>
                      <Title style={{ paddingTop: '4%' }}>{movie.Title}</Title>
                    </Header>
                    <CardItem cardBody>
                      <Image
                        source={{ uri: movie.Poster }}
                        style={{ height: 200, width: null, flex: 1 }}
                      />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Text>Year: {movie.Year}</Text>
                      </Left>
                      <Body>
                        <Text>Type: {movie.Type}</Text>
                      </Body>
                      <Right>
                        <Text>IMDB-ID: {movie.imdbID}</Text>
                      </Right>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              );
            }}
            />
          </Content>
        }
      </Container>
    );
  }
}
