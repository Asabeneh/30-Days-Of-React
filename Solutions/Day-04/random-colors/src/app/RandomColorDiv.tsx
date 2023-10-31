const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

const RandomDiv = () => {
    return (
    <div
    style={{backgroundColor: hexaColor(), display: 'flex' , alignItems: 'center',  justifyContent: 'center', borderRadius: "1vw", height: "10vh" , width: "50%", margin: '0.5vh auto'}}
    >{hexaColor()}</div>)
}

export default RandomDiv