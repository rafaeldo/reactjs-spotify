import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  // Cleans the Reactotron history every time we update the app.
  tron.clear();

  // Saves Reactotron inside 'console' to easy access.
  console.tron = tron;
}
