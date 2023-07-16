import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Tabs from "../../components/Tabs";
import { useContext, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import CircularBarAnimation from "../../components/CircularBarAnimation";
import TextInputBar from "../../components/TextInputBar";
import { AppContext } from "../../context/AppContext";


const tabs = ['Focus', 'Short Break', 'Long Break']

export default function Home({ children }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(tabs[0])
  const {focus, shortBreak, longBreak} = useContext(AppContext)

  let modeTimer = ''

  const displayTabContent = () => {
    switch (activeTab) {
      case "Focus":
        modeTimer = <CircularBarAnimation time={focus}/>
        break;

      case "Short Break":
        modeTimer = <CircularBarAnimation time={shortBreak}/>
        break;

      case "Long Break":
        modeTimer = <CircularBarAnimation time={longBreak}/>
        break;

      default:
        return null;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false

        }}
      />
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20, color: '#E0DFE1', textAlign: 'center' }}>Pomodoro Timer</Text>

      <TextInputBar/>

      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {displayTabContent()}
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
        {modeTimer}
        <View style={styles.btnContainer}>
          <View style={[styles.button, styles.stopBtn]}>
            <Text style={[styles.btnText, styles.stopBtnText]}>Stop</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.btnText}>Pause</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.menu} onPress={() => router.push('/addTimer')}>
          <AntDesign name="menuunfold" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? 24 : 0,
    backgroundColor: '#110f1a'
  },
  
  icon: {
    position: 'absolute',
    right: 20
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 100
  },
  button :{
    backgroundColor: '#5963BC',
    paddingVertical: 10,
    width: Dimensions.get('window').width*0.38,
    paddingHorizontal: 42,
    marginHorizontal: 10,
    marginVertical: 12,
    borderRadius: 8
  },
  stopBtn :{
    backgroundColor: '#37394C'
  },
  stopBtnText:{
    color: '#5963BC'
  },
   btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
   },
   menu: {
    marginTop: 20,
    backgroundColor: "#544FFF",
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
   },

});
