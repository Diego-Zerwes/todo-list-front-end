import { crearTarefa, getTarefas } from "./api.js"
let todos = [];
document.addEventListener('DOMContentLoaded', async function(){
  await vizualisarTarefas();
  await criarTarefas();
  await pesquisarTarefas();
})

async function criarTarefas(){
  const input = document.getElementById('crear-todo');
  input.addEventListener("keypress", async (ev)=>{
    console.log(ev.code);
    if(ev.code === "Enter"){
      const resultado = await crearTarefa(input.value);
      await vizualisarTarefas();
      input.value = "";
    }
  });
 
}

async function vizualisarTarefas(){
  todos = await getTarefas()
  const fundo = document.getElementById('fundo');

  fundo.innerHTML = todos.map((tarefa)=>{
    return gerarTarefa(tarefa);
  }).join("");
}

async function pesquisarTarefas(){
  const pesquisa = document.getElementById('pesquisa');
  

  pesquisa.addEventListener("keyup", async(ev)=>{
    if(pesquisa.value === ""){
      await vizualisarTarefas();
    }

    todos = todos.filter((tarefa)=>{//retorna condição verdadeiro ou falso
      return tarefa.todo.toLowerCase().includes(pesquisa.value.toLowerCase());
      
    })
    const fundo = document.getElementById('fundo');

  fundo.innerHTML = todos.map((tarefa)=>{
    return gerarTarefa(tarefa);
  }).join("");
  })
}

function gerarTarefa(tarefa){
  return `<div id="tarefa">
  <input type="checkbox" checked=${tarefa.completed ? `checked` : ""}}>
  <p class="conteudo">${tarefa.todo}</p>
  <button><img src="/src/img/icon-cross.svg" alt="excluir"></button>
  </div>`
}

