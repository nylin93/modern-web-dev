import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groceryItems: [],
      newItemName: '',
      newItemQuantity: 0
    }
  }

  setGroceryItemName(e) {
    this.setState({
      newItemName: e.target.value
    })
  }

  setGroceryItemQuantity(e) {
    this.setState({
      newItemQuantity: e.target.value
    })
  }

  addNewItem(e) {
    e.preventDefault();
    const newItem = {
      name: this.state.newItemName,
      quantity: this.state.newItemQuantity
    };

    this.setState({
      newItemName: '',
      newItemQuantity: 0      
    });

    this.state.groceryItems.push(newItem);
  }

  render() {
    return (
      <div> 
        <section>
          <h1>ProfessorNate's Grocery List</h1>
          {
            this.state.groceryItems.map(item => 
              <div>
                {item.name}: {item.quantity}
              </div>
            )
          }
        </section>
        <form>
          Item name:<br />
          <input type="text" placeholder="tomatoes" value={this.state.newItemName} onChange={(e) => this.setGroceryItemName(e)} /><br />
          Item quantity:<br />
          <input type="number" placeholder="6" value={this.state.newItemQuantity} onChange={(e) => this.setGroceryItemQuantity(e)} /><br />
          <button type="submit" onClick={(e) => this.addNewItem(e)}>Add item</button>
        </form>
      </div>
    );
  }
}

export default App;
