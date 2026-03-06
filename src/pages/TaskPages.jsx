import { ChevronLeftIcon } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"
import Title from "../components/Title"

function TaskPages() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get('title')
    const description = searchParams.get('description')
    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
            <div className="w-[500px ]mx-auto space-y-4">
                <div className="flex justify-center relative">
                    <button
                        onClick={() => navigate('/')}
                        className="absolute left-0 top-0 bottom-0 mb-6 text-slate-100" >
                        <ChevronLeftIcon className="bg-slate-400 p-0 rounded-md text-white" />
                    </button>
                    <Title>Detalhes da Tarefa</Title>
                </div>
                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-2xl text-slate-600 font-bold">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPages