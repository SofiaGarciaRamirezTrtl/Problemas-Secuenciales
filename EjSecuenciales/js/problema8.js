function calcular(){
  const d=parseFloat(document.getElementById('dist').value);
  const v=parseFloat(document.getElementById('vel').value);
  const res=document.getElementById('result');
  const t=d/v;
  const h=Math.floor(t);
  const m=Math.round((t-h)*60);
  document.getElementById('result-value').textContent=t.toFixed(4)+' h';
  document.getElementById('result-desc').textContent=`${d} km ÷ ${v} km/h = ${t.toFixed(4)} horas (≈ ${h}h ${m}min)`;
  res.classList.add('visible');
}
function resetForm(){
  ['dist','vel'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
}
