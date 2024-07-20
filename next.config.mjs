import nextMDX from '@next/mdx'


/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

};

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    // options: {
    //     remarkPlugins: [remarkGfm],
    //     rehypePlugins: [rehypePrism],
    // },
})

export default withMDX(nextConfig)
