/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.prod.website-files.com'], // Whitelist the domain
    },
};

export default nextConfig;
