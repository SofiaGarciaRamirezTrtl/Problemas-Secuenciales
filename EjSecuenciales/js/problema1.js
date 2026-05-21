function calcular(){
  const b=parseFloat(document.getElementById('base').value);
  const h=parseFloat(document.getElementById('altura').value);
  const res=document.getElementById('result');
  const area=(b*h)/2;
  document.getElementById('result-value').textContent=area.toFixed(4);
  document.getElementById('result-desc').textContent=`Base: ${b} x  Altura: ${h} ÷ 2 = ${area.toFixed(4)}`;
  res.classList.add('visible');
}
function resetForm(){
  ['base','altura'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
}
