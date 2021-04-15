const { resolve } = require('path')
const { watch } = require('rollup')
const typescript = require('@rollup/plugin-typescript')

const watcher = watch({
  input: resolve('entry.ts'),
  output: {
    file: resolve('entry.bundle.js'),
    format: 'esm'
  },
  plugins: [
    typescript()
  ]
})

watcher.on('event', (event) => {
  console.log(event.code)
  if (event.code === 'ERROR') {
    console.log(event.error)
  }
})
