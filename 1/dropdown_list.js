addEventListener("DOMContentLoaded", () => {
    var dropdownMenus = document.getElementsByClassName("dropdown");
    for (var menu of dropdownMenus) {
        var menuChildren = menu.children;
        var selectedValue = menuChildren[0];
        var list = menuChildren[1];

        var listClickHandler = function () {
            list.className = "dropdown__list dropdown__list_active";
        }

        var listLinkClickHandler = function () {
            selectedValue.textContent = this.textContent;
            list.className = "dropdown__list";
        }

        selectedValue.addEventListener("click", listClickHandler);
        for (var item of list.children) {
            link = item.children[0];
            link.href = "javascript:void(0)";
            link.addEventListener("click", listLinkClickHandler);
        }
    }
    /*var list = document.getElementsByClassName("dropdown__list")[0];

    selectedValue.addEventListener("click", () => {
        list.className = "dropdown__list dropdown__list_active";
    });

    var linksList = document.getElementsByClassName("dropdown__link")
    for (link of linksList) {
        link.addEventListener("click", () => {
            selectedValue.textContent = link.textContent;
            list.className = "dropdown__list";
        });
    }*/
})