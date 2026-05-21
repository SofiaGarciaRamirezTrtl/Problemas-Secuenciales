function calcular(){
  const anio=parseInt(document.getElementById('anio').value);
  const actual=new Date().getFullYear();
  const res=document.getElementById('result');
  const anios=actual-anio;
  const meses=anios*12;
  const semanas=anios*52;
  const dias=anios*365;
  const horas=dias*24;
  document.getElementById('result-value').textContent=anios+' años';
  document.getElementById('result-desc').textContent=
    `≈ ${meses.toLocaleString()} meses | ${semanas.toLocaleString()} semanas | ${dias.toLocaleString()} días | ${horas.toLocaleString()} horas`;
  res.classList.add('visible');
}
function resetForm(){
  document.getElementById('anio').value='';
  document.getElementById('result').classList.remove('visible');
}
