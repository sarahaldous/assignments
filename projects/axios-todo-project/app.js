const todoList = document.getElementById('todolist-container')
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
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
    const todos = response.data
    listTodos(todos)

}).catch(function(error){
    console.log(error)
})
}

function listTodos(todos){
    for(let i = 0; i < todos.length; i++){
        const todoContainer = document.createElement('div')
        const title = document.createElement('h1')
        const description = document.createElement('p')
        const imgUrl = document.createElement('img')
        const price = document.createElement('h3')
        const checkbox = document.createElement('input')
        const delBtn = document.createElement('button')


//edit element/give it content (class, text, attributes, events)
        todoContainer["data-todoID"] = todos[i]._id///////????????
        title.textContent = todos[i].title
        todoContainer.classList.add("todoContainer")
        description.textContent = todos[i].description
        imgUrl.setAttribute('src', todos[i].imgUrl)
        imgUrl.onerror = function(){this.style.display='none';};
        price.textContent = todos[i].price
        checkbox.type = "checkbox"
        checkbox.checked = todos[i].completed
        delBtn.textContent = "Delete"

        //Checkbox PUT request for updating UI and DB
        checkbox.addEventListener("change", function(e){
            const ID = e.target.parentNode["data-todoID"]
            const updates = {
                completed: e.target.checked
            }

            //PUT request to mark it true/false completed
            axios.put(`https://api.vschool.io/sarah/todo/${ID}`, updates).then(response => {
                todoList.innerHTML = ""
                getData()
            })
        })

        //Delete button DELETE request
        delBtn.addEventListener("click", function(e){
            const ID = e.target.parentNode["data-todoID"]

            axios.delete(`https://api.vschool.io/sarah/todo/${ID}`).then(response => {
                e.target.parentNode.remove()
            })
            
        })
        //Line through the title
        if(checkbox.checked){
            title.style.textDecoration = "line-through"
        }
        //send put request to data base to makr it true or false on completed status.
        

//append to DOM
        todoContainer.appendChild(title) 
        todoContainer.appendChild(description)
        todoContainer.appendChild(imgUrl)
        todoContainer.appendChild(price)
        todoContainer.appendChild(delBtn)
        todoContainer.appendChild(checkbox)
        todoList.appendChild(todoContainer)
        
     }
}


getData()