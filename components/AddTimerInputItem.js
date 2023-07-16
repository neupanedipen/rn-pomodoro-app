import { View, TextInput, Text, StyleSheet } from "react-native"

const AddTimerInputItem = ({type, value, handleChange, name}) => {
    value = value.toString()
    return <View style={styles.textInputContainer}>
    <Text style={[styles.text, styles.title]}>{type}</Text>
    <View style={{flexDirection: 'row', columnGap: 8, alignItems: 'center'}}>
    <TextInput name={name} value={value} onChangeText={handleChange} style={styles.input} keyboardType="decimal-pad"/>
    <Text style={[styles.text, styles.minText]}>min</Text>
    </View>
</View>
}

export default AddTimerInputItem

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
})