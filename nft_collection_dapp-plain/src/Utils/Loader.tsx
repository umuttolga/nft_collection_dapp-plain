import React from "react"

function Spinner() {
  // Define the style object for the spinner element
  const spinnerStyle = {
    width: "3em",
    height: "3em",
    cursor: "not-allowed",
    borderRadius: "50%",
    border: "2px solid #444",
    boxShadow:
      "-10px -10px 10px #6359f8, 0px -10px 10px 0px #9c32e2, 10px -10px 10px #f36896, 10px 0 10px #ff0b0b, 10px 10px 10px 0px#ff5500, 0 10px 10px 0px #ff9500, -10px 10px 10px 0px #ffb700",
    animation: "rot55 0.7s linear infinite",
  }

  // Define the style object for the spinnerin element
  const spinnerinStyle = {
    border: "2px solid #444",
    width: "1.5em",
    height: "1.5em",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }

  // Define the keyframes for the rot55 animation
  const rot55 = `
    @keyframes rot55 {
      to {
        transform: rotate(360deg);
      }
    }
  `

  return (
    <div>
      <style>{rot55}</style>
      <div className="spinner" style={spinnerStyle}>
        <div className="spinnerin" style={spinnerinStyle}></div>
      </div>
    </div>
  )
}

export default Spinner
