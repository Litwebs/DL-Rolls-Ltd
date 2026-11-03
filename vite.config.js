import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],base:'/DL-Rolls-Ltd/',server:{host:'0.0.0.0',port:5173}});
