import '../../Style/Art-wall/artwall_main_style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Tangani klik pada elemen dengan class 'sub'
  const subItems = document.querySelectorAll('.sub');
  
  subItems.forEach(item => {
    item.addEventListener('click', function() {
      // Dapatkan target dari atribut data-target
      const targetPage = this.getAttribute('data-target');
      
      // Animasi klik (opsional)
      this.classList.add('clicked');
      setTimeout(() => {
        this.classList.remove('clicked');
        
        // Navigasi ke halaman target
        window.location.href = `Art-wall/${targetPage}`;
      }, 300);
    });

    // Efek hover (opsional)
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Tombol back
  document.querySelector('.back-btn')?.addEventListener('click', () => {
    window.location.href = 'artwall_main.html';
  });
});