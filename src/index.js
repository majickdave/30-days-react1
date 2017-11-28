import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/font-awesome/css/font-awesome.css';

import Timeline from './components/Timeline/Timeline';

export const load = () => {
  ReactDOM.render(<Timeline />, document.getElementById('root'));
};

try {
  load();
} catch (e) {
  console.log(e);
}
