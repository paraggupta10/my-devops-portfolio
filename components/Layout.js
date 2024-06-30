// components/Layout.js
import Navbar from './Navbar';
import styles from '../styles/Home.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                {children}
            </div>
        </>
    );
};

export default Layout;
