/********************
 * NAVIGATION
 **********************/
const mainNavElements = document.querySelectorAll(".main-nav-item a");

const getNavElementClck = (element) => {
  const elementVal = element.innerHTML.toLowerCase();
  return document.getElementsByClassName(`${elementVal}`)[0];
};

const toggleVisible = (element) => {
  const subMenuBox = getNavElementClck(element);

  if (subMenuBox.className.includes("nav-visible")) {
    subMenuBox.classList.remove("nav-visible");
  } else {
    subMenuBox.classList.add("nav-visible");
  }
};

const removeVisible = (activeElement) => {
  const activeEl = getNavElementClck(activeElement);
  const visibleEl = document.querySelector(".nav-visible");

  if (visibleEl && activeEl != visibleEl)
    visibleEl.classList.remove("nav-visible");
};

const renderNavBox = (element) => {
  const positionNavBox = document
    .querySelector(".main-nav")
    .getBoundingClientRect().left;

  const subMenuBoxUl =
    getNavElementClck(element).querySelector(".sub-main-nav-list");
  const x = positionNavBox + "px";
  console.log(x, subMenuBoxUl);
  subMenuBoxUl.style.paddingLeft = x;
};

const mainMenuHandler = (element) => {
  renderNavBox(element);
  removeVisible(element);
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
