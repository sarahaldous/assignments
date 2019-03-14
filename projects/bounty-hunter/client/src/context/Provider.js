// import React, { Component } from 'react'
// import axios from 'axios'

// const BountyContext = React.createContext()

// class BountyProvider extends Component {
//     constructor(){
//         super()
//         this.state = {
//             bounty: []
//         }
//         this.url = "http://localhost:8008/bounty/"
//     }
//     getBounty = () => {
//         axios.get(this.url).then(response => {
//             this.setState({
//                 bounty: response.data
//             })
//         })
//         .catch(error => console.log(error))
//     }
//     addBounty = (inputs) => {
//         const { firstName, lastName, living, bountyAmount, type, _id } = inputs
//         const newBounty = { firstName, lastName, living, bountyAmount, type, _id }
//         axios.post(this.url, newBounty).then(response => {
//             this.setState(prevState => {
//                 return {
//                     bounty: [response,data, ...prevState.bounty]
//                 }
//             })
//         }).catch(error => console.log(error))
//     }
//     handleDelete = _id => {
//         axios.delete(`${this.url}/${_id}`)
//         .then(response => {
//             const updatedBounty = response.data
//             this.setState(prevState => {
//                 return {
//                     bounty: prevState.
//                 }
//             })
//             //FINISH THE END DOWN HERE!!!!
//         })
//     }
// }