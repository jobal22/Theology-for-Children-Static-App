import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

export default class MainPage extends Component {
  render() {
    const {books, readingPlanTitles} = this.props.store;
    console.log('WHY', readingPlanTitles)
    return (
      <div className="MainPage">
        <main>
          <header className="Header">
          <h1>Theology for Children</h1>
          </header>

          <section>
            {books.map(book=>
            <Link to={`/main/${book.id}`}key={book.id}><h2>Read {book.name}</h2></Link>)}
            <p>"insert preview image"</p>
        </section>


          {/* <section>
            <Link to={`/main/:bookId`}><h2>Read Titus</h2></Link>
            <p>"insert preview image"</p>
        </section> */}

        <section>
            <h2>Daily Reading Plan</h2>
            {readingPlanTitles.map(readingPlanTitle=>
            <Link to={`/dailyreader/${readingPlanTitle.id}`} key={readingPlanTitle.id}><h2>{readingPlanTitle.name}</h2></Link>)}
            <p>"insert preview image"</p>
        </section>
        </main>
      </div>
    )
  }
}
