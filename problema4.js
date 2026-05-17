function calcular(){
  const h=parseFloat(document.getElementById('horas').value);
  const t=parseFloat(document.getElementById('tarifa').value);
  const res=document.getElementById('result');
  const total=h*t;
  document.getElementById('result-value').textContent='$'+total.toFixed(2);
  document.getElementById('result-desc').textContent=`${h} horas × $${t.toFixed(2)}/hora = $${total.toFixed(2)}`;
  res.classList.add('visible');
}
function resetForm(){
  ['horas','tarifa'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
}
