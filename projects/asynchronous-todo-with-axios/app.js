const todoListContainer = document.getElementById('todolist-container')
const todoForm = document["add-todo-form"]

axios.get("https:api.vschool.io/sarah/todo").then(response => {
    const todos = response.data
    listTodos(todos)
})

function listTodos(todosArr){
    console.log(todosArr)
    
    for(let i = 0; i < todosArr.length; i++){
    const todoContainer = document.createElement('div')
    const title = document.createElement(h1)
    const imgUrl = document. createElement('img')

    
    todoContainer.classList.add("todoContainer")
    title.textContent = todosarr[i].title
    imgUrl.setAttribute("src", todosArr[i].imgUrl)
    if(todosArr[i].completed){
        title.style.textDecoration = "line-through"
    }

    todoContainer.appendChild(title)
    todoContainer.appendChild(imgUrl)
    todoListContainer.appendChild(todoContainer)
    }
}
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value
    }
    todoForm.title.value = ""
    axios.post("https:api.vschool.io/sarah/todo", newTodo).then(response => {
        todoListContainer.innerHTML = ""
        getData()
    })
    const newTodo = {
        title: todoForm.title
    }
})
getData()