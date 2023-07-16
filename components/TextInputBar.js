import { StyleSheet, View, Text, TextInput } from "react-native"
import { Foundation } from '@expo/vector-icons';

const TextInputBar = () => {
    return <View style={styles.textInputContainer}>
    <Text style={styles.textInputText}>Task:</Text>
    <TextInput style={[styles.textInputText, styles.textInput]} />
    <Foundation name="pencil" size={24} color="#C0B6D6" style={styles.icon} />
  </View>
}

export default TextInputBar

const styles = StyleSheet.create({
    textInputContainer: {
        backgroundColor: '#6A4CA5',
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 100,
        marginVertical: 25
      },
      textInputText: {
        fontSize: 16,
        color: '#C0B6D6'
      },
      textInput: {
        flex: 1,
        paddingLeft: 8
      },    
})