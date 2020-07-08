import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export class LandingPage extends Component {
  render() {
    return (
      <div className="Landing">
        <main>
          <header className="lp-header">
            <h1>Welcome!</h1>
          </header>
          <section className="lpInfo">
          <p>
              <b>Theology for Children</b> 
              {''} provides interactive Bible reading and reading plans for young readers using the English Standard Version
            </p>
          </section>
          <div className="Landing__link">
            <Link className='landToHome' to='/main'>Enter</Link>
          </div>
        </main>
      </div>
    )
  }
}

export default LandingPage;
