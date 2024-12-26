document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".header__navigation");
  const nextButton = document.querySelector(".header__nav-next");
  const containerNavigation = document.querySelector(".container__navigation");

  const scrollAmount = nav.offsetWidth / 2;

  const handleScroll = (scrollDirection) => {
    nav.scrollLeft += scrollDirection * scrollAmount;
  };
  nextButton.addEventListener("click", () => {
    handleScroll(1);
  });
  nextButton.addEventListener("mouseover", () => {
    handleScroll(1);
  });

  containerNavigation.addEventListener("wheel", (event) => {
    event.preventDefault();
    nav.scrollLeft += event.deltaY;
  });
});
