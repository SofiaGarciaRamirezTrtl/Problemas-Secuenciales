function calcular(){
  const e1=parseFloat(document.getElementById('e1').value);
  const e2=parseFloat(document.getElementById('e2').value);
  const e3=parseFloat(document.getElementById('e3').value);
  const res=document.getElementById('result');
  const prom=e1*0.25+e2*0.25+e3*0.50;
  let estado=prom>=6?'✅ Aprobado':'❌ Reprobado';
  document.getElementById('result-value').textContent=prom.toFixed(2)+' / 10';
  document.getElementById('result-desc').textContent=
    `(${e1}x0.25) + (${e2}x0.25) + (${e3}x0.50) = ${prom.toFixed(2)} → ${estado}`;
  res.classList.add('visible');
}
function resetForm(){
  ['e1','e2','e3'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
}
