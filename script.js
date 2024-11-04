// Display an alert when the page loads
window.addEventListener('load', () => {
    alert("Welcome to Pooja Venugopal Baskaran's Data Science Portfolio!");
    
    // Add a fade-in effect to the introduction text
    const introText = document.querySelectorAll('.intro');
    introText.forEach((text, index) => {
      setTimeout(() => {
        text.style.opacity = 1;
        text.style.transform = 'translateY(0)';
      }, 500 * index); // Delay each paragraph for a staggered effect
    });
  });
  