const input = document.querySelector('#input')
const btnAdd = document.querySelector('#btn-add')
const lista = document.querySelector('#lista')

function addTask(e){
    const inputValue = input.value
    if(inputValue == ''){
        alert('Você precisa escrever algo.')
        return 
    }
    input.value = ''
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerText = inputValue
    const button = document.createElement('button')
    button.innerText = 'X'
    li.appendChild(p)
    li.appendChild(button)
    lista.appendChild(li)
    button.addEventListener('click', function(){
        lista.removeChild(li)
    })
    li.onclick = function(){
        li.classList.toggle('checked')
    }
}
const inputEle = document.getElementById('input');
inputEle.addEventListener('keyup', function(e){
  if (e.key.toLowerCase() === 'enter') { 
    addTask(e)
  }
});

btnAdd.onclick = function(e) {
    addTask(e)
};

