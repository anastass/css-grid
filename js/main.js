// change visibility
const toggle = function(button_id, selector) {
    const sel = document.querySelectorAll(selector);
    sel.forEach(function(item) {
        let label = document.getElementById(button_id).innerText;
        if (item.style.visibility === "hidden") {
            item.style.visibility = "visible";
            label = label.replace("Show", "Hide");
        } else {
            item.style.visibility = "hidden";
            label = label.replace("Hide", "Show");
        }
        document.getElementById(button_id).innerText = label;
    });
};

// swap boxes
const swap = function() {
    const boxes = document.querySelectorAll(".container1 div");
    const z0Index = boxes[0].style.zIndex;
    const z1Index = boxes[1].style.zIndex;
    boxes[0].style.zIndex = z1Index;
    boxes[1].style.zIndex = z0Index;
};
