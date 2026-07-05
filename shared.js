/* ── SHARED FORM SUBMISSION ── */
var LOOPS_FORM_ID = 'cmq6zybem02rs0jzc70ldajs7'; // DO NOT MODIFY
var LOOPS_URL = 'https://app.loops.so/api/newsletter-form/' + LOOPS_FORM_ID;

function submitForm(inputId, btnId, errId, fieldsId, successId) {
  var input = document.getElementById(inputId);
  var btn = document.getElementById(btnId);
  var email = input.value.trim();
  if (!email || !input.checkValidity()) {
    if (errId) document.getElementById(errId).classList.remove('hidden');
    else input.style.borderColor = '#c44a4a';
    return;
  }
  if (errId) document.getElementById(errId).classList.add('hidden');
  input.style.borderColor = '';
  btn.textContent = 'Joining…';
  btn.disabled = true;
  input.disabled = true;
  fetch(LOOPS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'email=' + encodeURIComponent(email)
  })
  .then(function(res) {
    if (res.ok) {
      if (typeof gtag === 'function') gtag('event', 'generate_lead', { method: 'email' });
      document.getElementById(fieldsId).classList.add('hidden');
      document.getElementById(successId).classList.remove('hidden');
    } else {
      btn.textContent = "I'm in";
      btn.disabled = false;
      input.disabled = false;
      if (errId) document.getElementById(errId).classList.remove('hidden');
    }
  })
  .catch(function() {
    btn.textContent = "I'm in";
    btn.disabled = false;
    input.disabled = false;
    if (errId) document.getElementById(errId).classList.remove('hidden');
  });
}

/* ── NAV BACK BUTTON ── */
(function() {
  if (window.history.length <= 1) return;
  var btn = document.querySelector('.nav-back');
  if (!btn) return;
  btn.style.display = 'flex';
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    history.back();
  });
})();
