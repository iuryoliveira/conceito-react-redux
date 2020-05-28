import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import avatar from './img_avatar.png';

import * as CardActions from '../../store/actions/card';

const Card = ({ cards, toggleCard }) => (
  <div>
    {cards.map(card => (
      <div key={card.id}className="card">
        <img src={avatar} alt="profile" width={100}/>
        <div className="container" style={{marginBottom: '10px'}}>
          <h4>{card.title}</h4>
          <button onClick={() => toggleCard(card)}>Iniciar Quizz</button>
        </div>
      </div>
    ))}
  </div>
)

const mapStateToProps = state => ({
  cards: state.card.cards,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(CardActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card);