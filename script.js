custom.onkeyup = function () {
  let bill = document.getElementById('bill').value
  let numOfPeople = document.getElementById('people').value
  let custom = document.querySelector('input#custom')
  let num = custom.value
  if (bill == '') {
    document.getElementById('totaltip').innerHTML = '$0.00'
    document.getElementById('tip').innerHTML = '$0.00'

    document.getElementsByClassName('inform')[0].style.border = 'solid 2px red'
  } else if (numOfPeople == '') {
    document.getElementById('totaltip').innerHTML = '$0.00'
    document.getElementById('tip').innerHTML = '$0.00'

    document.getElementsByClassName('inform')[1].style.border = 'solid 2px red'
  } else {
    document.getElementsByClassName('inform')[0].style.border = 'none'
    document.getElementsByClassName('inform')[1].style.border = 'none'
    let total = bill * (num / 100)
    let final = total + Number(bill)

    document.getElementById('totaltip').innerHTML =
      '$' + Number(final).toFixed(2)
    let cada = total / numOfPeople
    document.getElementById('tip').innerHTML = '$' + Number(cada).toFixed(2)
    console.log(total, final, bill, num)
  }
}
function calc(n) {
  let bill = document.getElementById('bill').value
  let numOfPeople = document.getElementById('people').value
  let num = n

  if (bill == '') {
    document.getElementById('totaltip').innerHTML = '$0.00'
    document.getElementById('tip').innerHTML = '$0.00'

    document.getElementsByClassName('inform')[0].style.border = 'solid 2px red'
  } else if (numOfPeople == '') {
    document.getElementById('totaltip').innerHTML = '$0.00'
    document.getElementById('tip').innerHTML = '$0.00'

    document.getElementsByClassName('inform')[1].style.border = 'solid 2px red'
  } else {
    document.getElementsByClassName('inform')[0].style.border = 'none'
    document.getElementsByClassName('inform')[1].style.border = 'none'
    let total = bill * num
    let final = total + Number(bill)

    document.getElementById('totaltip').innerHTML =
      '$' + Number(final).toFixed(2)
    let cada = total / numOfPeople
    document.getElementById('tip').innerHTML = '$' + Number(cada).toFixed(2)
  }
}
function reset() {
  document.getElementById('totaltip').innerHTML = '$0.00'
  document.getElementById('tip').innerHTML = '$0.00'
  document.getElementsByClassName('inform')[0].style.border = 'none'
  document.getElementsByClassName('inform')[1].style.border = 'none'
  document.querySelector('input#custom').innerHTML = ''
}
