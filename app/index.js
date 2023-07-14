import { StyleSheet, Text, View } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import Tabs from "../components/Tabs";
import { useState } from "react";


const tabs = ['Focus', 'Short Break', 'Long Break']

export default function Home({children}) {
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
    <View style={styles.container}>
{/* <CircularProgress
  value={0}
  title="00:00"
  titleStyle={'bold'}
  titleFontSize={48}
  showProgressValue={false}
  radius={100}
  maxValue={100}
  initialValue={100}
  progressValueColor={'#000'}
  activeStrokeWidth={15}
  inActiveStrokeWidth={15}
  duration={10000}
  onAnimationComplete={() => alert('time out')}
  clockwise={false}
/> */}

<Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
  {displayTabContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    padding: 24,
  },
});
