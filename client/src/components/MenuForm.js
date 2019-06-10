import React from "react";
import { Header, Form,} from "semantic-ui-react";

class MenuForm extends React.Component {
  state = { name: "", };

  componentDidMount() {
    if (this.props.id) {
      this.setState({ name: this.props.name })
    }
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editMenu({ id: this.props.id, ...this.state, });
      this.props.toggleEdit();
    } else {
      this.props.addMenu(this.state.name);
    }
    this.setState({ name: "", });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h3">
          { this.props.id ? "Edit Menu" : "Create a New Menu"}
        </Header>
        <Form.Group>
          <Form.Input
            placeholder="Menu Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Button inverted color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default MenuForm;