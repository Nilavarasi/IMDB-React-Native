/**
 * Root Component for Application
 */
import React, { Component } from "react";
import { Drawer, StyleProvider } from "native-base";
import AppHeader from "./containers/AppHeader/index";
import SideBar from "./containers/Sidebar/index";
import AppNavigator from "./routes";

/**
 * Theme Providers
 */
import material from "../native-base-theme/variables/material";
import getTheme from "../native-base-theme/components";

export default class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Drawer
          ref={ref => { this.drawer = ref; }}
          content={<SideBar navigator={this.navigator} />}
          onClose={this.closeDrawer}
        >
          <AppHeader title="IMDB" openDrawer={this.openDrawer} />
          <AppNavigator />
        </Drawer>
      </StyleProvider>
    );
  }
}
