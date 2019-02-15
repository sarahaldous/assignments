var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState === 4){
        var jsonData = xhr.responseText
        var data = JSON.parse(jsonData)
        listDataToTheDOM(data.objects[0].pokemon)
    }
}
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

function listDataToTheDOM(pokemonArr){
    console.log(pokemonArr)

    var container = document.getElementById("container");

    for (let i = 0; i < pokemonArr.length; i++){
        var name = document.createElement('p')
        name.textContent = pokemonArr[i].name
        container.appendChild(name)
        
        
    }
    
}