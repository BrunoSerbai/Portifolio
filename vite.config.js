import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; 
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    host: '0.0.0.0', // Allow external access if needed (for Docker)
    port: 5173,      // Match the exposed port
  },
});
