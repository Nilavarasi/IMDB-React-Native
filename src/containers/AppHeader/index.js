import React from 'react';
import { Header, Left, Body, Button, Icon, Title } from 'native-base';

const AppHeader = (props) => (
  <Header>
    <Left>
      <Button transparent onPress={props.openDrawer}>
        <Icon name='menu' />
      </Button>
    </Left>
    <Body>
      <Title>{props.title}</Title>
    </Body>
  </Header>
);

export default AppHeader;
