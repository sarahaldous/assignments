import React from 'react'
import UglyThing from './UglyThing'
import { withUglyThings } from '../context/UglyThingsProvider.js'

const UglyThingList = (props) => {
    
    const mappedUglyThings = props.uglyThings.map(uglyThing =>
        // console.log(props)
        <UglyThing
            // {...UglyThing}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
            title={uglyThing.title}
            description={uglyThing.description}
            imgUrl={uglyThing.imgUrl}
            key={uglyThing._id}
            id={uglyThing._id}
            />
            )
    return (
        <div>
            {mappedUglyThings}
        </div>
    )
}
export default withUglyThings(UglyThingList)