function calcular(){
  const k=parseFloat(document.getElementById('km').value);
  const t=parseFloat(document.getElementById('tarifa').value);
  const res=document.getElementById('result');
  const costo=k*t;
  document.getElementById('result-value').textContent='$'+costo.toFixed(2);
  document.getElementById('result-desc').textContent=`${k} km × $${t.toFixed(2)}/km = $${costo.toFixed(2)}`;
  res.classList.add('visible');
}
function resetForm(){
  ['km','tarifa'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
}
