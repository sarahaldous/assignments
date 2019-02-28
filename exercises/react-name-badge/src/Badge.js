import React from 'react'

const Badge = (props) => {
    //const {firstName, lastName, phone, birthplace, info, email, favFood } = props
console.log(props)
const mappedBadges = props.nameBadges.map( (badge, i) => {
return (
       
    <div className="bigWholeBadge">
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
    })  
    
    
        return (
            <div className='wrapper'>
                <div className="badge">
                    {mappedBadges}
                </div>
            </div>
    ) 
}


export default Badge;