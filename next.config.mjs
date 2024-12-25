import createMDX from '@next/mdx'
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images:{
        domains: [
            'images.ctfassets.net'  // 添加 Contentful 的图片域名
          ],
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
            },
            {
                protocol: 'https',
                hostname: 'zejie-img-storage.s3.amazonaws.com'
            }
        ]
    }
};
const withMDX = createMDX({
    // Add markdown plugins here, as desired
  })
  export default withMDX(nextConfig)
