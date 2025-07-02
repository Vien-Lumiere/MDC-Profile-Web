function showPage(targetId) {
  const pages = document.querySelectorAll('.all');
  const current = document.querySelector('.all.active');
  const next = document.getElementById(targetId);

  if (!next || current === next) return;

  // Sembunyikan halaman saat ini
  current.classList.remove('active');
  current.style.zIndex = -1;

  // Tampilkan halaman target dengan delay sedikit agar transisi mulus
  setTimeout(() => {
    next.style.zIndex = 10;
    next.classList.add('active');
  }, 20); // kecilin delay biar langsung masuk tapi tetap detect transition
}
