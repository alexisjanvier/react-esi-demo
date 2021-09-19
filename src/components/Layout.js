import withESI from 'react-esi';

import Footer from './Footer';
import styles from '../styles/Home.module.css'


const FooterESI = withESI(Footer, 'Footer');
// The second parameter is an unique ID identifying this fragment.

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
            <FooterESI repo="react-esi-demo"/>
        </div>
    );
};

export default Layout;
