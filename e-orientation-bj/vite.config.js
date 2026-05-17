import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'vite-plugin-javascript-obfuscator'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    obfuscator({
      compact: true, // Force l'obfuscator à tout écrire sur une seule ligne
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.75,
      deadCodeInjection: false,
      debugProtection: true,
      disableConsoleOutput: true,
      stringArray: true,
      stringArrayThreshold: 0.8
    })
  ],
  build: {
    minify: 'esbuild', // Utilise le compilateur ultra-rapide de Vite pour compresser
    sourcemap: false,  // TRÈS IMPORTANT : Désactive les fichiers de débogage pour que l'inspecteur du navigateur ne puisse pas reconstruire ton code source original
    cssMinify: true    // Supprime aussi tous les espaces et indentations de tes fichiers CSS
  }
})