// ONE TAP ONE LIFE - JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

// AUTOMATIC COPYRIGHT YEAR
const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}

// MOBILE NAVIGATION
document.querySelectorAll("#mainNav .nav-link, #mainNav .btn")
.forEach(function (link) {

link.addEventListener("click", function () {

const menu = document.getElementById("mainNav");

if (menu && menu.classList.contains("show")) {
bootstrap.Collapse.getOrCreateInstance(menu).hide();
}

});

});

// BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

if (backToTop) {
backToTop.classList.toggle("show", window.scrollY > 450);
}

});

if (backToTop) {
backToTop.addEventListener("click", function () {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});
}

// CONTACT FORM
// Replace this with the verified official email address.
const ORGANIZATION_EMAIL =
"REPLACE-WITH-VERIFIED-EMAIL@example.com";

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form) {

form.addEventListener("submit", function (event) {

event.preventDefault();

const data = new FormData(form);

const name = data.get("name").trim();
const email = data.get("email").trim();
const interest = data.get("interest");
const message = data.get("message").trim();

if (ORGANIZATION_EMAIL.startsWith("REPLACE-")) {

status.textContent =
"Please add the organization's verified email address in js/script.js before using this form.";

return;
}

const subject = encodeURIComponent(
"One Tap One Life inquiry: " + interest
);

const body = encodeURIComponent(
"Name: " + name +
"\nEmail: " + email +
"\nInterest: " + interest +
"\n\nMessage:\n" + message
);

window.location.href =
"mailto:" + ORGANIZATION_EMAIL +
"?subject=" + subject +
"&body=" + body;

status.textContent =
"Your email app should open with your inquiry prepared.";

});

}

});