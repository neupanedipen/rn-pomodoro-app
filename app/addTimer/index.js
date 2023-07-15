import { Stack } from "expo-router"
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


const AddTimer = () => {
    return <SafeAreaView style={{flex: 1}}>
         <Stack.Screen options={{
            headerStyle: { backgroundColor: '#1F1B2E' },
            headerShadowVisible: false,
            // headerBackVisible: false,
            headerTitle: 'Add new timer',
            headerTintColor: 'white',
            headerTitleAlign: 'center'
        }} />
        <>
            <ScrollView style={{backgroundColor: '#1F1B2E', padding: 18}}>
                <View style={styles.textInputContainer}>
                    <Text style={[styles.text, styles.title]}>Focus Time</Text>
                    <View style={{flexDirection: 'row', columnGap: 8, alignItems: 'center'}}>
                    <TextInput style={styles.input} keyboardType="decimal-pad"/>
                    <Text style={[styles.text, styles.minText]}>min</Text>
                    </View>
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={[styles.text, styles.title]}>Short Break</Text>
                    <View style={{flexDirection: 'row', columnGap: 8, alignItems: 'center'}}>
                    <TextInput style={styles.input} keyboardType="decimal-pad"/>
                    <Text style={[styles.text, styles.minText]}>min</Text>
                    </View>
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={[styles.text, styles.title]}>Long Break</Text>
                    <View style={{flexDirection: 'row', columnGap: 8, alignItems: 'center'}}>
                    <TextInput style={styles.input} keyboardType="decimal-pad"/>
                    <Text style={[styles.text, styles.minText]}>min</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    </SafeAreaView>
}

export default AddTimer

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        backgroundColor: '#2C2C3E',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 28,
        justifyContent: 'space-around',
        marginVertical: 10,
        alignItems: 'center'
    },
    input: {
        width: 60,
        height: '100%',
        backgroundColor: '#fff',
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 20,
        padding: 4
    },
    text: {
        fontSize: 18
    },
    title: {
        color: '#e2e2e2'
    },
    minText: {
        color: '#fff'
    },
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