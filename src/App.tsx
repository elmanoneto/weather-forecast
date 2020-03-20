import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

import Header from './Components/Header'
import Search from './Components/Search'

function App() {
  return (
	  <Fragment>
		<GlobalStyle/>
		<Header></Header>
		<Search></Search>
	  </Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
	html {
		height: 100%;
	}
	body {
		color: #000;
		height: 100%;
		margin: 0;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background: rgb(255,187,4);
		background: linear-gradient(0deg, rgba(255,187,4,1) 0%, rgba(255,127,2,1) 100%);
	}
`

export default App;
