import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

interface buttonProps extends TouchableOpacityProps {

}

export function ButtonConfirmar({ ...rest }: buttonProps) {
    return (

        <TouchableOpacity
            activeOpacity={0.7}
            className=' h-14 bg-green-600 flex flex-row justify-center items-center gap-2 rounded-md mt-6 mx-1 '
            {...rest}
        >
            <Feather
                name='check'
                size={20}
                color={colors.white}
            />
            <Text className='text-white text-base font-semibold'>
                Confirmar
            </Text>
        </TouchableOpacity>

    )
}