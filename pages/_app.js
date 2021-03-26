import '../styles/globals.css';
import NextNprogress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store';

function MyApp({ Component, pageProps }) {


  return (
      <Provider store={store}>
          <NextNprogress
              color="black"
              startPosition={0.3}
              stopDelayMs={200}
              height="3"
          />
          <Component {...pageProps}/>
      </Provider>
  )
}


const makeStore = () => store;

const wrapper = createWrapper(makeStore)

export { wrapper }

export default wrapper.withRedux(MyApp);
