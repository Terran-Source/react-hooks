module.exports = {
  /**
   *
   * @param {import("rollup").RollupOptions} config
   * @param {} options
   * @returns InputOptions
   */
  rollup: (config, options) => {
    // console.info(options)
    // console.info(config.plugins)
    config.preserveModules = true
    config.output.dir = './dist/'
    config.output.sourcemap = false
    delete config.output.file
    if ('esm' === options.format) {
      config.output.entryFileNames = '[name].esm.js'
    }
    // console.info(config.output)
    return config
  },
}
