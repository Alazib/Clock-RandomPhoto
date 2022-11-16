import { useEffect, useState } from "react"

function Image() {
  const [randomPic, setRandomPic] = useState("https://picsum.photos/200")

  useEffect(() => {
    setInterval(() => {
      fetch("https://picsum.photos/200").then((result) =>
        setRandomPic(result.url)
      )
    }, 4000)
  })

  return <img src={randomPic} alt="random pic" className="random-picture"></img>
}

export default Image()
