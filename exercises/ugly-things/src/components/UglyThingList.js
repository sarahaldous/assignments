import React from 'react'
import UglyThing from './UglyThing'

const UglyThingList = (props) => {
    const mappedUglyThings = props.uglyThings.map(uglyThing =>
        <UglyThing
            {...UglyThing}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
            key={uglyThing._id}
            />)
    return (
        <div>
            {mappedUglyThings}
        </div>
    )
}
export default UglyThingList