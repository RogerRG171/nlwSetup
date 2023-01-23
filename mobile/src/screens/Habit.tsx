import { useRoute } from '@react-navigation/native'
import { View, Text, ScrollView } from 'react-native';
import { BackButton } from '../components/BackButton';
import dayjs from 'dayjs';
import { ProgressBar } from '../components/ProgressBar';
import { Checkbox } from '../components/Checkbox';

interface Params {
    date: string;
}

export function Habit() {
    const route = useRoute();
    const { date } = route.params as Params;

    const parsedDate = dayjs(date);
    const dayOfWeek = parsedDate.format('dddd');
    const dayAndMoath = parsedDate.format('DD/MM')
    return (
        <View className='flex-1 bg-background px-8 pt-16'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <BackButton />
                <Text className='text-zinc-400 text-base font-semibold mb-2 mt-8'>
                    {dayOfWeek}
                </Text>
                <Text className='text-white text-3xl font-extrabold'>
                    {dayAndMoath}
                </Text>
                <ProgressBar progress={80} />
                <View className='mt-6'>
                    <Checkbox title='2L de água' checked={true} />
                    <Checkbox title='Exercícios' checked={false} />
                </View>
            </ScrollView>
        </View>
    );
}