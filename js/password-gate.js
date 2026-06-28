(function() {
  var HASH = '42a726daf50182ce5b7ecdbf5757813928092b88e1d633571ee9e13285b1de0c';
  var STORAGE_KEY = 'portfolio_access';

  function sha256(str) {
    var buffer = new TextEncoder().encode(str);
    return crypto.subtle.digest('SHA-256', buffer).then(function(hash) {
      return Array.from(new Uint8Array(hash)).map(function(b) {
        return b.toString(16).padStart(2, '0');
      }).join('');
    });
  }

  function unlock() {
    document.getElementById('password-gate').remove();
    document.body.style.overflow = '';
  }

  if (sessionStorage.getItem(STORAGE_KEY) === HASH) {
    return;
  }

  document.body.style.overflow = 'hidden';

  var overlay = document.createElement('div');
  overlay.id = 'password-gate';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#fff;display:flex;align-items:center;justify-content:center;padding:20px';

  var box = document.createElement('div');
  box.style.cssText = 'text-align:center;max-width:400px;width:100%';

  var title = document.createElement('h2');
  title.textContent = 'Password Required';
  title.style.cssText = 'font-family:Inter,sans-serif;font-size:28px;font-weight:600;margin-bottom:8px';

  var desc = document.createElement('p');
  desc.style.cssText = 'font-family:Inter,sans-serif;font-size:16px;color:#555;margin-bottom:24px';
  desc.appendChild(document.createTextNode('This case study is protected. '));
  var link = document.createElement('a');
  link.href = 'mailto:boo@arianaescobar.com';
  link.style.cssText = 'color:black;text-decoration:underline';
  link.textContent = 'Contact me';
  desc.appendChild(link);
  desc.appendChild(document.createTextNode(' to get access.'));

  var form = document.createElement('form');
  form.style.cssText = 'display:flex;gap:8px;justify-content:center';

  var input = document.createElement('input');
  input.type = 'password';
  input.placeholder = 'Enter password';
  input.autocomplete = 'off';
  input.id = 'pw-input';
  input.style.cssText = 'font-family:Inter,sans-serif;font-size:16px;padding:10px 16px;border:1.5px solid #ccc;border-radius:6px;width:220px;outline:none';

  var btn = document.createElement('button');
  btn.type = 'submit';
  btn.textContent = 'Enter';
  btn.style.cssText = 'font-family:Inter,sans-serif;font-size:16px;padding:10px 20px;background:black;color:white;border:none;border-radius:6px;cursor:pointer';

  var error = document.createElement('p');
  error.textContent = 'Incorrect password';
  error.style.cssText = 'font-family:Inter,sans-serif;font-size:14px;color:#c00;margin-top:12px;display:none';

  form.appendChild(input);
  form.appendChild(btn);
  box.appendChild(title);
  box.appendChild(desc);
  box.appendChild(form);
  box.appendChild(error);
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    sha256(input.value).then(function(hashed) {
      if (hashed === HASH) {
        sessionStorage.setItem(STORAGE_KEY, HASH);
        unlock();
      } else {
        error.style.display = 'block';
        input.value = '';
        input.focus();
      }
    });
  });

  setTimeout(function() { input.focus(); }, 100);
})();
