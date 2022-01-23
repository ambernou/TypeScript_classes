interface ToDoItem {
  userId: number
  id: number
  title: string
  comleted: boolean
}

const toDoList: ToDoItem[] = []

function getTodosByCount(count: number) {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      return response.text()
    })
    .then<ToDoItem[]>((responseText) => {
      return JSON.parse(responseText)
    })
    .then((data) => {
      for (let i = 0; i < count; i++) {
        toDoList[i] = data[i]
      }
      
      return toDoList
    })
}

getTodosByCount(4)
  .then((toDosArray) => {
    if (toDosArray.length === 0) {
      console.log('There is no ToDOs.')
    } else {
      toDosArray.forEach((item) => {
        console.log(item)
      })
    }
  })
  .catch((error) => {
    console.error(error)
  })
