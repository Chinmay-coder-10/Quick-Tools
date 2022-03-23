const bodyLoad = ()=>{
    const bar = document.getElementById('bar');
    console.log("Loaded");
    bar.style.width = "100vw";
    setTimeout(() => {
        hidePre();
    }, 2000);
    // bar.style.display = "none";
};

function hidePre() {
    const pre = document.getElementsByClassName('pre')[0];
    console.log(pre);
    pre.style.display = "none";
}