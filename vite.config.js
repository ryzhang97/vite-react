import {defineConfig} from 'vite'

const env = import.meta.env
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react({
        babel: {
            plugins: ['@babel/plugin-transform-react-jsx'],
        },
    })],
    server: {
        host: "0.0.0.0",
        proxy: {
            '/api': {
                target: "http://127.0.0.1:8000/", // 目标接口域名
            },
        },
    }
})
