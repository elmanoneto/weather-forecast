import React, { Fragment, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './Components/Header'
import Capitals from './Components/Capitals'
import Card from './Components/Card'

const App = () =>{
	const [search, setSearch] = useState<string>('')
	const [fetch, setFetch] = useState<boolean>(false)

	const keyPress = async (key: string) => {
		if (key === 'Enter') {
			setFetch(true)
			return	
		}
		
		setFetch(false)
	}

	return (
		<Fragment>
		<GlobalStyle/>
		<Header></Header>
		<Card name={search} getForecast={fetch}></Card>
		<SearchInput>
            <input 
                type="text" 
                value={ search }
                placeholder="Insert the city name here"
                onChange={ (e) => setSearch(e.target.value) }
				onKeyPress={ (e) => keyPress(e.key) }>
            </input>
        </SearchInput>
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
		background-attachment:fixed;
		 overflow-y: overlay;
		max-height: calc(100vh - 405px - 10px);
		background-image: -webkit-gradient(linear, left top, left bottom, from(#FF7F02), to(#FFBB04));
	}
`

const Divisor = styled.hr`
	width: 500px;
	margin-top: 50px;
	border: 0;
	height: 1px;
	background: #fff;
`

const SearchInput = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        color: #000;
        font-family: arial;
        font-size: 20px;
        width: 400px;
        padding: 10px 0;
        outline: none;
        text-indent: 20px;
    }
`

export default App;
