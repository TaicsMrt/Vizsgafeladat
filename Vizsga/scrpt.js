function openModal(type) {
     const modal = document.getElementById('modal');
     const modalTitle = document.getElementById('modal-title');
     modal.style.display = 'flex';
   
     if (type === 'reg') {
       modalTitle.textContent = 'Regisztráció';
     } else if (type === 'login') {
       modalTitle.textContent = 'Belépés';
     }
   }
   
   function closeModal() {
     const modal = document.getElementById('modal');
     modal.style.display = 'none';
   }
   
   function changeText(newText) {
     document.getElementById('introduction').textContent = newText;
   }   