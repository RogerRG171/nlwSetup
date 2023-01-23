
interface progressBarProps {
    progress: number;
}

export function ProgressBar({ progress }: progressBarProps) {
    return (
        <div className='h-3 rounded-xl bg-zinc-700 w-full'>
            <div
                role="progressbar"
                aria-label="Progresso de hábitos completados nesse dia"
                aria-valuenow={progress}
                className='h-3 rounded-xl bg-violet-600'
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}