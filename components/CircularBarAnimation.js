import CircularProgress, {ProgressRef} from 'react-native-circular-progress-indicator';
import {View, Dimensions, StyleSheet} from 'react-native'
import { Button } from 'react-native';
import { useRef } from 'react';
import formatTime from '../utils/formatTime'

const CircularBarAnimation = ({time}) => {
  const seconds = time *60;
  const progressRef = useRef(ProgressRef)
    return <View style={styles.circularBarContainer}>
    <CircularProgress
      value={formatTime(seconds)}
      
      title="00:00"
      titleColor="#fff"
      titleStyle={'bold'}
      titleFontSize={48}
      
      // showProgressValue={false}
      radius={Dimensions.get('window').width * 0.3}
      maxValue={100}
      // initialValue={0}
      progressValueColor={'#fff'}
      activeStrokeWidth={15}
      activeStrokeColor="#544FFF"
      inActiveStrokeWidth={15}
      inActiveStrokeColor="#393939"
      duration={seconds*1000}
      onAnimationComplete={() => { }}
      // clockwise={false}
      startInPausedState= {true}
      ref={progressRef}
    />
    <Button title='Press' onPress={() => progressRef.current.play()}/>
  </View>
}

export default CircularBarAnimation

const styles = StyleSheet.create({
    circularBarContainer: {
        alignSelf: 'center', 
        justifyContent: 'center', 
        padding: 10 
    }
})