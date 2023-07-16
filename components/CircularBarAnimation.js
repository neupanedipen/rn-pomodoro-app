import { useContext } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { SettingsContext } from '../context/SettingsContext'
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'

const CircularBarAnimation = ({key, timer, animate, children}) => {
  timer = 1
  animate = true

  const {stopAnimate} = useContext(SettingsContext)
    return <View style={styles.circularBarContainer}>
    <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
        strokeWidth={6}
        size={220}
        trailColor="#151932"
        onComplete={ () => {
          stopAnimate()
        }}
      >
        <Text>{children}</Text>
      </CountdownCircleTimer>
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