function calcular(){
  const a=parseFloat(document.getElementById('area').value);
  const p=parseFloat(document.getElementById('precio').value);
  const res=document.getElementById('result');
  const costo=a*p;
  document.getElementById('result-value').textContent='$'+costo.toFixed(2);
  document.getElementById('result-desc').textContent=`${a} m² × $${p.toFixed(2)}/m² = $${costo.toFixed(2)}`;
  res.classList.add('visible');
}
function resetForm(){
  ['area','precio'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
}
