// change visibility
function toggle(button_id, selector) {
    var sel = document.querySelectorAll(selector);
    sel.forEach(function (item) {
        var label = document.getElementById(button_id).innerText;
        if (item.style.visibility === "hidden") {
            item.style.visibility = "visible";
            label = label.replace("Show", "Hide");
        }
        else {
            item.style.visibility = "hidden";
            label = label.replace("Hide", "Show");
        }
        document.getElementById(button_id).innerText = label;
    });
}
// swap boxes
function swap() {
    var boxes = document.querySelectorAll(".container1 div");
    var z0Index = boxes[0].getAttribute("style");
    var z1Index = boxes[1].getAttribute("style");
    boxes[0].setAttribute("style", z1Index);
    boxes[1].setAttribute("style", z0Index);
}
