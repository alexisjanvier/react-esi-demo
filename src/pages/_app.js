import NextApp from 'next/app';

import '../styles/globals.css'
import Layout from '../components/Layout';


const App = (props) => {
    return (
        <>
          <Layout >
              <NextApp {...props} />
          </Layout>
        </>
    );
};

export default App;
