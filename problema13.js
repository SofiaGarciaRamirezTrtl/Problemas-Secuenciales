function calcular(){
  const s=parseFloat(document.getElementById('sueldo').value);
  const res=document.getElementById('result');
  const sem=s*0.15;
  const anual=sem*52;
  document.getElementById('result-value').textContent='$'+anual.toFixed(2);
  document.getElementById('result-desc').textContent=
    `Ahorro semanal: $${sem.toFixed(2)} (15%) × 52 semanas = $${anual.toFixed(2)} al año`;
  res.classList.add('visible');
}
function resetForm(){
  document.getElementById('sueldo').value='';
  document.getElementById('result').classList.remove('visible');
}
