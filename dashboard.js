const firstFrameElement = document.getElementById("frame1")
const secondFrameElement = document.getElementById("frame2")

let activeFrame = 1
let interval = 2000

const update = () => {
  setInterval(async () => {
    const res = await fetch("http://localhost:3000/api", { mode: "cors" })
    const data = await res.json()

    if (activeFrame === 1) {
      secondFrameElement.src = data.url

      firstFrameElement.style.display = "none"
      secondFrameElement.style.display = "flex"

      activeFrame = 2
    } else if (activeFrame === 2) {
      firstFrameElement.src = data.url

      firstFrameElement.style.display = "flex"
      secondFrameElement.style.display = "none"

      activeFrame = 1
    }

    document.getElementById("current").innerText = activeFrame
  }, interval)
}

update()
