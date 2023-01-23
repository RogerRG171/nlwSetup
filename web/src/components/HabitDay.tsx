import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';
import clsx from 'clsx';

interface HabitProps {
    completed: number;
    amount: number;
}

export function HabitDay({ completed, amount }: HabitProps) {

    const perct = Math.round((completed / amount) * 100);

    return (
        <Popover.Root>
            <Popover.Trigger
                className={clsx('w-10 h-10 bg-zinc-900 boder-2 border-zinc-800 rounded-lg', {
                    'bg-violet-900 border border-violet-800': perct > 0 && perct < 20,
                    'bg-violet-800 border border-violet-700': perct >= 20 && perct < 40,
                    'bg-violet-700 border border-violet-600': perct >= 40 && perct < 60,
                    'bg-violet-600 border border-violet-500': perct >= 60 && perct < 80,
                    'bg-violet-500 border border-violet-400': perct >= 80,
                })}

            />

            <Popover.Portal>
                <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
                    <span className='font-semibold text-zinc-400 mb-2'
                    >sábado</span>
                    <span className='font-extrabold text-3xl mb-4'
                    >21/01</span>
                    <ProgressBar progress={perct} />
                    <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>

    )
}

