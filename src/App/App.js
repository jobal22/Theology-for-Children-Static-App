import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import Read from '../Read/Read';
import LandingPage from '../LandingPage/LandingPage.js';
import DRPages from '../DRPages/DRPages';
import DailyReadingPlan from '../DailyReadingPlan/DailyReadingPlan.js';
import STORE from '../Store/dummy-store';
import './App.css';

export default class App extends Component {
  state = {
    books: [],
    chapters: [],
    verses: [],
    readingPlanTitles: [],
    readingPlans: []
    }

  renderMainRoutes() {
    const store = STORE;
    return (
      <>
        <Route exact path= "/" component={LandingPage}/>
        
        {/* <Route exact path= "/main" component={MainPage}/> */}
        {/* <Route exact path= "/main/:bookId" component={Read}/>
        <Route exact path= "/dailyreader" component={DailyReadingPlan}/>
        <Route exact path= "/dailyreader/:dailyreaderId" component={DRPages}/> */}
        <Route
          exact
          path = "/main"
          render = {routeProps => {
            return <MainPage {...routeProps} store={store}/>
          }}
        />
        <Route
          exact
          path = "/main/:bookId"
          render = {routeProps => {
            return <Read {...routeProps} store={store}/>
          }}
        />
        <Route
          exact
          path = "/dailyreader/:readingPlanTitleId"
          render = {routeProps => {
            return <DailyReadingPlan {...routeProps} store={store}/>
          }}
        />
        <Route
          exact
          path = "/readingplan/:planId"
          render = {routeProps => {
            return <DRPages {...routeProps} store={store}/>
          }}
        />
        

      </>
    )
  }


  render() {
    return (
      <div className="App">
        <nav className="App__nav" >
          <Link to={"/main"}>Nav</Link>
        </nav>
        <main>
          <div className="App__link">
            <main className="App__main">{this.renderMainRoutes()}</main>
          </div>
        </main>
        <footer className="App__footer"></footer>
      </div>
    )
  }
}
