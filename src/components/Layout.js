import withESI from 'react-esi';

import Footer from './Footer';
import styles from '../styles/Home.module.css'

// The second parameter is an unique ID identifying this fragment.
const FooterESI = withESI(Footer, 'Footer');

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
            <FooterESI repo="react-esi"/>
        </div>
    );
};

export default Layout;
