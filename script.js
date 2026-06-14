document.addEventListener('DOMContentLoaded', function() {
  
  // Плавный скролл для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Маска телефона
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      let value = this.value.replace(/\D/g, '');
      if (!value.startsWith('7') && value.length > 0) {
        value = '7' + value;
      }
      let formatted = '+7 (';
      if (value.length > 1) formatted += value.substring(1, 4);
      if (value.length >= 4) formatted += ') ' + value.substring(4, 7);
      if (value.length >= 7) formatted += '-' + value.substring(7, 9);
      if (value.length >= 9) formatted += '-' + value.substring(9, 11);
      this.value = formatted;
    });
  }

  // Отправка формы
  const form = document.getElementById('orderForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value;

      if (!name || !phone || !service) {
        alert('Пожалуйста, заполните все поля');
        return;
      }

      // Имитация успешной отправки (замените на реальный fetch/axios)
      alert(`Спасибо, ${name}! Ваша заявка на "${service}" принята. Мы перезвоним вам в ближайшее время.`);
      form.reset();
    });
  }

});
