import "./style.css";

import './style.css'


document.addEventListener("DOMContentLoaded", ()=> {
   
    const searchInput = document.getElementById("txtSearch");
    const searchButton = document.getElementById("btnGoogleSearch");

   const searchGoogle = () => {
    const query = searchInput.value;
    if(query){
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = url;
    }
    else{
        alert('Please enter a search term')
    }
   };
   searchButton.addEventListener('click', searchGoogle);
   searchInput.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        searchGoogle();
    }
   })
});