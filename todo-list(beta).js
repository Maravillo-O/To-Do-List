
const todoList = [{
  name: 'make dinner',
  dueDate: '2022 - 12 - 12'
},
{
  name: 'wash dishes',
  dueDate: '2022 - 12 - 12'
}
];
const input = document.querySelector('.resultDiv');

const renderTodoList = () => {
  //reiniciamos un array vacio
  let acumulador = [];
  //loop para recorrer todos los valores del array que tiene todoList
  for (let i = 0; i < todoList.length; i++) {
    //valor de la iteración actual
    const actualObject = todoList[i];
    //const {name} = actualObject;
    const name = actualObject.name;
    //const {dueDate} = actualObject;
    const dueDate = actualObject.dueDate;
    //declaramos una varaible para el parrafo con el valor todo
    const html = `<p>${name} ${dueDate}<button onclick="todoList.splice(${i}, 1);renderTodoList();"> Delete </button></p>`;
    //'sumamos' el valor del parrafo a la variable y ahora esa variable es el nuevo array en string
    acumulador += html
  }
  //mostramos en terminal el array en string
  console.log(acumulador);

  input.innerHTML = acumulador;
}




const inputValue = document.querySelector('.inputField');
const dateInput = document.querySelector('.dateInput');

const addToDo = () => {
  const name = inputValue.value;
  const dueDate = dateInput.value;
  //pusheamos un objeto a al array 'todoList'
  todoList.push({
    name: name,
    dueDate: dueDate
  });

  //tanto 'name' como 'dueDate' que son propiedades de 'todoList', 

  //mostramos en consola el array
  console.log(todoList);
  //dejamos el valor de el input en blanco
  inputValue.value = '';
  //usamos la funcion renderToDoList
  renderTodoList();
}