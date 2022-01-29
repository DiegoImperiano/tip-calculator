function calc(n) {
  let bill = document.getElementById('bill').value
  let numOfPeople = document.getElementById('people').value

  let num = n
  if (num == 0) {
    document.getElementById('tip').innerHTML = 'No Tip'

    document.getElementById('totaltip').innerHTML = 'customer did not like'
  } else {
    if (bill == 0 || numOfPeople == 0) {
      document.getElementById('totaltip').innerHTML = 'R$0.00'
      document.getElementById('tip').innerHTML = 'R$0.00'
      alert('[ ERROR! ] Preencha todos os campos!')
    } else {
      let total = bill * num
      total = total.toFixed(2)
      document.getElementById('totaltip').innerHTML =
        'R$' + Number(total).toFixed(2)
      let cada = total / numOfPeople
      document.getElementById('tip').innerHTML = 'R$' + Number(cada).toFixed(2)
    }
  }
}
function reset() {
  document.getElementById('totaltip').innerHTML = 'R$0.00'
  document.getElementById('tip').innerHTML = 'R$0.00'
}
