import { useContext } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { SettingsContext } from '../context/SettingsContext'
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'
import formatTime from '../utils/formatTime'

const CircularBarAnimation = ({item, timer, animate}) => {
  const {stopAnimate} = useContext(SettingsContext)
    return <View style={styles.circularBarContainer}>
    <CountdownCircleTimer
        key={item}
        isPlaying={animate}
        duration={timer * 60}
        colors={['#544FFF']}
        strokeWidth={10}
        size={235}
        trailColor="#151932"
        onComplete={ () => {
          stopAnimate()
        }}
      >
      {({ remainingTime }) => <Text style={{color: '#fff', fontSize: 28, fontWeight: 'bold'}}>{formatTime(remainingTime)}</Text>}
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