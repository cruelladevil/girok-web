import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import stylex from 'vite-plugin-stylex';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    stylex(),
  ],
});
