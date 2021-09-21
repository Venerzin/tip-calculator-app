function toggleSelectedOption(event){
  var optionEl = event.path[0];
  try{
    var currentSelected = document.querySelector('.is-selected').className;
    document.querySelector('.is-selected').className = currentSelected.replace('is-selected', '');
    optionEl.className = `${optionEl.className} is-selected`;
  }catch{
    return;
  }
  updateScreen();
}

function calcTip(){
  var bill = document.querySelector('#bill').value;
  var numberOfPeople= document.querySelector('#number-people').value;
  var tipPercentage;
  if(document.querySelector('.is-selected').innerHTML != ''){
    tipPercentage = document.querySelector('.is-selected').innerHTML.replace('%', '');
  }else if(document.querySelector('.is-selected').value.length < 1){
    console.log('vazioooo')
    tipPercentage = 0;
  }else{
    tipPercentage = document.querySelector('.is-selected').value;
  }


  if(bill !== '' && numberOfPeople !== '' && tipPercentage != ''){
    var tipAmount = (parseFloat(bill) * (parseInt(tipPercentage)/100)) / parseInt(numberOfPeople);
    var total = (parseFloat(bill) / parseInt(numberOfPeople)) + tipAmount;

    return {
      tipAmount,
      total,
    };
  }

  return {
    tipAmount: 0,
    total: 0,
  }
}

function updateScreen(){
  let {total, tipAmount} = calcTip();
  
  document.querySelector('.c-app__tip-amount').innerHTML = tipAmount.toFixed(2);
  document.querySelector('.c-app__total').innerHTML = total.toFixed(2);
}

function resetFields(){
  history.go('/');
}