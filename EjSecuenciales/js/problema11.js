function calcular(){
  const k=parseFloat(document.getElementById('kwh').value);
  const t=parseFloat(document.getElementById('tarifa').value);
  const res=document.getElementById('result');
  const pago=k*t;
  document.getElementById('result-value').textContent='$'+pago.toFixed(2);
  document.getElementById('result-desc').textContent=`${k} kWh × $${t.toFixed(3)}/kWh = $${pago.toFixed(2)}`;
  res.classList.add('visible');
}
function resetForm(){
  ['kwh','tarifa'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
}
