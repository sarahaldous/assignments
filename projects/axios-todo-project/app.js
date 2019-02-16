var todoList = document.getElementById('todolist-container')
var todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value,
        imgUrl: todoForm.imgUrl.value,
        description: todoForm.description.value,
        price: todoForm.price.value,



    }
    todoForm.title.value = ""
    todoForm.imgUrl.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""


    axios.post("https://api.vschool.io/sarah/todo", newTodo).then(response => {
        todoList.innerHTML = ""
        getData()
    })
})


function getData(){
    axios.get("https://api.vschool.io/sarah/todo").then(function(response){
    var todos = response.data
    listTodos(todos)

}).catch(function(error){
    console.log(error)
})
}

function listTodos(todos){
    for(var i = 0; i < todos.length; i++){
        const todoContainer = document.createElement('div')
        const title = document.createElement('h1')
        const description = document.createElement('p')
        const imgUrl = document.createElement('img')
        const price = document.createElement('h3')


//edit element/give it content (class, text, attributes, events)
        title.textContent = todos[i].title
        todoContainer.classList.add("todoContainer")
        description.textContent = todos[i].description
        imgUrl.setAttribute('src', todos[i].imgUrl)
        price.textContent = todos[i].price


//append to DOM
        todoContainer.appendChild(title) 
        todoContainer.appendChild(description)
        todoList.appendChild(todoContainer)
     }
}
getData()