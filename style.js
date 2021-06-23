//select items

const toggler = document.querySelector(".sidebar-toggle");
const close = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

// so we can toggle it in two ways


// One is if else condition
toggler.addEventListener("click", function () {
    if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar");


    }
    else {
        sidebar.classList.add("show-sidebar");
    }
});

// second is toggle functionality

// toggler.addEventListener("click", function () {
//     sidebar.classList.toggle("show-sidebar");
// });


//close button 
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});