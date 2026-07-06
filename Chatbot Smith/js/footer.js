// =============================================
// FOOTER COMPONENT
// To update footer content: edit the footerHTML string below.
// One change here updates every page automatically.
// =============================================

const footerHTML = `
<footer id="site-footer">
  <div class="container footer-inner">

    <!-- ===== ROW 1 — THREE COLUMNS ===== -->
    <div class="footer-columns">

      <!-- ===== LEFT: WORDMARK + TAGLINE ===== -->
      <div class="footer-col footer-col-left">
        <a href="index.html" class="footer-wordmark">
          <span class="wordmark-bot">Chatbot</span><span class="wordmark-smith">Smith</span>
        </a>
        <p class="footer-tagline">Built for small businesses.</p> <!-- EDIT ME -->
      </div>

      <!-- ===== CENTER: NAV LINKS ===== -->
      <div class="footer-col footer-col-center">
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="how-it-works.html">How It Works</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="demo.html">Demo</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="book-a-call.html">Book a Call</a></li>
        </ul>
      </div>

      <!-- ===== RIGHT: GET IN TOUCH ===== -->
      <div class="footer-col footer-col-right">
        <p class="label-text footer-touch-label">Get in Touch</p>
        <a href="mailto:hello@chatbotsmith.com" class="footer-email">hello@chatbotsmith.com</a> <!-- EDIT ME -->
        <div class="footer-social">
          <a href="#" target="_blank" rel="noopener">IG</a> <!-- EDIT ME: replace with real profile URL -->
          <a href="#" target="_blank" rel="noopener">LI</a> <!-- EDIT ME: replace with real profile URL -->
        </div>
      </div>

    </div>

    <!-- ===== ROW 2 — DIVIDER + BOTTOM BAR ===== -->
    <div class="footer-divider"></div>
    <div class="footer-bottom">
      <p class="footer-copyright">&copy; 2026 Chatbot Smith. All rights reserved.</p> <!-- EDIT ME: update year -->
      <p class="footer-legal">
        <a href="#placeholder">Privacy Policy</a> &middot; <a href="#placeholder">Terms of Service</a>
      </p>
    </div>

  </div>
</footer>
`;

// ===== INJECT FOOTER ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  placeholder.innerHTML = footerHTML;
});
