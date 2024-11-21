addEventListener("DOMContentLoaded", () => {
    var dropdownMenus = document.getElementsByClassName("dropdown");
    for (var menu of dropdownMenus) {
        var selectedValue = menu.querySelector(".dropdown__value");
        var list = menu.querySelector(".dropdown__list");

        var listClickHandler = function () {
            list.className = "dropdown__list dropdown__list_active";
        }

        var listLinkClickHandler = function () {
            selectedValue.textContent = this.textContent;
            list.className = "dropdown__list";
        }

        selectedValue.addEventListener("click", listClickHandler);
        for (var link of list.querySelectorAll(".dropdown__link")) {
            link.href = "javascript:void(0)";
            link.addEventListener("click", listLinkClickHandler);
        }
    }
})