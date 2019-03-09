import React, {Component} from 'react'
// import axios from 'axios'
const nationalGeographic = process.env.REACT_APP_NG_KEY
const axios = require('axios')

const SpaceContext = React.createContext()

class GroundProvider extends Component {
    constructor(){
        super()
        this.state = {
            // source: '',//id/name are within source
            // author: '',
            // title: '',
            // description: '',
            // url: '',
            // urlToImage: '',
            // publishedAt: '',
            infoDisplayed: false,
            menuShowing: false,
            newsArray: [],
            selectedArticle: {}
        }
    }
    getGroundData = () => {
        console.log(nationalGeographic)
        axios.get(`https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=${nationalGeographic}`).then((response) => {
        console.log(response.data.articles)    
        this.setState({
                
                newsArray: response.data.articles
            },() => this.randomArticle())
            
        }).catch(function(error){
            console.log(error)
        })
        
    }

    randomArticle = () => {
        const selectedArticle = this.state.newsArray[Math.floor(Math.random() * this.state.newsArray.length)];
        this.setState ({selectedArticle})
    }

    // newsArrayContent = newsArray.map(selectedArticle => {
    //     return {
    //         sourceName: selectedArticle.source.name,
    //         author: selectedArticle.author,
    //         title: selectedArticle.title,
    //         description: selectedArticle.description,
    //         url: selectedArticle.url,
    //         urlToImage: selectedArticle.urlToImage,
    //         publishedAt: selectedArticle.publishedAt
    //     }
    
    // })
    
    infoToggler = () => {
        this.setState({infoDisplayed: !this.state.infoDisplayed})
    }
    // hdToggler = () => {
    //     this.setState(prevState => ({
    //         hdToggle: !prevState.hdToggle
    //     }))
    // }
    menuToggler = () => {
        this.setState(prevState => ({
            menuShowing: !prevState.menuShowing
        }))
    }
    // enhancedToggler = () => {
    //     this.setState(prevState => ({
    //         enhancedToggle: !prevState.enhancedToggle
    //     }))
    // }

    render(){
       
        return (
            <SpaceContext.Provider
                value={{
                    ...this.state,
                    getGroundData:this.getGroundData,
                    infoToggler:this.infoToggler,
                    menuToggler:this.menuToggler
                }}>
                {this.props.children}
                </SpaceContext.Provider>
        )
    }
}     
export const withGround = C => props => (
    <SpaceContext.Consumer>
        {value => <C {...props} {...value} />}
    </SpaceContext.Consumer>
)
export default GroundProvider