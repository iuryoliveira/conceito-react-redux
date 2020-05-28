import React from 'react';
import { Provider } from 'react-redux';

import Card from './component/Card';
import Subject from './component/Subject';

import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Card />
        <Subject />
      </Provider>
    </div>
  );
}

export default App;
