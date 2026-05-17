function calcular(){
  const l=parseFloat(document.getElementById('lado').value);
  const res=document.getElementById('result');
  const area=l*l;
  document.getElementById('result-value').textContent=area.toFixed(4)+' u²';
  document.getElementById('result-desc').textContent=`A = ${l}² = ${area.toFixed(4)} unidades cuadradas`;
  res.classList.add('visible');
}
function resetForm(){
  document.getElementById('lado').value='';
  document.getElementById('result').classList.remove('visible');
}
