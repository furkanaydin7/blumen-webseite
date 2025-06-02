function nextStep(step) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById('step' + step).classList.add('active');
} 