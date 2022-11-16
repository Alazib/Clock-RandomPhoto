import { useEffect, useState } from "react"

function Clock() {
  const [second, setSecond] = useState(0)

  const currentDate = new Date().toLocaleDateString()
  const currentTime = new Date().toLocaleTimeString()

  useEffect(() => {
    setInterval(() => {
      setSecond(second + 1)
    })
  }, [])

  return (
    <>
      <p>Welcome user, today is {currentDate}.</p>
      <p>Now it's {currentTime}</p>
    </>
  )
}

export default Clock()