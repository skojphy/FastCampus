const header_btn = document.getElementById("header_btn");
const header_img = document.getElementById("header_btn::before");
const navi = document.getElementById("navi");


const toggle = () => {
    if(header_btn.className === "header-button open"){
        header_btn.className = "header-button close";
        navi.className = "navi open";
        
    } else{
        header_btn.className = "header-button open";
        navi.className = "navi close";
    }
}

header_btn.addEventListener("click", () => toggle());