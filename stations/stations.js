function OpenCloseLine(id){
    document.getElementById("line-container" + id).classList.toggle("opened");
    document.getElementById("arrow" + id).classList.toggle("rotated");
}