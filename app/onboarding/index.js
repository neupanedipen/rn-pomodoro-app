import { Image, TouchableOpacity } from "react-native"
import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Entypo } from '@expo/vector-icons';

const Onboarding = () => {
    return <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Plan your work and stay productive</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/pngwing.com.png')} style={styles.image} resizeMode="contain"/>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
            <Entypo name="chevron-right" size={28} color="white" style={{alignSelf: 'center'}}/>            
        </TouchableOpacity>
    </SafeAreaView>
}

export default Onboarding

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#DCE3E9',
        padding: Platform.OS === 'android' ? 24 : 0,
        alignItems: 'center',
    },
    titleContainer: {
        paddingTop: 60,
        width: Dimensions.get('window').width*0.7,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 36
    },
    imageContainer: {
        paddingVertical: 80       
    },
    image: {
        width: 350,
        height: 350
    },
    button: {
        position: 'absolute',
        bottom: 50,
        width: Dimensions.get('window').width * 0.85,
        // paddingHorizontal: 80,
        paddingVertical: 12,
        backgroundColor: '#664EFF',
        borderRadius: 30,
        flexDirection: 'row',
        columnGap: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 24
    }
})