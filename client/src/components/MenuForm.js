import React from "react";
import { Form,} from "semantic-ui-react";

class MenuForm extends React.Component {
  state = { name: "", };

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  handleSumbit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: "", });
  }

  render() {
    return (
      <Form onSubmit={this.handleSumbit}>
        <Form.Input
          label="Menu"
          placeholder="Add a Menu"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

export default MenuForm;