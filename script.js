function loaderAnimation() {
    var loader = document.querySelector(".loader");
    if (loader) {
        setTimeout(function() {
            loader.style.top = "-100%";
            setTimeout(function() {
                loader.style.display = "none";
            }, 750);
        }, 4000);
    }
}
loaderAnimation();

// Initialize smooth scroll safely once libraries and DOM are ready
function initScroll() {
    if (typeof LocomotiveScroll !== 'undefined') {
        try {
            const scroll = new LocomotiveScroll({
                el: document.querySelector('.main'),
                smooth: true
            });
        } catch (e) {
            console.warn("LocomotiveScroll initialization:", e);
        }
    }
}

function menueAnimation() {
    var menu = document.querySelector("nav h3");
    var navimg = document.querySelector("nav img");
    var full = document.querySelector(".full-scr");
    var flag = 0;
    if (menu && full) {
        menu.addEventListener("click", function() {
            if (flag == 0) {
                full.style.top = 0;
                if (navimg) navimg.style.opacity = 0;
                flag = 1;
            } else {
                full.style.top = "-100%";
                if (navimg) navimg.style.opacity = 1;
                flag = 0;
            }
        });
    }
}

function initTimeline() {
    document.querySelectorAll('.timeline-entry').forEach(entry => {
        entry.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const projectNode = document.getElementById(projectId);
            if (projectNode) {
                projectNode.classList.toggle('active');
            }
        });
    });
}

// Download resume link
function initResume() {
    const resumeLink = document.getElementById('resumeLink');
    if (resumeLink) {
        resumeLink.addEventListener('click', function(event) {
            event.preventDefault();
            const a = document.createElement('a');
            a.href = 'resources/Aditya_Rawat.pdf';
            a.download = 'Aditya_Rawat.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }
}

// Attach listeners when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initScroll();
        menueAnimation();
        initTimeline();
        initResume();
    });
} else {
    initScroll();
    menueAnimation();
    initTimeline();
    initResume();
}
