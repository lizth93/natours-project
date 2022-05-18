const navigationButton = document.querySelector(".navigation__checkbox");
const allLinks = document.querySelectorAll(
  "a.navigation__link:link ",
  function () {}
);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navigationButton.checked = false;

    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

console.log(allLinks);
