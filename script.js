const input = document.getElementById('nameInput');
const btn = document.getElementById('validateBtn');
const message = document.getElementById('message');

function validate() {
  const value = input.value.trim();
  const re = /^[A-Za-z]+$/;
  if (re.test(value)) {
    message.textContent = 'Valid ✓';
    message.className = 'valid';
  } else {
    message.textContent = 'Invalid ✖';
    message.className = 'invalid';
  }
}

btn.addEventListener('click', validate);
// optional: validate as user types
input.addEventListener('input', () => {
  if (input.value === '') {
    message.textContent = '';
    message.className = '';
  }
});

