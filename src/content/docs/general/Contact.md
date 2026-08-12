---
author: GeorgeT
title: Contact
description: N&P Contact Form
tags:
  - contact
created: 2026-07-07
modified: 2026-08-12
---

## Contact Form
Use the form below to contact us.

---

<!-- Read the Formbutton docs at formspree.io/formbutton/docs. See more examples at codepen.io/formspree -->
<script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
<script>
  /* paste this line in verbatim */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/mgawkjle",
    title: "How can we help?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        width: "100%",
        box-sizing: "border-box", /* Ensures padding/border are included in the 100% width */
        min-height: "100px", /* Sets a consistent starting height */
        resize: "vertical", /* Allows users to expand height if needed, but keeps width fixed */
        placeholder: "What's on your mind?",
        font-size: "16px" /* Prevents iOS zoom on focus */
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "gray"
      },
      button: {
        backgroundColor: "gray"
      }
    }
  });
</script>

---

## Our Details:
Email: georget@posteo.com\
GitHub: https://github.com/glorydazer63