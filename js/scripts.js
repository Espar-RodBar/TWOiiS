/********************
 * NAVIGATION
 **********************/
const mainNavElements = document.querySelectorAll(".main-nav-item a");

const toggleVisible = (element) => {
  console.log(element);
  const elementVal = element.innerHTML.toLowerCase();
  const subMenuBox = document.querySelector(`.${elementVal}`);
  if (subMenuBox.classList.contains("nav-visible")) {
    subMenuBox.classList.remove("nav-visible");
  } else {
    subMenuBox.classList.add("nav-visible");
  }
};

const removeVisible = () => {
  const visibleEl = document.querySelector(".nav-visible");
  if (visibleEl) visibleEl.classList.remove("nav-visible");
};

const mainMenuHandler = (element) => {
  removeVisible();
  toggleVisible(element);
};

mainNavElements.forEach((element) => {
  const menuEl = element;
  menuEl.addEventListener("click", mainMenuHandler.bind(null, menuEl));
});

///////////////////////////////////////////////////////////
// Sticky navigation
const sectionTargetEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px", //same height sticky nav
  }
);

obs.observe(sectionTargetEl);
