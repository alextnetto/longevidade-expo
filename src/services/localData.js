import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalData {
    storeValue = async (key, value) => {
        try {
            const stringValue = String(value)
            console.log(`${key} guardado: ` + stringValue)
            await AsyncStorage.setItem(`@${key}`, stringValue)
        } catch (err) {
            console.log(err)
        }
    }

    getValue = async (key) => {
        try {
            const value = await AsyncStorage.getItem(`@${key}`)
            if(value !== null) {
                return value
            } else {
                console.log(`${key} não existe`)
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export default LocalData;