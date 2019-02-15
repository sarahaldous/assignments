var todoList = document.getElementById('todo-container')

axios.get("https:api.vschool.io/sarah/todo").then(function(response){
    var todos = response.data
    listTodos(todos)
    
}).catch(runction(error){
        console.log(error)
})

function listTodos(todos){
    for (var i = 0; i < todos.length; i++){
        var title = document.createElement('h1')
        title.textContent = todos[i].title
        todoList.appendChild(title)
    }
}