/********************
 * NAVIGATION
 **********************/
const mainNavElements = document.querySelectorAll(".main-nav-item div");

const toggleNavHeader = () => {
  const header = document.querySelector(".header");
  const isNavVisible = document.querySelector(".nav-visible");
  if (!header.classList.contains("sub-nav-active")) {
    header.classList.add("sub-nav-active");
  } else if (!isNavVisible) {
    header.classList.remove("sub-nav-active");
  }
};

const getNavElementDiv = (element) => {
  const elementVal = element.innerHTML.toLowerCase();
  return document.getElementsByClassName(`${elementVal}`)[0];
};

const toggleVisible = (element) => {
  const subMenuBox = getNavElementDiv(element);

  if (subMenuBox.className.includes("nav-visible")) {
    subMenuBox.classList.remove("nav-visible");
  } else {
    subMenuBox.classList.add("nav-visible");
  }
};

const removeVisible = (activeElement) => {
  const activeEl = getNavElementDiv(activeElement);
  const visibleEl = document.querySelector(".nav-visible");

  if (visibleEl && activeEl != visibleEl)
    visibleEl.classList.remove("nav-visible");
};

const renderNavBox = (element) => {
  const positionNavBox = document
    .querySelector(".main-nav")
    .getBoundingClientRect().left;

  const subMenuBoxUl =
    getNavElementDiv(element).querySelector(".sub-main-nav-list");

  const x = positionNavBox + "px";
  subMenuBoxUl.style.marginLeft = x;
};

const mainMenuHandler = (element) => {
  renderNavBox(element);
  removeVisible(element);
  toggleVisible(element);
  toggleNavHeader();
};

mainNavElements.forEach((element) => {
  const menuEl = element;
  menuEl.addEventListener("click", mainMenuHandler.bind(null, menuEl));
});

///////////////////////////////////////////////////////////
// Sticky navigation
//////////////////////////////////////////
const sectionTargetEl = document.querySelector(".hero-section");

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
