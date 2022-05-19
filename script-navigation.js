const navigationButton = document.querySelector(".navigation__checkbox");
// const allLinks = document.querySelectorAll(
//   "a.navigation__link:link ",
//   function () {}
// );

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    console.log(href, "printing my href");

    if (
      href !== "#popup" &&
      href !== "https://luzedith-curriculum.netlify.app//"
    ) {
      e.preventDefault();
      navigationButton.checked = false;

      if (href === "#")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
