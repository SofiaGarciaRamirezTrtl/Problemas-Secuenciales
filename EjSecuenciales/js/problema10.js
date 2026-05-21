function calcular(){
  const m=parseFloat(document.getElementById('m3').value);
  const t=parseFloat(document.getElementById('tarifa').value);
  const res=document.getElementById('result');
  const pago=m*t;
  document.getElementById('result-value').textContent='$'+pago.toFixed(2);
  document.getElementById('result-desc').textContent=`${m} m³ × $${t.toFixed(2)}/m³ = $${pago.toFixed(2)}`;
  res.classList.add('visible');
}
function resetForm(){
  ['m3','tarifa'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
}
