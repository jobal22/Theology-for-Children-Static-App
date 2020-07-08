import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {findPlanTitle} from '../helpers';
import './DailyReadingPlan.css';

export default class DailyReadingPlan extends Component {
  render() {
    const {readingPlanTitles, readingPlans} = this.props.store;
    const readingPTId = this.props.match.params.readingPlanTitleId;
    const planTitle = findPlanTitle (readingPlanTitles, readingPTId) || {}
    const readingPlan = readingPlans.filter(p=>{
      return p.title === readingPTId
    });
    console.log('here', readingPlan)

    return (
      <div>
        <section>
          <h1>Daily Reading Plan</h1>
        </section>
        <section>
          <h3> {planTitle.name} </h3>
          {readingPlan.map(rp=>
          <ol>
            <li><Link to={`/readingplan/${rp.id}`} key={rp.id}>{rp.day}</Link></li>
            {/* <li><Link to={'/dailyreader/:dailyreaderId'}>Day 2</Link></li>
            <li><Link to={'/dailyreader/:dailyreaderId'}>Day 3</Link></li> */}
         </ol>
          )}

        </section>

      </div>
    )
  }
}
