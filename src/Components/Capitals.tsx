import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { http } from '../service/config'

const Capitals = () => {
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const joaoPessoa = await http.get('Joao Pessoa')
                const rioDeJaneiro = await http.get('Rio de Janeiro')
                const saoPaulo = await http.get('Sao Paulo')
                const recife = await http.get('Recife')

                const result = [joaoPessoa.data, rioDeJaneiro.data, saoPaulo.data, recife.data]

                setData(result)
            } catch (e) {
                console.log(e)
            }
        }
        
        fetchData()
    }, [])

    const renderData = () => {
        if ( data.length ) {
            return data
                .map(city => {
                    return <li key={city.location.name}>{city.location.name}</li>
                })
        }

        return <p>Loading...</p>
    }

    return (
        <WrapperCapitals>
            <div>
                <h1>Capitals</h1>
                <div className="capitals-list">
                    <div>
                        <p>Min Max</p>
                        <ul>
                            {renderData()} 
                        </ul>
                    </div>
                    <div><p>Min Max</p></div>
                </div>
            </div>
        </WrapperCapitals>
    )
}

const WrapperCapitals = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 300px;

    div {
        min-width: 50%;
        width: 50%;
        margin: 0;
        padding: 0;
    }

    h1 {
        color: #fff;
        font-size: 30px;
    }

    .capitals-list {
        display: flex;
        width: 100%;
        
        > div {
            flex: 1;
            min-width: 200px;
        }
    }
`

export default Capitals