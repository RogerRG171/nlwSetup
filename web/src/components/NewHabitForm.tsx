import { Check } from "phosphor-react";


export function NewHabitForm() {
    return (

        <form className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                Qual seu comprometimento?
            </label>
            <input
                className="bg-zinc-800 placeholder:text-zinc-400 w-full h-12 rounded-lg py-4 pl-4 mt-3 mb-4"
                type="text"
                id="title"
                placeholder="ex.: Exercícios, dormir bem, etc..."
                autoFocus
            />

            <label htmlFor="" className="font-semibold leading-tight">
                Qual a recorrência?
            </label>

            <button type="submit" className="flex flex-row gap-4 w-full h-12 bg-green-600 hover:bg-green-500 justify-center items-center rounded-lg mt-6 font-semibold">
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>

    )
}