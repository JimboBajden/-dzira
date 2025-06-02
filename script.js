document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('loaded');
      });
    }, {
      threshold: 0.1
    });  
    sections.forEach(section => { observer.observe(section);

  });
    document.getElementById("kontaktForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const button = this.querySelector('button');
      const originalText = button.innerHTML;
      button.disabled = true;
      button.innerHTML = 'Wysyłanie...';
      setTimeout(() => {
        button.disabled = false;
        button.innerHTML = originalText;
        alert("Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce 💌");
      }, 1500);
    });
  });