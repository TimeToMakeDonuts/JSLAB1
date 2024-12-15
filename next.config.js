/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    output: 'export', // Włączamy eksport statyczny
    experimental: {
        appDir: true, // Włączanie App Directory
    },
};
