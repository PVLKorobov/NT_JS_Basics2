addEventListener("DOMContentLoaded", () => {
    let dropdownMenus = document.getElementsByClassName("dropdown");
    for (let menu of dropdownMenus) {
        let selectedValue = menu.querySelector(".dropdown__value");
        let list = menu.querySelector(".dropdown__list");

        let listClickHandler = function () {
            list.className = "dropdown__list dropdown__list_active";
        }

        let listLinkClickHandler = function () {
            selectedValue.textContent = this.textContent;
            list.className = "dropdown__list";
        }

        selectedValue.addEventListener("click", listClickHandler);
        for (let link of list.querySelectorAll(".dropdown__link")) {
            link.href = "javascript:void(0)";
            link.addEventListener("click", listLinkClickHandler);
        }
    }
})