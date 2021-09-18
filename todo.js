const form=document.getElementById('form');
const input=document.getElementById('input');
const todos=document.getElementById('todos');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const todoText = input.value;
    if(todoText){
        const todoEL=document.createElement("li");
        todoEL.innerText=todoText;

        todos.appendChild(todoEL);

        input.value= "";

        todoEL.addEventListener('click', ()=>{
            todoEL.classList.toggle('todocompleted');
        });

        todoEL.addEventListener('contextmenu', (e) =>{
            e.preventDefault();
            todoEL.remove();
        });

    }

});