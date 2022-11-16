import { useEffect, useState } from "react"

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  )
  const currentDate = new Date().toLocaleDateString()

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <>
      <p>Welcome user, today is {currentDate}.</p>
      <p>Now it's {currentTime}</p>
    </>
  )
}
