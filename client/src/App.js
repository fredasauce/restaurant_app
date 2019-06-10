import React from 'react';
import MenuForm from "./components/MenuForm.js";
import MenuList from "./components/MenuList.js";
import { Container, } from "semantic-ui-react";
import './App.css';

class App extends React.Component {
  state = { menus: [], };

  componentDidMount() {

  }
 
  addMenu = (name) => {

  }

  updateMenu = (id) => {

  }

  deleteMenu = (id) => {

  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
        <MenuList
          menus={this.state.menus}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />
      </Container>
    );
  }
};

export default App;
