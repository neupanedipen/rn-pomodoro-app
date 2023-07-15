import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import Tabs from "../../components/Tabs";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons'; 


const tabs = ['Focus', 'Short Break', 'Long Break']

export default function Home({ children }) {
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
      <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 20}}>Pomodoro Timer</Text>
      <Text style={{fontSize: 16, marginBottom: 40}}>Be productive in a systematic way</Text>

    <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          {displayTabContent()}
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
      <View style={{alignSelf: 'center', justifyContent: 'center', padding: 10}}>
        <CircularProgress
          value={0}
          title="00:00"
          titleColor="#312651"
          titleStyle={'bold'}
          titleFontSize={48}
          showProgressValue={false}
          radius={Dimensions.get('window').width*0.3}
          maxValue={100}
          initialValue={100}
          progressValueColor={'#000'}
          activeStrokeWidth={15}
          inActiveStrokeWidth={15}
          duration={10000}
          onAnimationComplete={() => {}}
          clockwise={false}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', columnGap: 10, marginTop: 20}}>
      <Ionicons name="play" size={48} color="#312651" />
      <Ionicons name="pause" size={48} color="#312651" />
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? 24 : 0, 
  },
});
