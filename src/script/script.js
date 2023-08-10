// // navigation
const openmenu = document.querySelector("#buttonopenmenu");
const popupmenu = document.querySelector("#popup");
const closemenu = document.querySelector("#buttonclosemenu");
const navigation = document.querySelector("#navigation");

openmenu.addEventListener('click',(e)=>{
    popupmenu.classList.toggle('hidden');
})

closemenu.addEventListener('click',(e)=>{
    popupmenu.classList.toggle('hidden');
})