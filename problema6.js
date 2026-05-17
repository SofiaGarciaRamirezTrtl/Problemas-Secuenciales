function calcular(){
  const a=parseFloat(document.getElementById('catA').value);
  const b=parseFloat(document.getElementById('catB').value);
  const res=document.getElementById('result');
  const c=Math.sqrt(a*a+b*b);
  document.getElementById('result-value').textContent=c.toFixed(4)+' u';
  document.getElementById('result-desc').textContent=`c = √(${a}² + ${b}²) = √${(a*a+b*b).toFixed(4)} = ${c.toFixed(4)}`;
  res.classList.add('visible');
}
function resetForm(){
  ['catA','catB'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
}
