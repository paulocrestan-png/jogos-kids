/* touch-controls.js — controle na tela (direcional + botões) para jogos de teclado.
 * Só aparece em aparelho de toque. Dispara eventos de teclado "de dentro" do jogo,
 * então funciona sem alterar a lógica do jogo (que lê keys[e.key.toLowerCase()]).
 * Uso: <script src="../touch-controls.js"></script> antes de </body>. */
(function () {
  var TOUCH = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  if (!TOUCH) return;

  var KC = { 'arrowup': 38, 'arrowdown': 40, 'arrowleft': 37, 'arrowright': 39, ' ': 32,
             'w': 87, 'a': 65, 's': 83, 'd': 68, 'k': 75, 'x': 88, 'e': 69, 'c': 67, 'shift': 16 };
  function codeFor(k) {
    if (k === ' ') return 'Space';
    if (k.indexOf('arrow') === 0) return 'Arrow' + k.slice(5, 6).toUpperCase() + k.slice(6);
    if (k === 'shift') return 'ShiftLeft';
    return 'Key' + k.toUpperCase();
  }
  function fire(type, k) {
    var ev = new KeyboardEvent(type, { key: k === 'arrowup' ? 'ArrowUp' : k === 'arrowdown' ? 'ArrowDown' : k === 'arrowleft' ? 'ArrowLeft' : k === 'arrowright' ? 'ArrowRight' : k, code: codeFor(k), keyCode: KC[k] || 0, which: KC[k] || 0, bubbles: true });
    try { window.dispatchEvent(ev); } catch (e) {}
    try { document.dispatchEvent(ev); } catch (e) {}
  }

  var st = document.createElement('style');
  st.textContent =
    '#tcWrap{position:fixed;inset:auto 0 0 0;z-index:2147483000;display:flex;justify-content:space-between;' +
    'align-items:flex-end;padding:14px;pointer-events:none;font-family:sans-serif}' +
    '#tcWrap .pad,#tcWrap .acts{pointer-events:auto}' +
    '#tcWrap button{-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;touch-action:none;border:none;color:#fff;font-weight:800;font-size:22px;border-radius:50%;width:62px;height:62px;background:rgba(30,30,40,.42);box-shadow:0 2px 6px rgba(0,0,0,.3)}' +
    '#tcWrap button.on{background:rgba(80,120,255,.75);transform:scale(.94)}' +
    '#tcWrap .pad{display:grid;grid-template-columns:62px 62px 62px;grid-template-rows:62px 62px 62px;gap:6px}' +
    '#tcWrap .pad .up{grid-area:1/2}#tcWrap .pad .lf{grid-area:2/1}#tcWrap .pad .rt{grid-area:2/3}#tcWrap .pad .dn{grid-area:3/2}' +
    '#tcWrap .acts{display:flex;flex-wrap:wrap;gap:10px;max-width:180px;justify-content:flex-end}' +
    '#tcWrap .acts button{width:66px;height:66px;font-size:26px}';
  document.head.appendChild(st);

  var wrap = document.createElement('div'); wrap.id = 'tcWrap';
  // direcional (dispara seta + WASD juntos, cobre qualquer jogo)
  var pad = document.createElement('div'); pad.className = 'pad';
  [['up', '▲', ['arrowup', 'w']], ['lf', '◀', ['arrowleft', 'a']], ['rt', '▶', ['arrowright', 'd']], ['dn', '▼', ['arrowdown', 's']]]
    .forEach(function (d) { pad.appendChild(botao(d[1], d[2], d[0])); });
  // ações (cobrem as teclas usadas nos jogos: pular/atacar/especial/usar)
  var acts = document.createElement('div'); acts.className = 'acts';
  [['⭐', [' ']], ['👊', ['k']], ['💥', ['x']], ['✨', ['e']]].forEach(function (a) { acts.appendChild(botao(a[0], a[1])); });

  wrap.appendChild(pad); wrap.appendChild(acts);
  function add() { (document.body || document.documentElement).appendChild(wrap); }
  if (document.body) add(); else document.addEventListener('DOMContentLoaded', add);

  function botao(label, keys, cls) {
    var b = document.createElement('button'); b.textContent = label; if (cls) b.className = cls;
    var press = function (ev) { ev.preventDefault(); ev.stopPropagation(); b.classList.add('on'); keys.forEach(function (k) { fire('keydown', k); }); };
    var release = function (ev) { if (ev) ev.preventDefault(); b.classList.remove('on'); keys.forEach(function (k) { fire('keyup', k); }); };
    b.addEventListener('touchstart', press, { passive: false });
    b.addEventListener('touchend', release, { passive: false });
    b.addEventListener('touchcancel', release);
    b.addEventListener('mousedown', press); b.addEventListener('mouseup', release); b.addEventListener('mouseleave', release);
    return b;
  }
})();
