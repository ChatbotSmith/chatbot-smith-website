// =============================================
// HOMEPAGE DEMO TABS
// Switches the demo iframe to a different tier when a tab is clicked.
// To add a new tier tab: add the button in HTML and a matching case below.
// =============================================

// Wait until the page is fully loaded before running
document.addEventListener('DOMContentLoaded', function() {

  // Get all the tab buttons and the iframe
  var demoTabs  = document.querySelectorAll('.demo-tab');
  var demoIframe = document.getElementById('demo-iframe');

  // Only run this code if we're on a page that has the demo section
  if (!demoTabs.length || !demoIframe) return;

  // When a tab is clicked, switch the iframe to that tier
  demoTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {

      // Remove the active style from all tabs
      demoTabs.forEach(function(t) {
        t.classList.remove('demo-tab--active');
        t.setAttribute('aria-selected', 'false');
      });

      // Add the active style to the clicked tab
      tab.classList.add('demo-tab--active');
      tab.setAttribute('aria-selected', 'true');

      // Read which tier number this tab is for
      var tierNumber = tab.getAttribute('data-tier');

      // Update the iframe source to show that tier
      demoIframe.src = 'demos/salon/index.html?tier=' + tierNumber;
    });
  });

});

// =============================================
// DEMO PAGE TIER TABS
// Same logic as homepage tabs, but also toggles the tier description text.
// =============================================
document.addEventListener('DOMContentLoaded', function() {

  // Get all tabs that belong to the full demo page (not the homepage preview)
  var demoPageTabs   = document.querySelectorAll('.demo-tab[data-page="demo"]');
  var demoPageIframe = document.getElementById('demo-page-iframe');

  if (!demoPageTabs.length || !demoPageIframe) return;

  demoPageTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {

      // Deactivate all tabs
      demoPageTabs.forEach(function(t) {
        t.classList.remove('demo-tab--active');
        t.setAttribute('aria-selected', 'false');
      });

      // Activate the clicked tab
      tab.classList.add('demo-tab--active');
      tab.setAttribute('aria-selected', 'true');

      var tierNumber = tab.getAttribute('data-tier');

      // Update the iframe
      demoPageIframe.src = 'demos/salon/index.html?tier=' + tierNumber;

      // Hide all tier descriptions, then show the one for this tier
      document.querySelectorAll('.demo-page__tab-desc').forEach(function(desc) {
        desc.style.display = 'none';
      });
      var activeDesc = document.getElementById('tier-desc-' + tierNumber);
      if (activeDesc) activeDesc.style.display = 'block';

    });
  });

});

// =============================================
// FAQ ACCORDION
// Makes FAQ questions expand and collapse on click.
// Only one answer is open at a time.
// To add a new FAQ: copy the .faq__item block in the HTML — no JS changes needed.
// =============================================
document.addEventListener('DOMContentLoaded', function() {

  var faqQuestions = document.querySelectorAll('.faq__question');

  if (!faqQuestions.length) return;

  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {

      var isOpen    = question.getAttribute('aria-expanded') === 'true';
      var answer    = question.nextElementSibling;

      // Close all other open answers first
      faqQuestions.forEach(function(otherQ) {
        otherQ.setAttribute('aria-expanded', 'false');
        otherQ.nextElementSibling.hidden = true;
      });

      // If this one was closed, open it; if it was open, leave it closed
      if (!isOpen) {
        question.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }

    });
  });

});

// =============================================
// BOOK A CALL — FORM SUBMIT HANDLER
// Shows a success message when the form is submitted.
// NOTE: This does NOT actually send the form data anywhere yet.
// To make it send emails, connect to Formspree (see the HTML comment in book-a-call.html).
// =============================================
document.addEventListener('DOMContentLoaded', function() {

  var bookCallForm    = document.getElementById('book-call-form');
  var bookCallSuccess = document.getElementById('book-call-success');

  if (!bookCallForm) return;

  bookCallForm.addEventListener('submit', function(event) {
    // Stop the browser from reloading the page on submit
    event.preventDefault();

    // Hide the form and show the success message
    bookCallForm.hidden = true;
    bookCallSuccess.hidden = false;
  });

});
// =============================================
// CHATBOT SMITH SITE CHATBOT
// Loads the live AI chatbot on every page.
// =============================================
(function() {
  var script = document.createElement('script');
  script.src = 'https://chatbot-smith-backend-production.up.railway.app';
  script.setAttribute('data-client-id', 'botsmith');
  script.setAttribute('data-api-key', '7c2be5dc15eeb1db03d438c924344df08b3814b06afecc89d44b10341e935db7');
  script.async = true;
  document.head.appendChild(script);
})();
