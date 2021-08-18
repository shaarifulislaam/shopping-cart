// update case/phone number
function updateProductNumber(product,price,isIncreasing){
    const productInput = document.getElementById(product + '-number'); //concrit
    let productNumber = productInput.value;
   if(isIncreasing==true){
    productNumber  = parseInt(productNumber) +1;
   }
   else if(productNumber>0){
    productNumber  = parseInt(productNumber) -1;
   }
   else{
       alert('Ivalid Number')
   }
   productInput.value = productNumber;
   //update case total
   const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
  //calculate total function call
  calculateTotal();
}
function getInputValue(product){
    const phoneInput = document.getElementById(product +'-number');
    const productNumber = parseInt(phoneInput.value); 
    return productNumber;
}
//total calculation
function calculateTotal(){
    /* const phoneInput = document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneInput.value); */
    const phoneTotal = getInputValue('phone') * 1219;

   /*  const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value); */
    const caseTotal = getInputValue('case') * 59 ;
    const subTotal = phoneTotal + caseTotal ; 
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax ;
    document.getElementById('sub-total').innerText =subTotal;
    document.getElementById('tax-amount').innerText =tax;
    document.getElementById('total-price').innerText =totalPrice;

    
}
//handle Phone increa decrease
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true)
});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false)
});

//handle case increase decrease
//case plus
document.getElementById('case-plus').addEventListener('click',function(){

    updateProductNumber('case',59,true);
   /*  const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value  = parseInt(caseNumber) +1; */
     
    //  console.log(caseNumber);
});
// case minus
document.getElementById('case-minus').addEventListener('click',function(){

    updateProductNumber('case',59,false);
   /*  const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) -1 ; */
});

//reset value
document.getElementById('remove-item-phone').addEventListener('click',function(){
      const phoneReset = document.getElementById('phone-total');
      phoneReset.innerText = '' ;
      phoneReset.innerText = 0;
      /* const caseReset = document.getElementById('case-total');
      caseReset.innerText = '' ;
      caseReset.innerText = 0; */
     
      const phoneNumberReset = document.getElementById('phone-number');
      phoneNumberReset.value = '';
      phoneNumberReset.value = 0 ;
      /* const caseNumberReset = document.getElementById('case-number');
      caseNumberReset.value = '';
      caseNumberReset.value = 0 ; */


     /*  const subTotalReset = document.getElementById('sub-total');
      subTotalReset.innerText = '' ;
      subTotalReset.innerText = 0;
      const taxReset = document.getElementById('tax-amount');
      taxReset.innerText = '' ;
      taxReset.innerText = 0;
      const totalReset = document.getElementById('total-price');
     totalReset.innerText = '' ;
      totalReset.innerText = 0; */
     
});
document.getElementById('remove-item-case').addEventListener('click',function(){
   /*  const phoneReset = document.getElementById('phone-total');
    phoneReset.innerText = '' ;
    phoneReset.innerText = 0; */
    const caseReset = document.getElementById('case-total');
    caseReset.innerText = '' ;
    caseReset.innerText = 0;
   
      const caseNumberReset = document.getElementById('case-number');
      caseNumberReset.value = '';
      caseNumberReset.value = 0 ;
     /*  const phoneNumberReset = document.getElementById('phone-number');
      phoneNumberReset.value = '';
      phoneNumberReset.value = 0 ; */


      const subTotalReset = document.getElementById('sub-total');
      subTotalReset.innerText = '' ;
      subTotalReset.innerText = 0;
       const taxReset = document.getElementById('tax-amount');
      taxReset.innerText = '' ;
      taxReset.innerText = 0;
      const totalReset = document.getElementById('total-price');
     totalReset.innerText = '' ;
      totalReset.innerText = 0;
});
