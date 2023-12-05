import "./Landing.css"
import AnimatedBackground from '../components/AnimatedBackGround/AnimatedBackground'
import Typewritter from '../components/Scritta/Typewritter'

let msgArray = [
  " ",
  "Cristian Ghali",
  "Un Junior Web Developer",
  "Front-end Developer",
  "Full stack Developer", 
  " ",
]


const Landing = () => {
  return (
    <AnimatedBackground>
      <div className='landing-type'>
      <div>Chi sono ?</div>
      <Typewritter data= {msgArray} />
      </div>
    </AnimatedBackground>
  )
}

export default Landing