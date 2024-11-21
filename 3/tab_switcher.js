addEventListener("DOMContentLoaded", () => {
    for (let tabPanel of document.getElementsByClassName("tabs")) {
        const tabs = tabPanel.querySelectorAll(".tab");
        const contents = tabPanel.querySelectorAll(".tab__content");

        for (let tab of tabs) {
            tab.addEventListener("click", (event) => {
                const tabIndex = Array.from(tabs).indexOf(event.target);

                tabPanel.querySelector(".tab.tab_active").className = "tab";
                tabPanel.querySelector(".tab__content.tab__content_active").className = "tab__content";
    
                contents[tabIndex].className = "tab__content tab__content_active";
                event.target.className = "tab tab_active";
            });
        }
    }
})