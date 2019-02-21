import React from 'react'
import Box from './Box.js'

function App(props){
    const obj1 = {
        backgroundColor: "red",
        title: "Red",
        subtitle: "rhymes with thread",
        info: "looks good on everybody!",

    }
    const obj2 = {
        backgroundColor: "orange",
        title: "Orange",
        subtitle: "rhymes with nothing",
        info: "Aaron's favorite color; my least favorite"
    }
    const obj3 = {
        backgroundColor: "yellow",
        title: "Yellow",
        subtitle: "rhymes with Jell-O",
        info: "my other least favorite color"
    }
    const obj4 = {
        backgroundColor: "green",
        title: "Green",
        subtitle: "rhymes with glean",
        info: "can be beautiful or Kermit-y. This one is Kermit-y."
    }
    const obj5 = {
        backgroundColor: "blue",
        title: "Blue",
        subtitle: "rhymes with shoe",
        info: "love shoes, and blues. and blue shoes"
    }
    const obj6 = {
        backgroundColor: "indigo",
        title: "Indigo",
        subtitle: "rhymes with slow",
        info: "so regal"
    }
    const obj7 = {
        backgroundColor: "violet",
        title: "Violet",
        subtitle: "I got nothing",
        info: "beautiful color"
    }
    const obj8 = {
        backgroundColor: "black",
        title:  "Black",
        subtitle: "rhymes with Slack",
        info: "classic"
    }
    const obj9 = {
        backgroundColor: "gray",
        title: "Gray",
        subtitle: "rhymes with day",
        info: "excellent neutral"
    }
    const obj10 = {
        backgroundColor: "white",
        title: "White",
        subtitle: "rhymes with fight",
        info: "the color of teeth"
    }
    return (
        <div>
            <Box style={obj1.backgroundColor} title={obj1.title} subtitle={obj1.subtitle} info={obj1.info}/>
            <Box style={obj2.backgroundColor} title={obj2.title} subtitle={obj2.subtitle} info={obj2.info}/>
            <Box style={obj3.backgroundColor} title={obj3.title} subtitle={obj3.subtitle} info={obj3.info}/>
            <Box style={obj4.backgroundColor} title={obj4.title} subtitle={obj4.subtitle} info={obj4.info}/>
            <Box style={obj5.backgroundColor} title={obj5.title} subtitle={obj5.subtitle} info={obj5.info}/>
            <Box style={obj6.backgroundColor} title={obj6.title} subtitle={obj6.subtitle} info={obj6.info}/>
            <Box style={obj7.backgroundColor} title={obj7.title} subtitle={obj7.subtitle} info={obj7.info}/>
            <Box style={obj8.backgroundColor} title={obj8.title} subtitle={obj8.subtitle} info={obj8.info}/>
            <Box style={obj9.backgroundColor} title={obj9.title} subtitle={obj9.subtitle} info={obj9.info}/>
            <Box style={obj10.backgroundColor} title={obj10.title} subtitle={obj10.subtitle} info={obj1.info}/>
        </div>
    )
}


export default App;