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
     3 · react to viewport changes
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
