function flipCoin(){
    const num = Math.floor(Math.random() * 2)
    if(num ===0) {
        return "heads"
    } else {
        return "tails"
    }
}
// console.log(flipCoin())
function testFlipCoin(){
    new Promise((resolve, reject) => {
        const side = flipCoin()
        if(side === "heads"){
            resolve("It was heads!")
    
        } else if(side === "tails"){
            reject("It was tails")
        }
    })
}


const result = testFlipCoin()
    .then(response => console.log ("response ") + response)
    .catch(err => console.log("Error " + error))

console.log(result)

axios.get("some url").then(response => {
    listData(response.data)
}).catch(err => console.log(err))

function get(url){
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.send()

    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            } else if(xhr.readyState === 4 && xhr.status !== 200){
            reject("Error on the server")
            }  
          }
    })
}

get("https://swapi.co/api/people")
    .then(response => console.log(response))
    .catch(error => console.log(error))