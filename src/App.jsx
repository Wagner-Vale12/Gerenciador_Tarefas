import { useState } from "react"

import AddTasks from "./components/AddTasks"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar Programação',
      description: 'Estudar programação para melhorar minhas habilidades de desenvolvimento',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Estudar React',
      description: 'Estudar React para desenvolver aplicações web modernas',
      isCompleted: false,
    },
     {
      id: 3,
      title: 'Estudar JavaScript',
      description: 'Estudar JavaScript para melhorar minhas habilidades de desenvolvimento',
      isCompleted: false,
    },
  ])

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>

        <AddTasks />
        <Tasks tasks={tasks} />
      </div>
    </div>
  )
}

export default App