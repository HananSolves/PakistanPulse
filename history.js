document.addEventListener("DOMContentLoaded", function() {
    function timeline(timelineId) {
        let timeline = document.querySelector(timelineId);
        let items = timeline.querySelectorAll(".content");
        let activeClass = "container-active";
        let imgSelector = "img";

        items[0].classList.add(activeClass);
        timeline.style.backgroundImage = "url(" + items[0].querySelector(imgSelector).src + ")";

        let itemLength = items.length;

        window.addEventListener("scroll", function() {
            let pos = window.scrollY;
            items.forEach(function(item, i) {
                let rect = item.getBoundingClientRect();
                let min = rect.top + window.scrollY - window.innerHeight / 2;
                let max = min + item.offsetHeight;

                if (pos >= min && pos <= max) {
                    timeline.style.backgroundImage = "url(" + item.querySelector(imgSelector).src + ")";
                    items.forEach(function(itm) {
                        itm.classList.remove(activeClass);
                    });
                    item.classList.add(activeClass);
                }
            });
        });
    }

    timeline(".timeline");
});

