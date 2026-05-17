function calcular(){
  const p=parseFloat(document.getElementById('pesos').value);
  const c=parseFloat(document.getElementById('cambio').value);
  const res=document.getElementById('result');
  const usd=p/c;
  document.getElementById('result-value').textContent='$'+usd.toFixed(2)+' USD';
  document.getElementById('result-desc').textContent=`MXN $${p.toFixed(2)} ÷ ${c.toFixed(4)} = USD $${usd.toFixed(2)}`;
  res.classList.add('visible');
}
function resetForm(){
  ['pesos','cambio'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('error').classList.remove('visible');
  document.getElementById('result').classList.remove('visible');
}
