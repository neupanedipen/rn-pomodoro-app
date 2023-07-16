import { useState, createContext } from "react";

export const SettingsContext = createContext()

function SettingsContextProvider(props) {

    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    function setCurrentTimer(active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    function startTimer() {
        setStartAnimate(true)
    }
    function pauseTimer() {
        setStartAnimate(false)
    }
    const timerContent = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        return `${minutes}:${seconds}`
    }

    // const timerContent = <Text>09:30</Text>

    const SettingsBtn = () => {
        setExecuting({})
        setPomodoro(0)
    }

    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    const setTimerTime = (evaluate) => {
        switch (evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work)
                break;
            case 'short':
                setPomodoro(evaluate.short)
                break;
            case 'long':
                setPomodoro(evaluate.long)
                break;
            default:
                setPomodoro(0)
                break;
        }
    }

    function stopAnimate() {
        setStartAnimate(false)
    }

    return (
        <SettingsContext.Provider value={{
            pomodoro,
            executing,
            updateExecute,
            startAnimate,
            startTimer,
            pauseTimer,
            timerContent,
            SettingsBtn,
            setCurrentTimer,
            stopAnimate
        }}>
            {props.children}
        </SettingsContext.Provider>
    )

}

export default SettingsContextProvider