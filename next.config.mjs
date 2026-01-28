/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['example.com', 'another-domain.com'],
    },
    async redirects() {
        return [
            {
                source: '/old-path',
                destination: '/new-path',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
