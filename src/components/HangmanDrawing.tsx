import Body from './body/Body.tsx'
import Head from './body/Head.tsx'
import LeftHand from './body/LeftHand.tsx'
import LeftLeg from './body/LeftLeg.tsx'
import RightHand from './body/RightHand.tsx'
import RightLeg from './body/RightLeg.tsx'

const HangmanDrawing = () => {
  return (
      <div style={{ position: "relative" }}>
      <Head />
      <Body />
      <RightHand />
      <LeftHand />
      <RightLeg />
      <LeftLeg />
      
          <div style={{ height: "50px", width: "10px", background: "black",position:"absolute",  top: 0, right: 0}} />
          <div style={{ height: "10px", width: "200px", background: "black",marginLeft: "120px" }} />
          <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }} />
          <div style={{ height: "10px", width: "250px", background: "black" }} />
      </div>
  )
}

export default HangmanDrawing