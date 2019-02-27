import React from 'react'

const Badge = (props) => {
    console.log(props.nameBadges)


    const mappedBadges = props.nameBadges.map( (badge, i) => 
       
        <div key={badge.firstName + i}>
            <div className="header">Badge:</div>
            <div className="columns">
            <p>Name: {badge.firstName} {badge.lastName}</p>
            <p>Phone: {badge.phone}</p>
            <p>Place of Birth: {badge.birthplace}</p>
            <p>Favorite Food: {badge.favFood}</p>
            <p>Email: {badge.email}</p>
            
            </div>
            <p className="infoField">{badge.info}</p>
        </div>
        
         )
    return (
        <div className="badge">
            {mappedBadges}
        </div>
    )
}


export default Badge;