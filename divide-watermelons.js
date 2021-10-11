function divide(weight){
  //only accept weight bigger than 1 and weight is not 2
  if (weight > 1 && weight != 2) {
    let remainder = weight % 2
    //all even numbers is acceptable
    if (remainder == 0) {
      return true
    } else { return false}
  } return false
}