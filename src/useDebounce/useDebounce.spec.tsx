import React from 'react'
import ReactDOM from 'react-dom'
// import { createRoot } from 'react-dom/client'

import useDebounce from '.'

let val = 0

const Dummy = () => {
  const fn = useDebounce(() => val++, 100)

  return <button onClick={fn}>ClickMe</button>
}

describe('useDebounce', () => {
  beforeEach(() => {
    val = 0
  })

  it('works', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Dummy />, div)
    ReactDOM.unmountComponentAtNode(div)
    // ! until react/jest fix their own mess
    // const root = createRoot(div!)
    // root.render(<Dummy />)
    // root.unmount()
  })
})
