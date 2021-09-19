/* eslint react/prop-types: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';

const footerCss = {
    width: '100%',
    height: '100px',
    borderTop: '1px solid #eaeaea',
    textAlign: 'center',
    paddingTop: '2rem',
};

class Footer extends React.Component {
    render() {
        return (
            <footer style={footerCss}>
                The react-esi repository has <span style={{ fontWeight: 'bold', margin: 'O 5px'}}>{this.props.data ? this.props.data.stargazers_count : '--'}</span> stars on Github.
            </footer>
        );
    }

    static async getInitialProps({ props, req, res }) {
        return fetch(`https://api.github.com/repos/dunglas/${props.repo}`)
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
                    data: { 'stargazers_count': data.stargazers_count },
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
