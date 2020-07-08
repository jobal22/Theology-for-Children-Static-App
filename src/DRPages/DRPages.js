import React, { Component } from 'react';
import {findPlan} from '../helpers';
import reactStringReplace from 'react-string-replace';
import PopUp from '../PopUp/PopUp';
import './DRPages.css';

export default class DRPages extends Component {
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    const {readingPlans, verses } = this.props.store;
    const readingPlanId = this.props.match.params.planId;
    const plan = findPlan (readingPlans, readingPlanId) || {};
    const planVerses = plan.verses.map(verse=> verses[verse]);
    // const tryThis = planVerses.map(v=> <p key={v.id}>{v.content}</p>)
    const info = planVerses.map(v=> <ol><li key={v.id}>{v.name}{' '}{reactStringReplace(v.content, 'servant', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ))}</li></ol>)
    // const replacedText = reactStringReplace({v.conent}, 'servant', (match, i) => (
    //   <button className="btn" onClick={this.togglePop}>{match}</button>
    // ));

    console.log('right now', info)

    return (
      <div>
        <section>
          <h1>Reading Plan</h1>
          <h2>{plan.day}</h2>
        </section>
        {/* <section>
          {planVerses.map(v=>
            <ol>
              <li key={v.id}>{v.name}{' '}{v.content}</li>
            </ol>)}
        </section> */}
        <section>
          {info}
          {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
        </section>
      </div>
    )
  }
}
