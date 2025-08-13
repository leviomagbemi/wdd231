const navbar = document.querySelector("#navbar");
const navButton = document.querySelector("#nav-button");
const navItems = navbar.querySelectorAll("ul li");
const currentNavItem = navbar.querySelector("ul li.current");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("show");
  navbar.classList.toggle("show");
})

let previousedClickedItem;

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // remove current class from default item
    currentNavItem.classList.remove("current");

    // Remove current class from previous clicked item if it exists
    if(previousedClickedItem)
      previousedClickedItem.classList.remove("current");

    // Add current class to clicked item
    item.classList.add("current");

    // Set previousClickedItem to item
    previousedClickedItem = item;

  })
})
