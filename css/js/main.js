// Mobile nav toggle
document.querySelectorAll('.mobile-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
  });
});

// Smooth scroll for same-page anchors (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple contact form client-side validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // Using mailto fallback: allow submission, but could add AJAX later
    // Minimal front-end validation already enforced by required attributes
    // Show a quick alert for better UX on form submission fallback:
    setTimeout(() => {
      alert('Thank you! Your message was sent (or your email client opened). We will respond shortly.');
    }, 50);
  });
}
