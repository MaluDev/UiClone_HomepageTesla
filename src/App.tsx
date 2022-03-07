import { useState } from 'react'

import Page from './components/Page'

import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page />

      <GlobalStyles/>
    </>
  )
}

export default App
