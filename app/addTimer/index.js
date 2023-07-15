import { Stack } from "expo-router"
import { SafeAreaView, ScrollView, Text } from "react-native"


const AddTimer = () => {
    return <SafeAreaView style={{flex: 1}}>
         <Stack.Screen options={{
            headerStyle: { backgroundColor: '#1F1B2E' },
            headerShadowVisible: false,
            // headerBackVisible: false,
            headerTitle: 'Add new timer',
            headerTintColor: 'white'
        }} />
        <>
            <ScrollView style={{backgroundColor: '#1F1B2E'}}>

            </ScrollView>
        </>
    </SafeAreaView>
}

export default AddTimer