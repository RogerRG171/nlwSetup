import { ScrollView, View, Text, TextInput } from 'react-native';
import { BackButton } from '../components/BackButton';
import { Checkbox } from '../components/Checkbox';
import colors from 'tailwindcss/colors';
import { ButtonConfirmar } from '../components/ButtonConfirmar';
import { useState } from 'react';

const avaliableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

export function New() {
    const [weekDays, setWeekDays] = useState<number[]>([]);

    function handleToggleweekDays(weekDaysIndex: number) {
        if (weekDays.includes(weekDaysIndex)) {
            setWeekDays(prevState => prevState.filter(weekDay => weekDay != weekDaysIndex));
        } else {
            setWeekDays(prevState => [...prevState, weekDaysIndex]);
        }
    }

    return (
        <View className='flex-1 bg-background px-8 pt-16'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                <BackButton />
                <Text className='mt-6 text-white font-extrabold text-3xl'>
                    Criar hábito
                </Text>
                <Text className='mt-6 text-white font-semibold text-base'>
                    Qual é seu comprometimento?
                </Text>
                <TextInput className='border-2 border-zinc-800 h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white focus:border-2 focus:border-green-600 '
                    placeholder='Exercícios, dormir bem, etc...'
                    placeholderTextColor={colors.zinc[400]}
                />
                <Text className='mt-6 mb-3 text-white font-semibold text-base '>
                    Qual a recorrência?
                </Text>
                {
                    avaliableWeekDays.map((d, i) => (
                        <Checkbox
                            checked={weekDays.includes(i)}
                            title={d}
                            key={d}
                            onPress={() => handleToggleweekDays(i)}
                        />
                    ))
                }
                <ButtonConfirmar onPress={() => { }} />
            </ScrollView>
        </View>
    );
}