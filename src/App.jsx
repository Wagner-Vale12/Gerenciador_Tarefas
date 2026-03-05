import { useEffect, useState } from "react"
import AddTasks from "./components/AddTasks"
import Tasks from "./components/Tasks"
import { v4 } from "uuid"

function App() {
const [tasks, setTasks] = useState(() => {
  const stored = localStorage.getItem("tasks")
  return stored ? JSON.parse(stored) : [
        {
          id: 1,
          title: 'Praticar Inglês',
          description:
            'Estudar inglês diariamente para melhorar vocabulário, escrita e conversação',
          isCompleted: false,
        },
        {
          id: 2,
          title: 'Estudar Programação',
          description:
            'Estudar React e outras tecnologias para melhorar minhas habilidades em desenvolvimento web',
          isCompleted: false,
        },
        {
          id: 3,
          title: 'Praticar exercicios físicos',
          description:
            'Fazer exercícios regularmente para melhorar a saúde, força e condicionamento físico',
          isCompleted: false,
        },
      ]
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  useEffect(() => {
    const fetchTasks = async () => {
      //chama a api
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',
      {
        method: 'GET',
      }
    )
    //Pega os dados que ela retorna
      const data = await response.json()

      //Armazena esses dados no state
      setTasks(data .map((task) => ({
        id: task.id,      
        title: task.title,
        description,
        isCompleted: task.completed,
      })))
    }
    //Se quiser vc pode chamr a api para pegar as tarefas
    // fetchTasks()
  }, [])

  function deleteTask(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px ] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>

        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  )
}

export default App