/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['images.unsplash.com']
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'https://cqukvue0lnq2gbcx.public.blob.vercel-storage.com',
                port: '',
            },
        ],
    }
};

export default nextConfig;
