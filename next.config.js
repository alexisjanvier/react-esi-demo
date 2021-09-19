const withBundleAnalyzer =
    process.env.BUNDLE_ANALYZE === 'true' ? require('@next/bundle-analyzer')({ enabled: true }) : (config) => config;

const headers = [
    {
        key: 'Surrogate-Control',
        value: 'content="ESI/1.0"',
    },
    {
        key: 'Access-Control-Allow-Origin',
        value: process.env.HEADERS_CORS || '*',
    }
];

headers.push({
    key: 'Access-Control-Allow-Headers',
    value: ['Accept', 'Origin', 'Content-Type', `X-Requested-With`, ...headers.map((h) => h.key)].join(', '),
});

const configuration = {
    trailingSlash: true,
    compress: process.env.GZIP_COMPRESSION === 'true',
    poweredByHeader: false,
    generateEtags: true,
    async headers() {
        return [
            {
                source: '/',
                headers,
            },
        ];
    },
};

module.exports = () => withBundleAnalyzer(configuration);
