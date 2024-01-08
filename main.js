const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const enter = document.querySelector('#enter')


function agragarTarea(tarea) {    
    const elemento = `<li>
    <i class="far fa-circle co" data="realizado"></i>
    <p class="text linea-punteada">${tarea}</p>
    <i class="fas fa-trash de" data="eliminando" id="0"></i>
  </li>
   `
    

lista.insertAdjacentHTML("afterbegin",elemento)
}


enter.addEventListener('click',()=>{
    const tarea = input.value
    if(tarea){
        agragarTarea(tarea)
        input.value = ""
    }
})


document.addEventListener('keyup', function(evento){

})







// const enter = document.getElementById('enter')
// enter.addEventListener('click',()=>{
//     window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
// })

