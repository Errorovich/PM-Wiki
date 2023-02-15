var margins;
function SetSlidersNumber(num) {
    margins = new Array(num).fill(0);
}
function PrevPage(sliderId) {
    if(margins[sliderId - 1] != 0) {
        margins[sliderId - 1] += 100;
        document.getElementById("slider" + sliderId).style.marginLeft = margins[sliderId - 1] + "%";
    }
}
function NextPage(sliderId) {
    if(margins[sliderId - 1] != -200) {
        margins[sliderId - 1] -= 100;
        document.getElementById("slider" + sliderId).style.marginLeft = margins[sliderId - 1] + "%";
    }
}