import React from 'react';
import axios from "axios"
import MenuForm from "./components/MenuForm.js";
import MenuList from "./components/MenuList.js";
import { Container, Header } from "semantic-ui-react";
import './App.css';

class App extends React.Component {
  state = { menus: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }
 
  addMenu = (name) => {
    axios.post('/api/menus', {name})
    .then(res => {
      const { menus, } = this.state;
      this.setState({ menus: [...menus, res.data], });
    })
  }

  editMenu = (menu) => {
    axios.put(`/api/menus/${menu.id}`,menu )
      .then( res => {
        const menus = this.state.menus.map( m => {
        if (m.id === menu.id)
          return res.data;
        return m;
        });
        this.setState({ menus, });
      })
  }

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: menus.filter(m => m.id !==id), })
      })
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <Header as="h1" textAlign="center">Gluten and Glutton</Header>
        <hr />
        <br />
        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
        <MenuList
          menus={this.state.menus}
          editMenu={this.editMenu}
          deleteMenu={this.deleteMenu}
        />
      </Container>
    );
  }
};

export default App;
