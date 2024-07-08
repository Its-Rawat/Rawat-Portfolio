const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});




function menueAnimation(){
    var menu = document.querySelector("nav h3")
var navimg = document.querySelector("nav img")
var full = document.querySelector(".full-scr")
var flag = 0;
menu.addEventListener("click",function(){
    if(flag == 0){
        full.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1;
    }else{
        full.style.top = "-100%";
        navimg.style.opacity = 1;
        flag = 0;
    }
})
}

function loaderAnimation(){
    var loader = document.querySelector(".loader")
    setTimeout(function(){
    loader.style.top = "-100%";
    },4000)
    
}



menueAnimation()
loaderAnimation()



document.querySelectorAll('.timeline-entry').forEach(entry => {
    entry.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const projectNode = document.getElementById(projectId);
        
        // Toggle active class to show/hide project details
        projectNode.classList.toggle('active');
    });
});


// Download resume link
document.getElementById('resumeLink').addEventListener('click', function(event) {
    event.preventDefault();

    const a = document.createElement('a');

    a.href = 'resources\Aditya_Rawat.pdf';

    a.download = 'resources\Aditya_Rawat.pdf';

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
});
