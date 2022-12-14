import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['lib/index.ts'],
  splitting: false,
  minify: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  dts: true,
  format: [
    "cjs",
    "esm"
  ],
  external: [
    "react"
  ]
});
