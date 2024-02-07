import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { version } from './package.json';
import pathsConfig from 'vite-tsconfig-paths';

const outDir = resolve(__dirname, 'dist');

const filename = `rates-${version}.js`;

export default defineConfig({
    plugins: [
        react(),
        pathsConfig(),
    ],
    build: {
        rollupOptions: {
            input: resolve(__dirname, 'src', 'index.tsx'),
            output: {
                format: 'systemjs',
                dir: outDir,
                entryFileNames: filename,
                chunkFileNames: `chunks/rates-${version}-[hash].js`
            },
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                math: 'always',
                relativeUrls: true,
                javascriptEnabled: true,
            },
        },
    },
    server: {
        open: "/",
        port: 3000,
        proxy: {
            '/api': 'http://localhost:8081',
        }
    },
});
