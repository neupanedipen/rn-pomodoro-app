import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import Tabs from "../../components/Tabs";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';
import { Stack, useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';


const tabs = ['Focus', 'Short Break', 'Long Break']

export default function Home({ children }) {
    const router = useRouter()
  const [activeTab, setActiveTab] = useState(tabs[0])

  const displayTabContent = () => {
    switch (activeTab) {
      case "Focus":
        return (
          <Text>Qualifications</Text>
        );

      case "Short Break":
        return (
          <Text>Qualifications</Text>
        );

      case "Long Break":
        return (
          <Text>Qualifications</Text>
        );

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
      <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20, color: '#E0DFE1', textAlign: 'center'}}>Pomodoro Timer</Text>

    <View style={styles.textInputContainer}>
        <Text style={styles.textInputText}>Task:</Text>
        <TextInput style={[styles.textInputText, styles.textInput]}/>
        <Foundation name="pencil" size={24} color="#C0B6D6" style={styles.icon}/>
    </View>

    <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          {displayTabContent()}
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
      <View style={{alignSelf: 'center', justifyContent: 'center', padding: 10}}>
        <CircularProgress
          value={0}
          title="00:00"
          titleColor="#fff"
          titleStyle={'bold'}
          titleFontSize={48}
          showProgressValue={false}
          radius={Dimensions.get('window').width*0.3}
          maxValue={100}
          initialValue={100}
          progressValueColor={'#000'}
          activeStrokeWidth={15}
          activeStrokeColor="#544FFF"
          inActiveStrokeWidth={15}
          duration={10000}
          onAnimationComplete={() => {}}
          clockwise={false}
          
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', columnGap: 10, marginTop: 20}}>
      <Ionicons name="play" size={48} color="#544FFF" />
      <Ionicons name="pause" size={48} color="#544FFF" />
      </View>
      <TouchableOpacity style={{marginTop: 20}} onPress={() => router.push('/addTimer')}>
      <AntDesign name="menuunfold" size={32} color="white" />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? 24 : 0, 
    backgroundColor: '#1F1B2E'
  },
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
  icon: {
    position: 'absolute',
    right: 20
  }
});
