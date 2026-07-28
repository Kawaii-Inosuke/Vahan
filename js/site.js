/* =========================================================================
   Vahan — shared site behaviour
     · keeps the 1920 canvas scaled to the viewport between 1024 and 1919 px
     · drives the mobile nav drawer and its accordions
   ========================================================================= */
(function () {
  'use strict';

  var MOBILE = 1024;              // below this the layout reflows (see responsive.css)
  var CANVAS = 1920;              // the Figma canvas the pages are authored against

  /* ---------------------------------------------------------------------
     1 · proportional canvas scale
     `100vw` includes the classic scrollbar, which would push the canvas a
     few pixels wider than the viewport. clientWidth does not, so we hand
     the exact ratio to CSS as --z.
     --------------------------------------------------------------------- */
  var page = document.querySelector('.page');

  function setScale() {
    if (!page) return;
    var w = document.documentElement.clientWidth;
    if (w >= MOBILE && w < CANVAS) {
      page.style.setProperty('--z', w / CANVAS);
    } else {
      page.style.removeProperty('--z');
    }
  }

  /* ---------------------------------------------------------------------
     2 · mobile nav drawer
     --------------------------------------------------------------------- */
  var nav    = document.querySelector('.nav');
  var burger = document.querySelector('.nav-burger');
  var scrim  = document.querySelector('.nav-scrim');

  function closeMenu() {
    if (!nav) return;
    nav.classList.remove('is-open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-locked');
    if (scrim) {
      scrim.classList.remove('is-visible');
      scrim.hidden = true;
    }
    nav.querySelectorAll('.nav-item.is-open').forEach(function (item) {
      item.classList.remove('is-open');
    });
  }

  function openMenu() {
    if (!nav) return;
    nav.classList.add('is-open');
    if (burger) burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-locked');
    if (scrim) {
      scrim.hidden = false;
      // next frame, so the opacity transition has a starting value to run from
      requestAnimationFrame(function () { scrim.classList.add('is-visible'); });
    }
  }

  if (burger) {
    burger.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) closeMenu(); else openMenu();
    });
  }

  if (scrim) scrim.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* dropdowns are hover menus on desktop and tap accordions in the drawer */
  document.querySelectorAll('.nav-item.has-dropdown').forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (document.documentElement.clientWidth >= MOBILE) return;
      // let the actual links through; only the row itself toggles
      if (e.target.closest('.dropdown a')) { closeMenu(); return; }
      e.preventDefault();
      var wasOpen = item.classList.contains('is-open');
      item.parentNode.querySelectorAll('.nav-item.is-open').forEach(function (o) {
        o.classList.remove('is-open');
      });
      if (!wasOpen) item.classList.add('is-open');
    });
  });

  /* a plain link in the drawer just navigates — but close first so the
     back button never returns to a page with the drawer stuck open */
  document.querySelectorAll('.nav-links a.nav-item').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ---------------------------------------------------------------------
     3 · video lightbox
     Any link to YouTube — and anything carrying data-video="<id>" — plays
     in-page instead of navigating away. The overlay is appended to <body>
     rather than .page: between 1024 and 1919 px the canvas carries `zoom`,
     which would scale a fixed-position descendant along with it.
     --------------------------------------------------------------------- */
  var vbox = null, vframe = null, vlastFocus = null;

  /* watch?v=ID · youtu.be/ID · /embed/ID · /shorts/ID */
  function videoId(url) {
    if (!url) return null;
    var m = url.match(/[?&]v=([\w-]{6,})/) ||
            url.match(/youtu\.be\/([\w-]{6,})/) ||
            url.match(/\/(?:embed|shorts)\/([\w-]{6,})/);
    return m ? m[1] : null;
  }

  function buildBox() {
    vbox = document.createElement('div');
    vbox.className = 'vbox';
    vbox.setAttribute('role', 'dialog');
    vbox.setAttribute('aria-modal', 'true');
    vbox.setAttribute('aria-label', 'Video player');
    vbox.hidden = true;

    vframe = document.createElement('div');
    vframe.className = 'vbox-frame';

    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'vbox-close';
    close.setAttribute('aria-label', 'Close video');
    close.innerHTML = '&times;';

    vframe.appendChild(close);
    vbox.appendChild(vframe);
    document.body.appendChild(vbox);

    close.addEventListener('click', closeVideo);
    /* backdrop only — clicks inside the frame must reach the player */
    vbox.addEventListener('click', function (e) {
      if (e.target === vbox) closeVideo();
    });
  }

  /* YouTube's embed refuses to configure the player without a real HTTP(S)
     referrer, so a page opened straight off disk gets "Error 153". Nothing in
     the page can satisfy that check — say so plainly instead of handing the
     visitor an opaque player error. */
  var CAN_EMBED = location.protocol === 'http:' || location.protocol === 'https:';

  function embedUrl(id) {
    var url = 'https://www.youtube-nocookie.com/embed/' + id +
              '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
    /* YouTube recommends pinning the host that is allowed to frame the player */
    return url + '&origin=' + encodeURIComponent(location.origin);
  }

  function openVideo(id) {
    if (!vbox) buildBox();

    vlastFocus = document.activeElement;

    var old = vframe.querySelector('iframe, .vbox-note');
    if (old) old.remove();

    if (CAN_EMBED) {
      var iframe = document.createElement('iframe');
      iframe.src = embedUrl(id);
      iframe.title = 'Vahan video';
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      vframe.appendChild(iframe);
    } else {
      var note = document.createElement('div');
      note.className = 'vbox-note';
      note.innerHTML =
        '<p>YouTube blocks in-page playback when a page is opened directly from a ' +
        'file. Serve the site over HTTP and this player works.</p>' +
        '<code>python3 -m http.server 8000</code>' +
        '<a class="vbox-note-btn" href="https://www.youtube.com/watch?v=' + id + '" ' +
        'target="_blank" rel="noopener">Watch on YouTube</a>';
      vframe.appendChild(note);
    }

    vbox.hidden = false;
    document.body.classList.add('nav-locked');
    requestAnimationFrame(function () { vbox.classList.add('is-open'); });
    vframe.querySelector('.vbox-close').focus();
  }

  function closeVideo() {
    if (!vbox || vbox.hidden) return;

    vbox.classList.remove('is-open');
    document.body.classList.remove('nav-locked');

    /* drop the iframe so the audio actually stops */
    window.setTimeout(function () {
      var played = vframe.querySelector('iframe, .vbox-note');
      if (played) played.remove();
      vbox.hidden = true;
    }, 300);

    if (vlastFocus && vlastFocus.focus) vlastFocus.focus();
    vlastFocus = null;
  }

  /* delegated, so cards rendered later (filters, paging) are covered too */
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-video], a[href*="youtube.com"], a[href*="youtu.be"]');
    if (!trigger) return;

    var id = trigger.dataset.video || videoId(trigger.getAttribute('href'));
    if (!id) return;

    e.preventDefault();
    openVideo(id);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeVideo();
  });

  /* a data-video element that isn't already a link or button still needs to
     answer the keyboard */
  document.querySelectorAll('[data-video]').forEach(function (el) {
    var tag = el.tagName.toLowerCase();
    if (tag === 'a' || tag === 'button') return;

    el.setAttribute('role', 'button');
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openVideo(el.dataset.video);
      }
    });
  });

  /* ---------------------------------------------------------------------
     4 · react to viewport changes
     --------------------------------------------------------------------- */
  var raf = null;
  function onResize() {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(function () {
      setScale();
      if (document.documentElement.clientWidth >= MOBILE) closeMenu();
    });
  }

  setScale();
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onResize);
})();
