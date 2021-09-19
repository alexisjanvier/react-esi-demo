/* eslint react/prop-types: 0 */
/* eslint no-unused-vars: 0 */
/* eslint prettier/prettier: 0 */
import React from 'react';

import styles from '../styles/Home.module.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                This Repository has <span style={{ fontWeight: 'bold', margin: 'O 5px'}}>{this.props.data.stargazers_count}</span> stars.
            </footer>
        );
    }

    static async getInitialProps({ props, req, res }) {
        return fetch(`https://api.github.com/repos/alexisjanvier/${props.repo}`)
            .then((fetchResponse) => {
                if (fetchResponse.status === 404) {
                    return null;
                }
                return fetchResponse.json();
            })
            .then((data) => {
                if (!data) {
                    return {
                        ...props,
                        data: { 'stargazers_count': 'error'},
                    };
                }

                if (res) {
                    // Set a TTL for this fragment
                    res.set('Cache-Control', 's-maxage=60, max-age=30');
                }

                return {
                    ...props,
                    data,
                };
            })
            .catch((error) => {
                return {
                    ...props,
                    data: { 'stargazers_count': error.message},
                };
            });
    }
};

export default Footer;
