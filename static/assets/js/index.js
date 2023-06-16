"use strict";
var _a;
let d = new Date();
let year = d.getFullYear();
$(".year").text(String(year));
let projectNavItems = document.querySelectorAll('.pn-item');
let projects = (_a = document.getElementById('portfolio')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('div');
let pythonProjects = document.querySelectorAll('.python');
let webDevProjects = document.querySelectorAll('.webDev');
// console.log(projects);
projectNavItems.forEach(link => {
    link.addEventListener("click", e => {
        projectNavItems.forEach(link => {
            link.classList.remove('proj-active');
        });
        e.preventDefault();
        link.classList.add('proj-active');
        if ($("ul li:nth-child(1)").hasClass("proj-active")) {
            projects === null || projects === void 0 ? void 0 : projects.forEach(p => {
                p.classList.add('appear');
                p.classList.remove('disappear');
                p.removeAttribute('closing');
            });
        }
        if ($("ul li:nth-child(2)").hasClass("proj-active")) {
            pythonProjects.forEach(p => {
                p.classList.add('disappear');
                p.classList.remove('appear');
                p.addEventListener('animationend', () => {
                    p.setAttribute('closing', "");
                }, { once: true });
            });
            webDevProjects.forEach(p => {
                p.classList.add('appear');
                p.classList.remove('disappear');
                p.removeAttribute('closing');
            });
        }
        if ($("ul li:nth-child(3)").hasClass("proj-active")) {
            webDevProjects.forEach(p => {
                p.classList.add('disappear');
                p.classList.remove('appear');
                p.addEventListener('animationend', () => {
                    p.setAttribute('closing', "");
                }, { once: true });
            });
            pythonProjects.forEach(p => {
                p.classList.add('appear');
                p.classList.remove('disappear');
                p.removeAttribute('closing');
            });
        }
    });
});
