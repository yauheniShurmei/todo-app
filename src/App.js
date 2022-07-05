import React, { Component } from "react";
import "./App.scss";
import Clock from "./components/Clock";
import DoneList from "./components/DoneList";
import EnterTask from "./components/EnterTask";
import ToDoList from "./components/ToDoList";
import ThemeContext from "./Context/ThemeContext";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      userinput: "",
      done: [],
    };
  }

  addToList = (input) => {
    if (input === "") {
      alert("empty input");
    } else {
      const newitems = this.state.items;
      newitems.push(input);
      this.setState({
        items: newitems,
        userinput: "",
      });
    }
  };

  delete = (indexp) => {
    const newarray = this.state.items.filter((item, index) => index !== indexp);
    this.setState({
      items: newarray,
    });
  };

  deleteDone = (indexp) => {
    const newarray = this.state.done.filter((item, index) => index !== indexp);
    this.setState({
      done: newarray,
    });
  };

  addToDone = (e) => {
    const donelist = this.state.done;
    donelist.push(e);
    this.setState({
      done: donelist,
    });

    if (this.state.items.length === 1) {
      alert("Good job!", "You clicked the button!", "success");
    }
  };

  handleChangeTheme = () => {
    this.context.changeTheme();
  };

  render() {
    return (
      <div
        className="App"
        data-theme={this.context.isDarkTheme ? "dark" : "light"}
      >
        <div className="themeButton" onClick={this.handleChangeTheme}>
          {this.context.isDarkTheme ? (
            <img src="sun_light.png" alt="theme icon" />
          ) : (
            <img src="sun_dark.png" alt="theme icon" />
          )}
        </div>
        <div className="container">
          <Clock />
          <EnterTask addToList={this.addToList} />
          <ToDoList
            items={this.state.items}
            deleteItem={this.delete}
            addToDone={this.addToDone}
          />
          <DoneList done={this.state.done} deleteDone={this.deleteDone} />
        </div>
      </div>
    );
  }
}

App.contextType = ThemeContext;
