import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import anywidget from "anywidget/vite"

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'ipywidget/static',
        lib: {
            entry: ['src/index.ts'],
            formats: ['es'],
        },
    },
    plugins: [react(), anywidget()],
})
