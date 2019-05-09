import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';
import { Presentation } from './presentation';

require('normalize.css');

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentation />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./presentation', () => {
    const { Presentation: NextPresentation } = require('./presentation');

    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextPresentation />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
