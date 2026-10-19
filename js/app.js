/* The Wedding Weekend · v2 · render de una sola página */
(function () {
  const D = window.BODA, UI = window.UI;
  const A = p => (window.ASSETS && window.ASSETS[p]) || p;   // en la versión publicada las imágenes van embebidas
  let L = localStorage.getItem('ww-lang') === 'en' ? 'en' : 'es';
  const t = v => (v == null ? '' : typeof v === 'object' && !Array.isArray(v) ? (v[L] ?? v.es ?? '') : v);
  const u = k => UI[L][k];
  const has = v => { const x = t(v); return Array.isArray(x) ? x.length > 0 : !!(x && String(x).trim()); };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const SECS = ['inicio', 'historia', 'finde', 'boda', 'hospedaje', 'rsvp'];
  const IDS = { inicio: 'inicio', historia: 'historia', finde: 'fin-de-semana', boda: 'ceremonia', hospedaje: 'hospedaje', rsvp: 'rsvp' };

  const ICON = {
    iglesia: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 4v8M20.5 7.5h7M14 44V24l10-10 10 10v20M8 44V30l6-4M40 44V30l-6-4M4 44h40M20 44v-9a4 4 0 0 1 8 0v9M24 20.5a2.5 2.5 0 1 0 0 .01"/></svg>',
    copas: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M13 6h10l-1 10a4 4 0 0 1-8 0zM25 6h10l-1 10a4 4 0 0 1-8 0zM18 20v16M30 20v16M13 40h10M25 40h10M18 36l-4 4M30 36l4 4M23 3l2 2"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="1.5"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>'
  };
  const orn = '<span class="orn" aria-hidden="true"><i></i><b></b><i></i></span>';
  const head = (k, h, extra = '') => `<header class="sec-head rv">${k ? `<p class="kicker">${k}</p>` : ''}<h2>${h}</h2>${orn}${extra}</header>`;

  /* ---------------- SECCIONES ---------------- */
  function hero() {
    return `<section class="hero" id="inicio" aria-label="${esc(u('nav').inicio)}">
      <picture class="hero-ph">
        <source media="(max-width: 760px)" srcset="${A('assets/v2/hero_mobile.webp')}">
        <img src="${A('assets/v2/hero_desktop.webp')}" alt="${L === 'es' ? 'Brindis de Estefanía y Fabio el día de la pedida, con el anillo de compromiso' : 'Estefanía and Fabio’s engagement toast, with the ring'}" width="2160" height="1350" fetchpriority="high">
      </picture>
      <div class="hero-in">
        <p class="kicker kicker-light">${u('kicker')}</p>
        <h1 class="names"><span>${D.novia}</span><span class="amp">&amp;</span><span>${D.novio}</span></h1>
        <p class="hero-date">${t(D.fechaTexto)}</p>
        <p class="hero-city">${D.ciudad}</p>
        <div class="count" id="count" aria-label="${u('faltan')}"></div>
        <div class="hero-cta">
          <a class="btn btn-primary" href="#rsvp">${u('cta1')}</a>
          <a class="btn btn-outline btn-light" href="#fin-de-semana">${u('cta2')}</a>
        </div>
      </div>
    </section>`;
  }

  function historia() {
    const padres = (has(D.padresNovia) || has(D.padresNovio)) ? `<div class="padres rv"><p class="kicker">${u('bendicion')}</p><div>
      ${has(D.padresNovia) ? `<p><small>${u('padresNovia')}</small>${esc(t(D.padresNovia))}</p>` : ''}
      ${has(D.padresNovio) ? `<p><small>${u('padresNovio')}</small>${esc(t(D.padresNovio))}</p>` : ''}</div></div>` : '';
    const fotos = D.fotos.map((f, i) => `<figure class="ph rv" style="--d:${i * 80}ms">
        <div class="ph-frame"><img src="${A(f.src)}" alt="${esc(t(f.alt))}" width="800" height="1000" loading="lazy" decoding="async"></div>
        <figcaption>${esc(t(f.pie))}${f.fecha ? ` <span>${f.fecha}</span>` : ''}</figcaption></figure>`).join('');
    return `<section class="sec" id="historia">
      <div class="wrap">
        <div class="intro">
          ${head(u('kHist'), u('hHist'))}
          <div class="intro-txt rv">
            <p class="lead">${esc(t(D.bienvenida))}</p>
            ${has(D.historiaTexto) ? `<p>${esc(t(D.historiaTexto))}</p>` : ''}
            <p class="firma">${D.novia} &amp; ${D.novio}</p>
          </div>
        </div>
        <div class="gal">${fotos}</div>
        ${padres}
      </div>
    </section>`;
  }

  function finde() {
    let anyPending = false;
    const days = D.itinerario.map((d, i) => {
      const items = d.items.map(it => { if (!has(it.hora)) anyPending = true;
        return `<li>${has(it.hora) ? `<span class="tl-time">${esc(t(it.hora))}</span>` : ''}<h3>${esc(t(it.t))}</h3>${has(it.d) ? `<p>${esc(t(it.d))}</p>` : ''}</li>`; }).join('');
      return `<li class="tl-day rv${d.destacado ? ' is-main' : ''}" style="--d:${i * 60}ms">
        <div class="tl-date"><span class="tl-dia">${esc(t(d.dia))}</span><span class="tl-fecha">${esc(t(d.fecha))}</span></div>
        <span class="tl-dot" aria-hidden="true"></span>
        <ul class="tl-items">${items}</ul></li>`;
    }).join('');
    return `<section class="sec sec-alt" id="fin-de-semana">
      <div class="wrap wrap-narrow">
        ${head(u('kFinde'), u('hFinde'))}
        <ol class="tl">${days}</ol>
        ${anyPending ? `<p class="note rv">${u('horarioPend')}</p>` : ''}
      </div>
    </section>`;
  }

  function boda() {
    const card = (k, ic, v) => `<article class="venue rv">
        <span class="venue-ic">${ICON[ic]}</span>
        <p class="kicker">${u(k)}</p>
        <h3>${esc(v.lugar)}</h3>
        ${has(v.hora) ? `<p class="venue-time">${esc(t(v.hora))}</p>` : ''}
        <p class="venue-addr">${esc(t(v.direccion))}</p>
        <div class="venue-cta">
          <a class="btn btn-primary" href="${v.maps}" target="_blank" rel="noopener">${u('comoLlegar')}</a>
          <button class="btn btn-outline" type="button" data-map="${k}">${u('verMapa')}</button>
        </div></article>`;
    const dr = D.dress;
    return `<section class="sec" id="ceremonia">
      <div class="wrap">
        ${head(u('kBoda'), u('hBoda'))}
        <div class="venues">${card('ceremonia', 'iglesia', D.ceremonia)}${card('recepcion', 'copas', D.recepcion)}</div>
        <div class="map rv"><iframe id="mapFrame" title="${esc(D.ceremonia.lugar)}" src="${D.ceremonia.embed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <p class="route rv"><a href="${D.ruta}" target="_blank" rel="noopener">${ICON.pin}${u('ruta')}</a></p>
        <div class="dress rv">
          <p class="kicker">${u('dressK')}</p>
          <h3>${dr.titulo}</h3>
          <p class="dress-intro">${esc(t(dr.intro))}</p>
          <div class="swatches" aria-hidden="true">${dr.paleta.map(c => `<i style="background:${c}"></i>`).join('')}</div>
          <div class="dress-cols"><div><h4>${u("mujeres")}</h4><p>${esc(t(dr.mujeres))}</p></div><div><h4>${u('hombres')}</h4><p>${esc(t(dr.hombres))}</p></div></div>
        </div>
      </div>
    </section>`;
  }

  function hospedaje() {
    const cards = D.hoteles.map((h, i) => `<article class="hotel rv" style="--d:${i * 80}ms">
        <p class="kicker">${esc(t(h.zona))}</p>
        <h3>${esc(h.nombre)}</h3>
        <ul>${t(h.detalle).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        <div class="code"><span class="code-l">${u('codigo')}</span><code>${h.codigo}</code>
          <button type="button" class="code-btn" data-code="${h.codigo}" aria-label="${u('copiar')} ${h.codigo}">${ICON.copy}<span>${u('copiar')}</span></button></div>
        <a class="btn btn-primary btn-block" href="${h.url}" target="_blank" rel="noopener">${u('reservar')}</a>
      </article>`).join('');
    const faqs = D.faq.filter(f => has(f.a));
    return `<section class="sec sec-alt" id="hospedaje">
      <div class="wrap">
        ${head(u('kHosp') === u('hHosp') ? '' : u('kHosp'), u('hHosp'), `<p class="sec-sub">${u('hospIntro')}</p>`)}
        <div class="hotels">${cards}</div>
        <div class="good rv">
          <h3 class="good-h">${u('bueno')}</h3>
          <details><summary>${u('viajeros')}</summary><dl class="facts">${D.viaje.map(v => `<div><dt>${esc(t(v.t))}</dt><dd>${esc(t(v.d))}</dd></div>`).join('')}</dl></details>
          <details><summary>${u('preguntas')}</summary><dl class="facts">${faqs.map(f => `<div><dt>${esc(t(f.q))}</dt><dd>${esc(t(f.a))}</dd></div>`).join('')}</dl></details>
          <details><summary>${u('guia')}</summary><dl class="facts">${D.guia.map(g => `<div><dt>${esc(t(g.cat))}</dt><dd>${esc(t(g.items))}</dd></div>`).join('')}</dl></details>
        </div>
      </div>
    </section>`;
  }

  function rsvp() {
    const r = D.rsvp, op = `<em>(${u('opcional')})</em>`;
    return `<section class="sec sec-rsvp" id="rsvp">
      <div class="wrap wrap-form">
        ${head(u('kRsvp'), u('hRsvp'), `<p class="sec-sub">${u('rsvpIntro')}${has(r.fechaLimite) ? `<br><strong>${u('fechaLimite')} ${esc(t(r.fechaLimite))}</strong>` : ''}</p>`)}
        <form class="form rv" id="rsvpForm" novalidate>
          <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
          <div class="row2">
            <label class="f"><span>${u('nombre')}</span><input name="nombre" autocomplete="name" required></label>
            <label class="f"><span>${u('email')}</span><input name="email" type="email" autocomplete="email" required></label>
          </div>
          <fieldset class="f f-radio"><legend>${u('asistire')}</legend>
            <label><input type="radio" name="asistencia" value="si" required><span>${u('si')}</span></label>
            <label><input type="radio" name="asistencia" value="no"><span>${u('no')}</span></label>
          </fieldset>
          <div class="if-si">
            <div class="row2">
              <label class="f"><span>${u('tel')} ${op}</span><input name="telefono" type="tel" autocomplete="tel"></label>
              <label class="f"><span>${u('acompanante')} ${op}</span><input name="acompanante"></label>
            </div>
            <fieldset class="f f-check"><legend>${u('actividades')} ${op}</legend>
              ${D.actividades.map(a => `<label><input type="checkbox" name="actividades" value="${esc(t(a.n))}"><span>${esc(t(a.n))}</span></label>`).join('')}
            </fieldset>
            <label class="f"><span>${u('hospedaje')} ${op}</span><select name="hospedaje"><option value="">${u('elegir')}</option>${D.hoteles.map(h => `<option>${esc(h.nombre)}</option>`).join('')}<option>${u('otro')}</option></select></label>
            <label class="f"><span>${u('restricciones')} ${op}</span><input name="restricciones"></label>
          </div>
          <label class="f"><span>${u('mensaje')} ${op}</span><textarea name="mensaje" rows="3"></textarea></label>
          <p class="form-err" id="formErr" role="alert" hidden></p>
          <button class="btn btn-primary btn-lg" type="submit" id="sendBtn">${u('enviar')}</button>
          <div class="form-done" id="formDone" hidden tabindex="-1"></div>
          <div class="form-fb" id="formFb" hidden></div>
          <p class="form-alt">${u('o')} <a href="mailto:${r.email}">${r.email}</a></p>
        </form>
      </div>
    </section>`;
  }

  function foot() {
    return `<img class="foot-casas" src="${A('assets/v2/casas.webp')}" alt="${L === 'es' ? 'Ilustración de las casas y cúpulas de la Ciudad Amurallada de Cartagena' : 'Illustration of the houses and domes of Cartagena’s Walled City'}" width="1600" height="575" loading="lazy">
      <div class="foot-in">
        <p class="firma">${D.novia} &amp; ${D.novio}</p>
        <p class="foot-date">${D.fechaCorta} · ${D.ciudad}</p>
        <p class="foot-mail"><a href="mailto:${D.rsvp.email}">${D.rsvp.email}</a></p>
        <a class="foot-top" href="#inicio">${u('volver')} ↑</a>
      </div>`;
  }

  /* ---------------- RENDER ---------------- */
  function navHTML(cls) {
    return SECS.map(k => `<a href="#${IDS[k]}" data-sec="${IDS[k]}"${k === 'rsvp' ? ' class="nav-rsvp"' : ''}>${u('nav')[k]}</a>`).join('');
  }
  function render() {
    document.documentElement.lang = L;
    const saved = saveForm();
    $('#app').innerHTML = hero() + historia() + finde() + boda() + hospedaje() + rsvp();
    $('#foot').innerHTML = foot();
    $('#nav').innerHTML = navHTML();
    $('#menuList').innerHTML = navHTML() + `<div class="menu-foot">${D.fechaCorta} · Cartagena</div>`;
    $('#topRsvp').textContent = L === 'es' ? 'Confirmar' : 'RSVP';
    $('#skipLink').textContent = u('skip');
    $('#burger').setAttribute('aria-label', u('menu'));
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === L));
    restoreForm(saved);
    bind(); count(); reveal(); spy();
  }

  function saveForm() { const f = $('#rsvpForm'); if (!f) return null; const o = {};
    $$('input,select,textarea', f).forEach(el => { if (el.type === 'radio' || el.type === 'checkbox') { if (el.checked) o[el.name + '|' + [...f.querySelectorAll(`[name="${el.name}"]`)].indexOf(el)] = 1; } else o[el.name] = el.value; }); return o; }
  function restoreForm(o) { const f = $('#rsvpForm'); if (!f || !o) return;
    $$('input,select,textarea', f).forEach(el => { if (el.type === 'radio' || el.type === 'checkbox') { el.checked = !!o[el.name + '|' + [...f.querySelectorAll(`[name="${el.name}"]`)].indexOf(el)]; } else if (o[el.name] != null) el.value = o[el.name]; });
    toggleSi(); }
  function toggleSi() { const f = $('#rsvpForm'); const v = (f.querySelector('[name=asistencia]:checked') || {}).value; f.classList.toggle('is-no', v === 'no'); }

  let timer;
  function count() {
    clearInterval(timer); const el = $('#count'); if (!el) return;
    const end = new Date(D.fechaISO).getTime();
    const tick = () => { let s = Math.max(0, Math.floor((end - Date.now()) / 1000));
      if (!s) { el.hidden = true; return; }
      const d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60);
      el.innerHTML = [[d, u('dias')], [h, u('horas')], [m, u('min')]].map(([n, l]) => `<span><b>${n}</b>${l}</span>`).join('<i aria-hidden="true"></i>'); };
    tick(); timer = setInterval(tick, 30000);
  }

  let io;
  function reveal() {
    if (io) io.disconnect();
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { $$('.rv').forEach(e => e.classList.add('in')); return; }
    io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px' });
    $$('.rv').forEach(e => io.observe(e));
  }

  let sio;
  function spy() {
    if (sio) sio.disconnect();
    sio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) $$('[data-sec]').forEach(a => a.classList.toggle('on', a.dataset.sec === e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
    Object.values(IDS).forEach(id => { const s = document.getElementById(id); s && sio.observe(s); });
  }

  function msgText(fd) {
    const lines = [`${u('nombre')}: ${fd.nombre}`, `${u('email')}: ${fd.email}`, `${u('asistire')} ${fd.asistencia === 'si' ? u('si') : u('no')}`];
    if (fd.asistencia === 'si') {
      if (fd.telefono) lines.push(`${u('tel')}: ${fd.telefono}`);
      if (fd.acompanante) lines.push(`${u('acompanante').replace(/ \(.*\)/, '')}: ${fd.acompanante}`);
      if (fd.actividades) lines.push(`${u('actividades')} ${fd.actividades}`);
      if (fd.hospedaje) lines.push(`${u('hospedaje')} ${fd.hospedaje}`);
      if (fd.restricciones) lines.push(`${u('restricciones')}: ${fd.restricciones}`);
    }
    if (fd.mensaje) lines.push(`${u('mensaje')}: ${fd.mensaje}`);
    return lines.join('\n');
  }

  function bind() {
    $$('[data-map]').forEach(b => b.onclick = () => {
      const v = b.dataset.map === 'ceremonia' ? D.ceremonia : D.recepcion; const fr = $('#mapFrame');
      fr.src = v.embed; fr.title = v.lugar; $('.map').scrollIntoView({ behavior: 'smooth', block: 'center' }); });
    $$('.code-btn').forEach(b => b.onclick = async () => {
      const c = b.dataset.code; let ok = false;
      try { await navigator.clipboard.writeText(c); ok = true; } catch (e) {
        const ta = document.createElement('textarea'); ta.value = c; document.body.appendChild(ta); ta.select(); try { ok = document.execCommand('copy'); } catch (_) {} ta.remove(); }
      b.classList.add('ok'); b.querySelector('span').textContent = u('copiado');
      setTimeout(() => { b.classList.remove('ok'); b.querySelector('span').textContent = u('copiar'); }, 2200); });
    const f = $('#rsvpForm');
    $$('[name=asistencia]', f).forEach(r => r.onchange = toggleSi);
    f.onsubmit = async e => {
      e.preventDefault();
      const err = $('#formErr'), btn = $('#sendBtn'), done = $('#formDone'), fb = $('#formFb');
      const fd = Object.fromEntries(new FormData(f).entries());
      fd.actividades = new FormData(f).getAll('actividades').join(', ');
      if (fd._honey) return;
      if (!fd.nombre.trim() || !/^\S+@\S+\.\S+$/.test(fd.email || '') || !fd.asistencia) { err.textContent = u('obligatorio'); err.hidden = false; return; }
      err.hidden = true; btn.disabled = true; btn.textContent = u('enviando'); fb.hidden = true;
      const payload = { Nombre: fd.nombre, email: fd.email, Asiste: fd.asistencia === 'si' ? 'Sí' : 'No', Telefono: fd.telefono || '', Acompanante: fd.acompanante || '', Actividades: fd.actividades || '', Hospedaje: fd.hospedaje || '', Restricciones: fd.restricciones || '', Mensaje: fd.mensaje || '', Idioma: L.toUpperCase(),
        _subject: `${u('asunto')} · ${fd.nombre} · ${fd.asistencia === 'si' ? 'Sí' : 'No'}`, _template: 'table', _captcha: 'false' };
      let ok = false;
      try {
        const res = await fetch(D.rsvp.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
        const j = await res.json(); ok = res.ok && String(j.success) === 'true';
      } catch (_) { ok = false; }
      btn.disabled = false; btn.textContent = u('enviar');
      if (ok) {
        f.classList.add('sent'); done.innerHTML = `<p class="firma">${D.novia} &amp; ${D.novio}</p><p>${fd.asistencia === 'si' ? u('gracias') : u('graciasNo')}</p>`; done.hidden = false; done.focus();
      } else {
        const body = msgText(fd), href = `mailto:${D.rsvp.email}?subject=${encodeURIComponent(u('asunto') + ' · ' + fd.nombre)}&body=${encodeURIComponent(body)}`;
        fb.innerHTML = `<p>${u('fallback')}</p><div class="fb-cta"><a class="btn btn-primary" href="${href}">${u('abrirCorreo')}</a><button type="button" class="btn btn-outline" id="copyMsg">${u('copiarMsj')}</button></div>`;
        fb.hidden = false;
        $('#copyMsg').onclick = async ev => { try { await navigator.clipboard.writeText(body); ev.target.textContent = u('copiado'); } catch (_) {} };
      }
    };
  }

  /* ---------------- GLOBAL ---------------- */
  const top = $('#top'), burger = $('#burger'), menu = $('#menu');
  const onScroll = () => top.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  function setMenu(open) { burger.setAttribute('aria-expanded', open); document.body.classList.toggle('menu-open', open);
    if (open) { menu.hidden = false; requestAnimationFrame(() => menu.classList.add('open')); } else { menu.classList.remove('open'); setTimeout(() => { if (!menu.classList.contains('open')) menu.hidden = true; }, 300); } }
  burger.onclick = () => setMenu(burger.getAttribute('aria-expanded') !== 'true');
  menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  $$('.lang button').forEach(b => b.onclick = () => { L = b.dataset.lang; localStorage.setItem('ww-lang', L); render(); });
  render(); onScroll();
})();
