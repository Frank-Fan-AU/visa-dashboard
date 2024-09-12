import createMDX from '@next/mdx'
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com'
            }
        ]
    }
};
const withMDX = createMDX({
    // Add markdown plugins here, as desired
  })
  export default withMDX(nextConfig)
