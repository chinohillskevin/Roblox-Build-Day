const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuButton && mainNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealItems.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});

const copyButton = document.querySelector('[data-copy]');
const copyStatus = document.querySelector('.copy-status');
if (copyButton && copyStatus) {
  copyButton.addEventListener('click', async () => {
    const text = 'I’m joining Roblox Build Day — a day to learn how to build games in Roblox Studio!';
    try {
      await navigator.clipboard.writeText(text);
      copyStatus.textContent = 'Copied! Send it to your crew.';
    } catch {
      copyStatus.textContent = text;
    }
    setTimeout(() => { copyStatus.textContent = ''; }, 4000);
  });
}

const registerButton = document.querySelector('[data-register]');
if (registerButton && copyStatus) {
  registerButton.addEventListener('click', () => {
    copyStatus.textContent = 'Registration opens soon — save the date: 10/22/2026.';
  });
}
