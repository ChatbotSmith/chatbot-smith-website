# How to Edit This Website
A plain-English guide for making common changes.

## The Golden Rules
Before you touch anything:
1. Make a copy of the file you're about to edit and rename it something like index-backup.html. If you break something, you can restore it.
2. Open the website in your browser before and after every change to check your work. Double-click index.html to open it.
3. Save the file (Ctrl+S or Cmd+S on Mac) then refresh the browser to see your changes.

---

## How to Find Things to Edit Quickly

Every piece of text you'll commonly want to update has a comment next to it that says:
<!-- EDIT ME -->

To find all of them at once:
- In VS Code: press Ctrl+F (or Cmd+F on Mac) and search for: EDIT ME
- That will highlight every line you're likely to want to change.

---

## How to Change Text

All the words on the website live between HTML tags like:
  <p>Your text goes here</p>
  <h1>Your headline here</h1>

To change any text:
1. Open the HTML file in VS Code
2. Press Ctrl+F and search for a few words of the text you want to change
3. Click that spot and change the words
4. Do NOT touch the < > tags around the words — only change the words themselves
5. Save and refresh

---

## How to Change Colors

Open css/styles.css. At the very top (after the Google Fonts import), you'll see a block called :root { }

It looks like this:
  :root {
    --forge-black: #1C1C1C;
    --mustard: #C9952A;
    --warm-pink: #D4847A;
    ...
  }

Each line is a color used somewhere on the site. The part after the colon (#C9952A) is a hex code — a six-digit code that represents a color. Change it here and it updates everywhere.

You can find hex codes for any color at: coolors.co or htmlcolorcodes.com

---

## How to Change Prices

Open pricing.html. Press Ctrl+F and search for: $X
Every price placeholder is marked with an adjacent <!-- EDIT ME --> comment.
Replace X with your real price number. Done.

---

## How to Change Your Email or Social Links

The footer is defined in ONE place: js/footer.js
Open that file and search for: EDIT ME
You'll find the email and social link placeholders. Change them there and every page updates automatically.

---

## How to Update the Nav Links

The nav is also in ONE place: js/nav.js
If you add a new page, open nav.js, find the list of links, and add a new line following the same pattern as the existing links.

---

## How to Add a New FAQ Question

Open how-it-works.html. Find this comment:
  <!-- FAQ ITEM TEMPLATE — copy this block to add a new question -->

Copy the entire block from <div class="faq__item"> to its closing </div>
Paste it after the last FAQ item and change the question and answer text.
No JavaScript changes needed — the accordion handles new items automatically.

---

## How to Add Your Photo (About Page)

Open about.html. Find this comment:
  <!-- EDIT ME: Replace this div with <img src="images/your-photo.jpg" ...> -->

Replace the placeholder div with:
  <img src="images/your-photo.jpg" alt="[Your Name], Founder of Chatbot Smith" style="width:160px;height:160px;border-radius:50%;object-fit:cover;">

Put your photo file in a folder called images/ in the project root. Name it your-photo.jpg (or update the src="" to match whatever you name it).

---

## How to Connect a Real Contact Form

Open book-a-call.html. Find the comment that says:
  <!-- TODO: Connect this form to your backend, Formspree, or Calendly. -->

The easiest free option is Formspree (formspree.io):
1. Create a free Formspree account
2. Create a new form and copy your endpoint URL (looks like: https://formspree.io/f/xxxxxxxx)
3. Change the opening <form> tag to: <form action="https://formspree.io/f/xxxxxxxx" method="POST">
4. Open js/main.js and find the comment that says "BOOK A CALL — FORM SUBMIT HANDLER"
5. Delete that entire block — Formspree handles the submission instead

Formspree will email you every time someone submits the form.

---

## Common Mistakes to Avoid

- Do not delete a > or < by accident. If something looks broken, undo (Ctrl+Z) and try again.
- Do not change a class="name" attribute unless you also update the matching rule in css/styles.css.
- Do not edit css/styles.css to change text — CSS controls appearance, not words. Text lives in the HTML files.
- Numbers like #C9952A are color codes, not errors. Only change them intentionally.

---

## Glossary

| Term | What it means |
|------|--------------|
| <tag> | An HTML instruction that wraps content. Open: <p>. Close: </p> |
| class="name" | A label that connects an element to its CSS styling |
| href="page.html" | The destination of a link |
| src="file.jpg" | The source file for an image or script |
| #RRGGBB | A hex color code — change this to change a color |
| px | Pixels — a unit of size (e.g. font-size: 16px) |
| /* comment */ | A note inside a CSS file — ignored by the browser |
| <!-- comment --> | A note inside an HTML file — ignored by the browser |
| var(--name) | A CSS variable — looks up the value from :root |
| data-active-page | An attribute on <body> that tells nav.js which nav link to highlight |
