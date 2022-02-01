function calc(n) {
  let bill = document.getElementById('bill').value
  let numOfPeople = document.getElementById('people').value
  let num = n
  if (num == 0) {
    document.getElementById('tip').innerHTML = 'No Tip'

    document.getElementById('totaltip').innerHTML = 'customer did not like'
  } else {
    if (bill == '' || numOfPeople == '') {
      document.getElementById('totaltip').innerHTML = '$0.00'
      document.getElementById('tip').innerHTML = '$0.00'

      document.getElementsByClassName('inform')[0].style.border = 'solid red'
      document.getElementsByClassName('inform')[1].style.border = 'solid red'
    } else {
      let total = bill * num
      let final = total + Number(bill)

      document.getElementById('totaltip').innerHTML =
        '$' + Number(final).toFixed(2)
      let cada = total / numOfPeople
      document.getElementById('tip').innerHTML = '$' + Number(cada).toFixed(2)
    }
  }
}
function reset() {
  document.getElementById('totaltip').innerHTML = '$0.00'
  document.getElementById('tip').innerHTML = '$0.00'
  document.getElementsByClassName('inform')[0].style.border = 'none'
  document.getElementsByClassName('inform')[1].style.border = 'none'
}
