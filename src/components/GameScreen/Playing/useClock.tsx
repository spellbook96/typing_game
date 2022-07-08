import { useEffect, useState } from "react"

function useClock() {
  const [sTime, setSTime] = useState(0)
  const [msTime, setMsTime] = useState(0)
  const [mTime, setMTime] = useState(0)
  // const startTime = Date.now()
  useEffect(() => {
    if(sTime === 60){
      setSTime(0)
    }
    setTimeout(() => {
      setSTime(sTime+1)
    }, 1000)
  }, [sTime])
  useEffect(() => {
    if(msTime === 100){
      setMsTime(0)
    }
    setTimeout(() => {
      setMsTime(msTime+1)
    }, 10)
  }, [msTime])
  useEffect(() => {
    if(sTime === 60){
      setMTime(0)
    }
    setTimeout(() => {
      setMTime(mTime+1)
    }, 60000)
  }, [msTime])

  return {mTime,sTime,msTime}
}

export default useClock