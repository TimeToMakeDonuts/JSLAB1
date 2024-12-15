/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Włączamy eksport statyczny
    experimental: {
        appDir: true, // Włączanie App Directory
    },
};


module.exports = nextConfig;
