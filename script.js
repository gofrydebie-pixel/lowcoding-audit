// ---- CONFIG ----
const BOOKING_URL = "https://cal.com/dimitri-vantorre/operational-stack-audit";
const CONTACT_EMAIL = "contact@dimitrivantorre.com";

document.getElementById("cta-top").href = BOOKING_URL;
document.getElementById("cta-bottom").href = BOOKING_URL;
document.getElementById("contact-link").href =
  "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Build work: defined scope");
