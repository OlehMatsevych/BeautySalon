
import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import UserList from './UserList';
import EmployeeList from './EmployeeList';
import Skylight from 'react-skylight';
import AddPost from "./AddPost";

export default class TabsDefault extends Component {
  state ={
    admin: ''
  }
  constructor(props){
    super(props);
    this.state.admin = window.prompt("Введіть ідентифікатор адміністратора: ")
  }
  
  state = {
    activeItem: "2",
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };
  render() {
    
    if(this.state.admin == 'adminadmin'){
      return (
        <MDBContainer>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
              Список клієнтів
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
              Список працівників
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
              Додати новий запис
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
              <UserList/>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
              <EmployeeList/>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
              <AddPost/>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
      );
  }
  else {
    return(
      <div class="container">
        <div class="text-box">
          <h1>У вас немає прав адміністратора</h1>
        </div>
          <p>Спробуйте ще раз<span> :)</span></p>
      </div>
    )
  }
}
}