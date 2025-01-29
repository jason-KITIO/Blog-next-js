import React from 'react'
import ContentLoader from 'react-content-loader'

const ArticleLoader = () => (
    <ContentLoader
        width="100%"
        height="100vh"
        viewBox="0 0 100% 1500"
        backgroundColor="var(--bgLoading)"
        foregroundColor="var(--lgLoading)"
    >
        <rect x="80" y="40" rx="4" ry="4" width="62" height="20" />
        <rect x="40%" y="40" rx="4" ry="4" width="80" height="20" />
        <rect x="48%" y="40" rx="4" ry="4" width="61" height="20" />
        <rect x="55%" y="40" rx="4" ry="4" width="63" height="20" />
        <circle cx="95%" cy="50" r="15" />

        <rect x="100" y="120" rx="4" ry="4" width="200" height="30" />
        <rect x="100" y="180" rx="4" ry="4" width="500" height="29" />
        <rect x="100" y="220" rx="4" ry="4" width="130" height="15" />
        <rect x="220" y="220" rx="4" ry="4" width="130" height="15" />
        <rect x="360" y="220" rx="4" ry="4" width="130" height="15" />
        <rect x="600" y="220" rx="4" ry="4" width="130" height="15" />
        <rect x="100" y="250" rx="4" ry="4" width="700" height="350" />

        <rect x="900" y="120" rx="4" ry="4" width="300" height="300" />
        <rect x="900" y="450" rx="4" ry="4" width="300" height="150" />


        <rect x="90" y="630" rx="4" ry="4" width="300" height="20" />
        <circle cx="86%" cy="630" r="15" />
        <circle cx="89%" cy="630" r="15" />
        <circle cx="92%" cy="630" r="15" />
        <circle cx="95%" cy="630" r="15" />
        {/* 
        <circle cx="739" cy="109" r="9" />
        <circle cx="765" cy="109" r="9" />
        <rect x="359" y="457" rx="4" ry="4" width="150" height="10" />
        <rect x="48" y="515" rx="4" ry="4" width="720" height="15" />
        <rect x="49" y="547" rx="4" ry="4" width="598" height="15" />
        <rect x="48" y="581" rx="4" ry="4" width="720" height="15" />
        <rect x="49" y="612" rx="4" ry="4" width="520" height="15" />
        <rect x="48" y="652" rx="4" ry="4" width="720" height="15" />
        <rect x="48" y="684" rx="4" ry="4" width="598" height="15" />
        <rect x="48" y="718" rx="4" ry="4" width="720" height="15" />
        <rect x="49" y="748" rx="4" ry="4" width="419" height="15" />
        <circle cx="713" cy="810" r="9" />
        <circle cx="739" cy="810" r="9" />
        <rect x="41" y="836" rx="4" ry="4" width="720" height="3" />
        <rect x="122" y="880" rx="4" ry="4" width="320" height="11" />
        <circle cx="79" cy="900" r="26" />
        <rect x="135" y="901" rx="4" ry="4" width="120" height="10" />
        <rect x="123" y="949" rx="4" ry="4" width="320" height="11" />
        <circle cx="80" cy="969" r="26" />
        <rect x="136" y="970" rx="4" ry="4" width="120" height="10" />
        <rect x="124" y="1021" rx="4" ry="4" width="320" height="11" />
        <circle cx="81" cy="1041" r="26" />
        <rect x="137" y="1042" rx="4" ry="4" width="120" height="10" />
        <rect x="125" y="1090" rx="4" ry="4" width="320" height="11" />
        <circle cx="82" cy="1110" r="26" />
        <rect x="138" y="1111" rx="4" ry="4" width="120" height="10" /> */}
    </ContentLoader>
)

ArticleLoader.metadata = {
    name: 'Sridhar Easwaran',
    github: 'sridhareaswaran',
    description: 'Article or News',
    filename: 'ArticleLoader',
}

export default ArticleLoader