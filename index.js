// template_s3chdi9
// service_ciwojif
// G0c_5oqMtW003xlzw

let isModalOpen = false;
let contrastToggle =false;

function moveBackground(event){
   
}

function toggleContrast() {
   contrastToggle = !contrastToggle;
   if (contrastToggle) {
      document.body.classList += " dark-theme"
   }
   else {
      document.body.classList.remove("dark-theme")
   }
   
}


function contact(event) {
   event.preventDefault();
   const loading = document.querySelector('.modal__overlay--loading');
   const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
     .sendForm(
        'service_ciwojif',
        'template_s3chdi9',
        event.target,
        'G0c_5oqMtW003xlzw'

     ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
     }).catch(() =>{
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The Email service is temporarily unavailable. Please contact me directly on evrprasanth@gmail.com"
      );
     }
     )
    
}

function toggleModal() {
   if(isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
   }
   isModalOpen = true;
    // toggle modal
    document.body.classList += " modal--open";
}