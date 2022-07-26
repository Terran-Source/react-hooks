const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  /**
   *
   * @param {import("rollup").RollupOptions} config
   * @param {} options
   * @returns InputOptions
   */
  rollup: (config, options) => {
    // console.info({ node_env: process.env.NODE_ENV })
    // console.info(options)
    // console.info(config.plugins)

    const { file: _, ...output } = {
      ...config.output,
      dir: './dist/',
      sourcemap: false,
      minimize: isProd,
    }
    if ('esm' === options.format) {
      output.entryFileNames = '[name].esm.js'
    }
    // console.info(output)

    return {
      ...config,
      preserveModules: true,
      output,
    }
  },
}
