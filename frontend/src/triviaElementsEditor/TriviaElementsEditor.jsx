import { TriviaElementEditor } from '../triviaElementEditor/TriviaElementEditor';
import { useQuery } from 'react-query';
import axios from 'axios';
import { baseUrl } from '../api/url/url';

export function TriviaElementsEditor() {
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['trivia'],
        queryFn: () => axios.get(baseUrl + 'trivia').then(res => res.data),
        refetchInterval: 200
    })

    if (isError) {
        return (
            <div>
                <h3>No se pudo cargar la trivia</h3>
                <p>Este fue el error: {error}</p>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div>
                <h3>Cargando la trivia</h3>
            </div>
        )
    }

    const triviaCollection = data

    return (
        <div className='overflow-x-hidden'>
            <div className='p-5 bg-slate-800'>
                <h1 className='text-2xl p-1 w-full text-center text-white'>Editor de trivias</h1>
            </div>
            <div className='pl-5 pt-5'>
                <h2 className="my-5 text-lg">Puede editar las siguientes trivias:</h2>
                {triviaCollection.map(trivia => <TriviaElementEditor key={trivia._id} initialTrivia={trivia} />)}
                <h2 className="my-2 text-lg">Puede agregar la siguiente trivia:</h2>
                <TriviaElementEditor />
            </div>
        </div>
    );
}