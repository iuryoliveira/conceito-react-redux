import React from 'react'

import { connect } from 'react-redux';

import Lesson from '../Lesson';

const Subject = ({ activeModule, activeModuleLessons }) => (
  <div>
    <h1>{activeModule.title}</h1>
    <h2>{activeModule.about}</h2>
    <div>
      {activeModuleLessons.length > 0 ? <Lesson />: <div></div>}
    </div>
  </div>
);

const mapStateToProps = state => (
  {
    activeModule: state.card.activeModule,
    activeModuleLessons: state.card.activeModuleLessons
  }
);

export default connect(mapStateToProps)(Subject);