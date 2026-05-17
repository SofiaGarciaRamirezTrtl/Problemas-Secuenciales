function calcular(){
  const anio=parseInt(document.getElementById('anio').value);
  const actual=new Date().getFullYear();
  const res=document.getElementById('result');
  const edad=actual-anio;
  document.getElementById('result-value').textContent=edad+' años';
  document.getElementById('result-desc').textContent=`${actual} − ${anio} = ${edad} años (aproximado, sin considerar mes/día)`;
  res.classList.add('visible');
}
function resetForm(){
  document.getElementById('anio').value='';
  document.getElementById('result').classList.remove('visible');
}
