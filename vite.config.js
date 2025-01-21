import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; 

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external access if needed (for Docker)
    port: 5173,      // Match the exposed port
  },
});
