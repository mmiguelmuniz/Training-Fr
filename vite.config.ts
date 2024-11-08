import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    host: '0.0.0.0', // Isso permite acessos de outros dispositivos na rede
    port: 5173 // ou outra porta que você desejar
  }
});


