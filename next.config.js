/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        mongodburl: "mongodb+srv://cvasingh:cvasingh123@cluster0.r8kw7.mongodb.net/group56?retryWrites=true&w=majority",
        apiUrl: "https://group56.vercel.app/api",
        // apiUrl: "http://localhost:3000/api"
    },
    compiler: {
        removeConsole: {
            exclude: ['error'],
        },
    },
}

module.exports = nextConfig
