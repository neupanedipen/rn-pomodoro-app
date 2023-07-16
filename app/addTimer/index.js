import { Stack } from "expo-router"
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native"
import AddTimerInputItem from "../../components/AddTimerInputItem"
import { useContext, useState } from "react"
import { SettingsContext } from "../../context/SettingsContext"


const AddTimer = () => {

    const [newTimer, setNewTimer] = useState({
        work: 0.2,
        short: 0.1,
        long: 0.5,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = (text, input) => {
       
        switch (text) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(text)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(text)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(text)
                })
                break;
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }

    return <SafeAreaView style={{flex: 1}}>
         <Stack.Screen options={{
            headerStyle: { backgroundColor: '#110f1a' },
            headerShadowVisible: false,
            // headerBackVisible: false,
            headerTitle: 'Add new timer',
            headerTintColor: 'white',
            headerTitleAlign: 'center'
        }} />
        <>
            <ScrollView style={{backgroundColor: '#110f1a', padding: 18}}>
                <AddTimerInputItem type={'Focus Time'} name="work" onChange={handleChange} value={newTimer.work} />
                <AddTimerInputItem type={'Short Break'} name="shortBreak" onChange={handleChange} value={newTimer.short} />
                <AddTimerInputItem type={'Long Break'} name="longBreak" onChange={handleChange} value={newTimer.long} />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    </SafeAreaView>
}

export default AddTimer

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#664EFF',
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 32,
        marginTop: 20
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})