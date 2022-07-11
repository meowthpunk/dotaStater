export default function(time){
  let seconds = time
  let minutes = 0
  let hours = 0
  if (seconds>60){
    let raznica = Math.floor(seconds/60)
    seconds = seconds-raznica*60
    minutes = raznica
    if (minutes >  60){
      let raznica = Math.floor(minutes/60)
      minutes = minutes-raznica*60
      hours = raznica
    }
  }

  hours = hours.toString()


  if (minutes<10){
    minutes = "0" + minutes.toString()
  } else {
    minutes.toString()
  }

  if (seconds<10){
    seconds = "0" + seconds.toString()
  } else {
    seconds.toString()
  }

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}


// function floored(num, del){
//   return Math.floor(num/del)
// }
