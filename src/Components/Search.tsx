import React, { Component } from 'react'
import styled from 'styled-components'

interface IFormProps {
    search: string
}

class Search extends Component<{}, IFormProps> {
    constructor(props: IFormProps) {
        super(props)

        this.state = {
            search: ''
        }
    }

    setSearch(search: string) {
        this.setState({ search })
    }

    render() {
        return (
            <SearchInput>
                <input 
                    type="text" 
                    placeholder="Insert the city name here"
                    value={this.state.search}
                    onChange={ (e) => { this.setSearch(e.target.value) }}>
                </input>
            </SearchInput>
        )
    }
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