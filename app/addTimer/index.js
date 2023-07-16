import { Stack } from "expo-router"
import { useRouter } from "expo-router"
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native"
import AddTimerInputItem from "../../components/AddTimerInputItem"
import { useContext, useState } from "react"
import { SettingsContext } from "../../context/SettingsContext"


const AddTimer = () => {
    const router = useRouter()

    const [newTimer, setNewTimer] = useState({
        work: 25,
        short: 5,
        long: 15,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = (name, value) => {
        if((value).length === 0){
            setNewTimer({
                ...newTimer,
                [name]: ''
            })             
        }else {
            setNewTimer({
                ...newTimer,
                [name]: parseInt(value)
            })       
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
        router.replace('/Home')        
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
                <AddTimerInputItem type={'Focus Time'} onChange={(text) => handleChange('work', text)} value={newTimer.work} />
                <AddTimerInputItem type={'Short Break'} onChange={(text) => handleChange('short', text)} value={newTimer.short} />
                <AddTimerInputItem type={'Long Break'} onChange={(text) => handleChange('long', text)} value={newTimer.long} />
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