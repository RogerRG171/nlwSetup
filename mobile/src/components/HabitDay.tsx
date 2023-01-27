import { TouchableOpacity, Dimensions, TouchableOpacityProps } from 'react-native';
import { generateProgressPerct } from '../utils/generate-progress-perct'
import clsx from 'clsx';
import dayjs from 'dayjs';

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);


interface Props extends TouchableOpacityProps {
    date: Date;
    amount?: number;
    completed?: number;
}

export function HabitDay({ date, amount = 0, completed = 0, ...rest }: Props) {
    const perct = amount > 0 ? generateProgressPerct(amount, completed) : 0;
    const today = dayjs().startOf('day').toDate();
    const isCurrentDay = dayjs(date).isSame(today);
    return (
        <TouchableOpacity
            className={clsx(' boder-2 m-1  rounded-lg', {
                ['bg-zinc-900 border-zinc-800']: perct === 0,
                ['bg-violet-800 border-violet-700']: perct >= 20 && perct < 40,
                ['bg-violet-900 border-violet-800']: perct > 0 && perct < 20,
                ['bg-violet-700 border-violet-600']: perct >= 40 && perct < 60,
                ['bg-violet-600 border-violet-500']: perct >= 60 && perct < 80,
                ['bg-violet-500 border-violet-400']: perct >= 80,
                ['border-white border-4 ']: isCurrentDay,
            })}
            style={{ width: DAY_SIZE, height: DAY_SIZE }}
            activeOpacity={0.7}
            {...rest}
        />

    )
}