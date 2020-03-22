import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { http } from '../service/config'

interface City {
    readonly name: string,
    readonly getForecast: boolean
}

const Card = (props: City) => {
    
    const [city, setCity] = useState<any>(null)

    useEffect(() => {
        if (props.getForecast) {
            (async function () {
                try {
                    const result = await http.get(props.name)
                    setCity(result.data)
                } catch (error) {
                    setCity(null)
                    console.log(error)
                }
            })()
        }
    }, [props])

    const renderCard = () => {
        // if (city?.request) {
            return (
                <CityCard>
                    <div className="wrapper">
                        oi
                    </div>
                </CityCard>
            )
        // }
    }

    return (
        <div>
            {renderCard()}
        </div>
    )
}

const CityCard = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    
    .wrapper {
        background-color: #FFF2E4;
        min-width: 403px;
        padding: 0 10px;
        height: 100px;
    }
`

export default Card