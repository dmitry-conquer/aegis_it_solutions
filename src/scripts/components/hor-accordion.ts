const initHorAccordion = () => {
  const items = document.querySelectorAll(".hor-accordion__item");

  items.forEach(item => {
    if (!item) return;
    item.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-active");
      items.forEach(i => i.classList.remove("is-active"));
      if (!isOpen) {
        item.classList.add("is-active");
      }
    });
  });
};

export default initHorAccordion;
