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
    // const text = 'servant servant servant'
    // const content = planVerses.map(v=> v.content);
    const content = planVerses.map(v=> v.name + ' ' + v.content)
    const replacedText = reactStringReplace(content, 'servant', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText1 = reactStringReplace(replacedText, 'apostle', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText2 = reactStringReplace(replacedText1, 'faith', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    // const lists = replacedText2.map(l=> <ol><li>{l}</li></ol>)

    // const tryThis = planVerses.map(v=> <p key={v.id}>{v.content}</p>)
    // const info = planVerses.map(v=> <ol><li key={v.id}>{v.name}{' '}{replacedText2}</li></ol>)
    // const replacedText = reactStringReplace({v.conent}, 'servant', (match, i) => (
    //   <button className="btn" onClick={this.togglePop}>{match}</button>
    // ));


    console.log('right now', replacedText2)

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
          {replacedText2}
          {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
        </section>
      </div>
    )
  }
}
