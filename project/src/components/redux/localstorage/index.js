// Here Your have to put a unique key name for your app
// Aqui você precisa colocar um nome de chave único para seu app
const localStorageStateKeyName = 'appzinho'

export const loadState = () => {
    try {
        const state = localStorage.getItem(localStorageStateKeyName)
        if (state === null)
            return undefined
        return JSON.parse(state)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const stateJson = JSON.stringify(state)
        localStorage.setItem(localStorageStateKeyName, stateJson)
    } catch (err) {
        // You can choose to log the error here
        // Você pode logar o erro aqui
    }
}

export const deleteState = () => {
    try {
        localStorage.removeItem(localStorageStateKeyName)
        localStorage.clear()
    } catch (err) {
        // You can choose to log the error here
        // Você pode logar o erro aqui
    }
}

