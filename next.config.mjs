import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  images: {
    domains: ['cdn.prod.website-files.com'],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
});

export default nextConfig;
