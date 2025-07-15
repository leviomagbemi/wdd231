const navButton = document.querySelector("#nav-button");
const navBar = document.querySelector("#nav-bar");
const navItems = navBar.querySelectorAll("ul li");
const currentNavItem = navBar.querySelector("ul li.current");

let previousedClickedItem;

navButton.addEventListener("click", () => {
  navButton.classList.toggle("show");
  navBar.classList.toggle("show");
});

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

