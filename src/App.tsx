import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './Components/Header'
import Search from './Components/Search'
import Capitals from './Components/Capitals'

function App() {
  return (
	  <Fragment>
		<GlobalStyle/>
		<Header></Header>
		<Search></Search>
		<Divisor></Divisor>
		<Capitals></Capitals>
	  </Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
	html {
		height: 100%;
	}
	body {
        font-family: arial;
		color: #000;
		height: 100%;
		margin: 0;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background: rgb(255,187,4);
		background: linear-gradient(0deg, rgba(255,187,4,1) 0%, rgba(255,127,2,1) 100%);
	}
`

const Divisor = styled.hr`
	width: 500px;
	margin-top: 50px;
	border: 0;
	height: 1px;
	background: #fff;
`

export default App;
