import { ScrollView, View, Text, TextInput, Alert } from 'react-native';
import { BackButton } from '../components/BackButton';
import { Checkbox } from '../components/Checkbox';
import colors from 'tailwindcss/colors';
import { ButtonConfirmar } from '../components/ButtonConfirmar';
import { useState } from 'react';
import { api } from '../lib/axios';

const avaliableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

export function New() {
    const [weekDays, setWeekDays] = useState<number[]>([]);
    const [title, setTitle] = useState('');

    function handleToggleweekDays(weekDaysIndex: number) {
        if (weekDays.includes(weekDaysIndex)) {
            setWeekDays(prevState => prevState.filter(weekDay => weekDay != weekDaysIndex));
        } else {
            setWeekDays(prevState => [...prevState, weekDaysIndex]);
        }
    }

    async function handleCreateNewHabit() {
        try {
            if (!title.trim() || weekDays.length === 0) {
                Alert.alert('Novo Hábito', 'Informe o nome do hábito. \nSelecione pelo menos um dia.')
            } else {
                await api.post('/habits', {
                    title,
                    weekDays,
                })
                setTitle('');
                setWeekDays([]);
                Alert.alert('Novo Hábito', 'Hábito criado com sucesso!');
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Ops', 'Erroa ao enviar os dados...')
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
                    onChangeText={setTitle}
                    value={title}
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
                <ButtonConfirmar onPress={handleCreateNewHabit} />
            </ScrollView>
        </View>
    );
}