function calcular(){
  const n=parseInt(document.getElementById('noches').value);
  const t=parseFloat(document.getElementById('tarifa').value);
  const res=document.getElementById('result');
  const total=n*t;
  document.getElementById('result-value').textContent='$'+total.toFixed(2);
  document.getElementById('result-desc').textContent=`${n} noches × $${t.toFixed(2)}/noche = $${total.toFixed(2)}`;
  res.classList.add('visible');
}
function resetForm(){
  ['noches','tarifa'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
}
