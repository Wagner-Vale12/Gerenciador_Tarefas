import Input from "./input.jsx"
import { useState } from "react"

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input type="text"
        placeholder="Digite uma nova tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input type="text"
        placeholder="Digite a descrição da tarefa..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={() => {
        if (!title || !description) {
          return alert('Por favor, preencha o título e a descrição da tarefa.')
        }
        onAddTaskSubmit(title.trim(), description.trim())
        setTitle('')
        setDescription('')
      }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        Adicionar Tarefa
      </button>
    </div>
  )
}

export default AddTasks