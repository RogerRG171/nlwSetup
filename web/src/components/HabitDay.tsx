import * as Popover from '@radix-ui/react-popover';
import * as Checkbox from '@radix-ui/react-checkbox';
import { ProgressBar } from './ProgressBar';
import clsx from 'clsx';
import { Check } from 'phosphor-react';
import dayjs from 'dayjs';

interface HabitProps {
    date: Date;
    completed?: number;
    amount?: number;
}

export function HabitDay({ completed = 0, amount = 0, date }: HabitProps) {

    const perct = amount > 0 ? Math.round((completed / amount) * 100) : 0;

    const dayAndMonth = dayjs(date).format('DD/MM');
    const dayWeek = dayjs(date).format('dddd');

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
                    >{dayWeek}</span>
                    <span className='font-extrabold text-3xl mb-4'
                    >{dayAndMonth}</span>
                    <ProgressBar progress={perct} />

                    <div className='mt-6 flex flex-col gap-3'>
                        <Checkbox.Root
                            className='flex items-center gap-3 group'
                        >
                            <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                                <Checkbox.Indicator>
                                    <Check size={20} className='text-white' />
                                </Checkbox.Indicator>
                            </div>
                            <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
                                Beber 2L de água
                            </span>
                        </Checkbox.Root>
                    </div>

                    <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>

    )
}

