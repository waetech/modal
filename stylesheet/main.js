//get modal element
var modal = document.getElementById('simpleModal');
//Get open modal element
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
//Listen for outside click
window.addEventListener('click', outsideClick);

//play music when user goes to site



//function to open modal
function openModal(){
    modal.style.display = 'block';
}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close modal when clicked outside
function outsideClick(e){
    if(e.target === modal){
        modal.style.display = 'none';
    }
}
