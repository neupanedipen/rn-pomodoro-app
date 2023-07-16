import { Stack } from "expo-router"
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native"
import AddTimerInputItem from "../../components/AddTimerInputItem"


const AddTimer = () => {
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
                <AddTimerInputItem type={'Focus Time'}/>
                <AddTimerInputItem type={'Short Break'}/>
                <AddTimerInputItem type={'Long Break'}/>
                <TouchableOpacity style={styles.button}>
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