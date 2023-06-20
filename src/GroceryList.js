import { Component } from "react";
import check from "./check.jpg"

export class GroceryList extends Component{
    constructor(){
        super();


        this.state={
            userInput: "",
            groceryList: [

            ]
        }
    }

    onChangeEvent(e){
        this.setState({userInput: e});
    }

    addItem(input){
        if (input === ''){
            alert('Please enter an item')
        } else{
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ""});
        }
        
    }

    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];

        // 2nd option how to empty the list: listArray.length = 0
        this.setState({groceryList: listArray})
    }

    crossedWord(event){
        const li = event.target;
        li.classList.toggle("crossed");
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                placeholder="What do you want to buy today?"
                onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className=" btn btn-add">ADD</button>
            </div>
                <ul className="main">
                    {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}> 
                    <img src={check} alt= "check-icon" width="20px"/>
                    {item}
                    </li>
                    ))}
                </ul>
                <div className="container">
                <button onClick={() => this.deleteItem()} className=" btn btn-delete">DELETE</button>
            </div>
            </form>
            </div>
        )
    }
}

