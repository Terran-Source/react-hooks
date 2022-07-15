import useDebounce from './useDebounce'

if ('production' !== process.env.NODE_ENV) {
  console.info({ hi: 'hi dev' })
}

export { useDebounce }
