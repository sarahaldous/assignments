// import React, { Component } from 'react'
// import axios from 'axios'
// import {withUser} from "./UserProvider.js"
// const LocationContext = React.createContext()

// class LocationProvider extends Component {
//     constructor() {
//         super()
//         this.state = {
//             lat: "",
//             long: "",
//             locationErr: "",
//             locations: [],
//             mySavedLocations: [],
//         }
//     }
//     // adding a saved locations to user database 
//     addSavedLocation = newLocation => {
//         axios.post(`/locations/${this.props.usersID}`, newLocation).then(response => {
//             this.setState(prevState => ({
//                 mySavedLocations: [...prevState.mySavedLocations, response.data]
//             }))
//         })
//             .catch(err => console.log(err))
//     }
//     handleSaveLocation = id => {
//         const newLocation = this.state.locations.find( location => location.id === id)
//         for(let key in newLocation){
//             if(key !== "title" && key !== "vicinity" &&  key !== "id"){
//                 delete newLocation[key]
//             }
//         }
//         this.addSavedCity(newLocation)
//     }
//     getSavedLocation = usersID =>{
//         axios.get(`/locations/user/${this.props.usersID}`).then(response =>{
//             this.setState({
//                 mySavedLocations: response.data
//             })
//         })
//         .catch (err => console.log(err))
//     }
//     // user will be able to delete a saved location with handle delete 
//     handleDelete = _id => {
//         axios.delete(`/locations/${_id}`).then(response => {
//             alert(response.data)
//             this.setState(prevState => ({
//                 mySavedLocations: prevState.mySavedLocations.filter(location => location._id !==  _id)
//             }))
//         })
//         .catch(err => console.log(err))
//     }
//     render() {
//         return (
//             <LocationContext.Provider
//                 value={{
//                     lat: this.state.lat,
//                     long: this.state.long,
//                     locationErr: this.state.locationErr,
//                     locations: this.state.locations,
//                     mySavedLocations: this.state.mySavedLocations,
//                     handleSaveLocations: this.handleSaveLocations,
//                     addSavedLocations: this.addSavedLocations,
//                     getSavedLocations:this.getSavedLocations,
//                     handleDelete: this.handleDelete
//                 }}>
//                 {this.props.children}
//             </LocationContext.Provider>
//         )
//     }
// }
// export const withLocation = C => props => (
//     <LocationContext.Consumer>
//         {value => <C {...props} {...value} />}
//     </LocationContext.Consumer>
// )
// // wrapping with user context to be able to make requests to our own DB
// export default withUser(LocationProvider)