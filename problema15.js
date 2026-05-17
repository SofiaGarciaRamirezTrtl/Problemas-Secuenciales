function calcular(){
  const R=parseFloat(document.getElementById('R').value);
  const I=parseFloat(document.getElementById('I').value);
  const res=document.getElementById('result');
  const V=R*I;
  const P=V*I;
  document.getElementById('result-value').textContent=`V = ${V.toFixed(2)} V · P = ${P.toFixed(2)} W`;
  document.getElementById('result-desc').textContent=
    `V = RxI = ${R}x${I} = ${V.toFixed(2)} Voltios | P = VxI = ${V.toFixed(2)}x${I} = ${P.toFixed(2)} Watts`;
  res.classList.add('visible');
}
function resetForm(){
  ['R','I'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('result').classList.remove('visible');
}
