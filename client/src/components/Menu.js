import React from "react"
import { Segment, Button, Header, Icon, } from "semantic-ui-react"
import MenuForm from "./MenuForm";

class Menu extends React.Component {
  state = { editing: false, };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing, });
  };

  render() {
    return (
      <Segment style={styles.segment}>
        {
          this.state.editing ?
            <MenuForm
              {...this.props}
              editMenu={this.props.editMenu}
              toggleEdit={this.toggleEdit}
            />
          :
            <div>
              <Header as="h3">{this.props.name}</Header>
            </div>
        }
        <div>
          <Button basic icon color="blue" onClick={this.toggleEdit}> 
            <Icon name="edit outline" />
          </Button>
          <Button basic icon color="red" floated="right" onClick={() => this.props.deleteMenu(this.props.id)}> 
            <Icon name="trash alternate outline" />
          </Button>
        </div>
      </Segment>
    )
  }
};

const styles = {
  segment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default Menu;