import React, { Component } from "react";

const ThemeContext = React.createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkTheme: false,
    };
  }

  changeTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  };

  render() {
    const { isDarkTheme } = this.state;
    const { changeTheme } = this;
    return (
      <ThemeContext.Provider value={{ isDarkTheme, changeTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;
