import { useEffect, useState } from "react"
import "../sytles/image.css"

export default function Image() {
  const [randomPic, setRandomPic] = useState("https://picsum.photos/200")

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://picsum.photos/200").then((response) => {
        setRandomPic(response.url)
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return <img src={randomPic} alt="random pic" className="random-picture"></img>
}
