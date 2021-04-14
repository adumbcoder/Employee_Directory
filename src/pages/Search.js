import React, { Component } from "react";
import API from "../utils/API.js";
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
import Table from "../components/Table/Table";
import '../styles.css'
class Search extends Component {
  state = {
    search: "",
    results: [],
    employees: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmpList()
      .then(res => this.setState({ employees: res.data.results}))
      .then(res => this.setState({results: this.state.employees}))
      .catch(err => console.log(err));
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    
  }

  handleInputChange = (evt) => {
    let array = this.state.employees
    let filteredArr = array.filter(employee => employee.name.first.toLowerCase().indexOf(evt.target.value.toLowerCase())> -1);
    this.setState({results: filteredArr})
  };

  sortByName() {
    let array = this.state.employees
      array.sort((a, b) => {
      let fa = a.name.first.toLowerCase(),
          fb = b.name.first.toLowerCase();
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  });
  this.setState({results: array})
  }

  handleButtonClick = (evt) => {
    const btnName = evt.target.getAttribute('data-value');
    if(btnName === 'name') {
      this.sortByName()
    }
  }


  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <div className='box'>
            <h1>Employee Directory</h1>
            <p>Click on the arrow to sort the columns.</p>
          </div>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        </Container>
        <Table data={this.state.results} handleButtonClick={this.handleButtonClick}/>
      </div>
    );
  }
}

export default Search;
