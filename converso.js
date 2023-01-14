const calcular = document.querySelector('#calcular')

calcular.addEventListener('click',calacularD);
calcular.addEventListener('touch',calacularD);



function calacularD(){
const reais = parseFloat(document.querySelector('#real').value) 
const dolares = parseFloat(document.querySelector('#dolar').value) 
console.log(dolares)
console.log(reais)

if(reais != "" && dolares!=""){
   const preço = reais/dolares;
   resultado.innerHTML = `dolar:${preço.toFixed(2)}`
}
}