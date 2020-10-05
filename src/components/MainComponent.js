import React from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        selectedDish: null,
        dishes: DISHES
      };
    }

    render() {
      const HomePage = () => {
        return(
            <Home />
        );
      }

      const MenuPage = () => {
        return (
          <Menu dishes={this.state.dishes} />
        );
      }

      return (
        <div>
          <Header />
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={MenuPage} />
              <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
      );
    }
  }
  
  export default Main;