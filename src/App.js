
import './App.css';
import React, { createContext,  useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import ManageProduct from './Components/Admin/ManageProduct/ManageProduct';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CheckOut from './Components/CheckOut/CheckOut';

export const UserContext =createContext();

function App() {
  document.title = "Premium Store";

   const [loggedInUser, setLoggedInUser] = useState({ });
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
        <p>User:{loggedInUser.name}</p> 
    <Router>
             <Header/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/manageProduct">
            <ManageProduct />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
      <PrivateRoute path="/checkOut/:id">
        <CheckOut/>
      </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
     </UserContext.Provider>
  );
}

export default App;
