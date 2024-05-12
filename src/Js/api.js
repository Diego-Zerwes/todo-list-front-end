const url = "http://localhost:3001/todos";


export async function getTarefas(){
  return (await fetch(url)).json();
}

export async function crearTarefa(tarefa){
  return await fetch(url,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  body: JSON.stringify({
    todo: tarefa
  }),
    method:"POST"
  })
}


