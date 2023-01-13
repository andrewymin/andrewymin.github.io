let d:Date = new Date();
let year:Number = d.getFullYear();
$(".year").text(String(year));

let projectNavItems = document.querySelectorAll('.pn-item');
let projects = document.getElementById('portfolio')?.querySelectorAll('div');
let pythonProjects = document.querySelectorAll('.python');
let webDevProjects = document.querySelectorAll('.webDev');

console.log(projects)

projectNavItems.forEach(link => {
    link.addEventListener("click", e => {
        projectNavItems.forEach(link => {
            link.classList.remove('proj-active');
        });
        e.preventDefault();
        link.classList.add('proj-active'); 

        if ($("ul li:nth-child(1)" ).hasClass("proj-active")) {
            // make the class with portfolio > python disapear; vice versa with portfolio > web for ul li:nth-child(3)
            projects?.forEach(p => {
                p.classList.add('appear')
                p.classList.remove('disappear')
            })
            // console.log('true')
        }
        if ($("ul li:nth-child(2)" ).hasClass("proj-active")) {
            // make the class with portfolio > python disapear; 
            pythonProjects.forEach(p => {
                p.classList.add('disappear')
                p.classList.remove('appear')
            })
            webDevProjects.forEach(p => {
                p.classList.add('appear')
                p.classList.remove('disappear')
            })
            // console.log('true')
        }
        if ($("ul li:nth-child(3)" ).hasClass("proj-active")) {
            // vice versa with portfolio > web for ul li:nth-child(3)
            webDevProjects.forEach(p => {
                p.classList.add('disappear')
                p.classList.remove('appear')
            })
            pythonProjects.forEach(p => {
                p.classList.add('appear')
                p.classList.remove('disappear')
            })
            // console.log('true')
        }
        
      });
    });
