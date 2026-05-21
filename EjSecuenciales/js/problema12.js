function calcular(){
  const p=parseFloat(document.getElementById('precio').value);
  const res=document.getElementById('result');
  const desc=p*0.20;
  const sinDesc=p-desc;
  const final=sinDesc*1.15;
  document.getElementById('result-value').textContent='$'+final.toFixed(2);
  document.getElementById('result-desc').textContent=
    `Precio: $${p.toFixed(2)} → Descuento 20%: −$${desc.toFixed(2)} → Subtotal: $${sinDesc.toFixed(2)} → IVA 15%: +$${(sinDesc*0.15).toFixed(2)} → Final: $${final.toFixed(2)}`;
  res.classList.add('visible');
}
function resetForm(){
  document.getElementById('precio').value='';
  document.getElementById('result').classList.remove('visible');
}
