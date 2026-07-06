// =============================================
// NAV COMPONENT
// To update nav links: edit the navHTML string below.
// One change here updates every page automatically.
// =============================================

const navHTML = `
<nav id="site-nav">
  <div class="nav-inner">

    <!-- ===== WORDMARK ===== -->
    <a href="index.html" class="nav-wordmark">
      <span class="wordmark-bot">Chatbot</span><span class="wordmark-smith">Smith</span>
    </a>

    <!-- ===== NAV LINKS ===== -->
    <ul class="nav-links">
      <li><a href="index.html" data-nav-key="home">Home</a></li>
      <li><a href="pricing.html" data-nav-key="pricing">Pricing</a></li>
      <li><a href="demo.html" data-nav-key="demo">Demo</a></li>
      <li><a href="how-it-works.html" data-nav-key="how-it-works">How It Works</a></li>
    </ul>

    <!-- ===== BOOK A CALL BUTTON ===== -->
    <a href="book-a-call.html" class="btn-primary nav-cta">Book a Call</a>

    <!-- ===== HAMBURGER (mobile only) ===== -->
    <button class="nav-hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>

  </div>
</nav>
`;

// ===== INJECT NAV ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.getElementById('nav-placeholder');
  if (!placeholder) return;

  placeholder.innerHTML = navHTML;

  // ===== SET ACTIVE LINK BASED ON data-active-page =====
  const activePage = document.body.getAttribute('data-active-page');
  if (activePage) {
    const activeLink = placeholder.querySelector('[data-nav-key="' + activePage + '"]');
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  // ===== HAMBURGER TOGGLE =====
  const nav = placeholder.querySelector('#site-nav');
  const hamburger = placeholder.querySelector('.nav-hamburger');
  if (nav && hamburger) {
    hamburger.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('nav-open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});
