// navbar 
document.addEventListener('DOMContentLoaded', () => {
    const barIcon = document.getElementById('bar-icon');
    const menu = document.getElementById('menu');
    const languageSelector = document.getElementById('languageSelector');
    const languageOptions = document.getElementById('languageOptions');
    const profileSelector = document.getElementById('profileSelector');
    const profileOptions = document.getElementById('profileOptions');
  
    // Toggle menu on small devices
    barIcon.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  
    // Toggle language dropdown
    languageSelector.addEventListener('click', () => {
      languageOptions.classList.toggle('hidden');
    });
  
    // Toggle profile dropdown
    profileSelector.addEventListener('click', () => {
      profileOptions.classList.toggle('hidden');
    });
  });


  // FAQ Accordion Functionality
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const svg = button.querySelector('svg');

        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            svg.classList.add('rotate-180');
            svg.classList.add('text-[#2B59FF]');
        } else {
            content.classList.add('hidden');
            svg.classList.remove('rotate-180');
            svg.classList.remove('text-[#2B59FF]');
        }
    });
});