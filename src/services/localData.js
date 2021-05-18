import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalData {
    storeId = async (id) => {
        try {
            const stringId = String(id)
            console.log('Id guardado: ' + stringId)
            await AsyncStorage.setItem('@userId', stringId)
        } catch (err) {
            console.log(err)
        }
    }

    getId = async () => {
        try {
            const id = await AsyncStorage.getItem('@userId')
            if(id !== null) {
                console.log(`Id existe e é: ${id}`)
                return id
            } else {
                console.log('Id não existe')
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export default LocalData;