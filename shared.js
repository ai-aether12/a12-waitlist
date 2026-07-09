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

/* ── COOKIE CONSENT / GA GATE ── */
var GA_ID = 'G-B72BCSL7P7';

function getCookie(name) {
  var match = document.cookie.match('(?:^|; )' + name + '=([^;]*)');
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value) +
    '; path=/; max-age=31536000; SameSite=Lax';
}

function loadGA() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
}

(function() {
  var consent = getCookie('consent');
  var banner = document.getElementById('cookie-banner');

  if (consent === 'granted') {
    if (banner) banner.remove();
    loadGA();
    return;
  }
  if (consent === 'declined') {
    if (banner) banner.remove();
    return;
  }
  if (!banner) return;

  setTimeout(function() { banner.classList.remove('cookie-hide'); }, 800);

  var dismissed = false;
  function dismiss(choice) {
    if (dismissed) return;
    dismissed = true;
    setCookie('consent', choice);
    if (choice === 'granted') loadGA();
    banner.classList.add('cookie-hide');
    setTimeout(function() { banner.remove(); }, 300);
  }

  document.getElementById('cookie-accept').addEventListener('click', function() { dismiss('granted'); });
  document.getElementById('cookie-decline').addEventListener('click', function() { dismiss('declined'); });
})();
