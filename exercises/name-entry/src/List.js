import React from 'react'
import Name from './Name.js'

const List = props => {
    const mappedNames = props.names.map((name, i) => <Name key={i} name={name}/>)
    return (
            <ol>{mappedNames}</ol>
    )
}

export default List