function calcular(){
  const m=parseFloat(document.getElementById('min').value);
  const t=parseFloat(document.getElementById('tarifa').value);
  const res=document.getElementById('result');
  const costo=m*t;
  document.getElementById('result-value').textContent='$'+costo.toFixed(2);
  document.getElementById('result-desc').textContent=`${m} min × $${t.toFixed(2)}/min = $${costo.toFixed(2)}`;
  res.classList.add('visible');
}
function resetForm(){
  ['min','tarifa'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
}
