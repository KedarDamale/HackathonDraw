import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from any IP address
    port: parseInt(process.env.PORT || '3000', 10), // Ensure the port is a number
    strictPort: true, // Prevent Vite from trying another port if the specified port is busy
  },
  build: {
    outDir: 'dist', // Specify the output directory for the build
  },
});
