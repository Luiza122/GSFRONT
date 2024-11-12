// Scroll suave para as seções
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Mensagem de sucesso no formulário
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
  });
  