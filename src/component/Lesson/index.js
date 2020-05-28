import React from 'react';

import { connect } from 'react-redux';

const Lesson = ({ activeModuleLessons }) => (
  activeModuleLessons.map(lesson => (
    <div key={lesson.id}>
    <h4>{lesson.title}</h4>
    <strong>{lesson.abstract}</strong>
    </div>
  ))
);

const mapStateToProps = state => ({
  activeModuleLessons: state.card.activeModuleLessons
});

export default connect(mapStateToProps)(Lesson);