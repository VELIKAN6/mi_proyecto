const { build } = require('esbuild');

build({
  entryPoints: ['src/client/main.js'],
  outdir: 'build',
  bundle: true,
  minify: true,
  target: ['chrome89'],  // Chrome 89+ (mínimo con WebComponents)
  format: 'esm',
  splitting: true,
  sourcemap: 'linked',  // Mejor debugging en Chrome DevTools
  metafile: true,      // Genera stats de construcción
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  loader: {
    '.js': 'jsx',
    '.png': 'file',
    '.webp': 'file'
  }
}).then(() => console.log('✅ Build completado')).catch(() => process.exit(1));

build({
  // ... otras configs
  sourcemap: 'linked',  // Genera .map para debug
  sourcesContent: true  // Muestra código original
});
