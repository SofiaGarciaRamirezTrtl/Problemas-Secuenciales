function calcular(){
  const h=parseFloat(document.getElementById('hotel').value);
  const c=parseFloat(document.getElementById('comida').value);
  const e= 100;
  const d=parseInt(document.getElementById('dias').value);
  const res=document.getElementById('result');
  const diario=h+c+e;
  const total=diario*d;
  document.getElementById('result-value').textContent='$'+total.toFixed(2);
  document.getElementById('result-desc').textContent=
    `Por día: hotel $${h}+comida $${c}+extras $${e} = $${diario.toFixed(2)} x ${d} días = $${total.toFixed(2)}`;
  res.classList.add('visible');
}
function resetForm(){
  ['hotel','comida','dias'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
} 
