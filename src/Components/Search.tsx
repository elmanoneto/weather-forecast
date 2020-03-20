import React, { useState } from 'react'
import styled from 'styled-components'

interface IFormProps {
    search?: string
}

const Search = (props: IFormProps) => {
    const [ search, setSearch ] = useState('')

    return (
        <SearchInput>
            <input 
                type="text" 
                value={ search }
                placeholder="Insert the city name here"
                onChange={ (e) => { setSearch(e.target.value) }}>
            </input>
        </SearchInput>
    )
}

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

export default Search