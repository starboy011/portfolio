import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
      <div className="textContainer">
        <h2>Rishav Choudhary</h2>
        <h1>Full Stack Developer</h1>
        <div className="buttons">
          <button>See the latest work</button>
          <button>Contact me</button>
        </div>
        <img src="./scroll.png"/>
      </div>
      <div className="imageContainer">
        <img src="/hero.png"/>
      </div>
    </div>
  )
}

export default Hero
