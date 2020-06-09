import React, { Component } from 'react'
import './App.css';
import ListItem from './ListItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items:[],
      currentItem:{
         text:'',
         key:''
       }
    }
    this.handleUpdate =this.handleUpdate.bind(this);
  }
  
  handleInput =(e) =>{
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem =(e)=>{
    e.preventDefault();
    const newItem =  this.state.currentItem;
    console.log(newItem)
    if(newItem.text !==""){
      const newItems = [...this.state.items,newItem]
      this.setState({
        items:newItems ,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem = (key) =>{
    const filteredItems =this.state.items.filter(item => item.key !== key)
    this.setState({
      items:filteredItems
    })
  }
  handleUpdate(text,key){
    const items =this.state.items;
    items.map(item =>{
      if(item.key === key){
        item.text= text;
      }
      this.setState({
          items:items
      })
    })

  }

  render() {
    return (
      <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter To-do" value={this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">
            Add
          </button>
        </form>
      </header>
      <ListItem items={this.state.items} deleteItem={this.deleteItem} handleUpdate={this.handleUpdate}/>
      </div>
    )
  }
}

export default App
