const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//mi creo il collegamento con i pulsanti del dom

let btnNext= document.getElementById("next");
let btnPrevious= document.getElementById("prev");

for(let i=0; i<images.length; i++){
let j=1;
 //al click del pulsante next collego un evento
    btnNext.addEventListener("click", function(){ 
        console.log(i) 
        console.log(j)
        
        if(i<j && j<5){
            document.getElementById("img_dom").innerHTML= `<img src="${images[j].image}" alt="" id="img_dom"></img><br>
            <div class="position-absolute bottom-50 text-right color-white padding-text">
                    <h2>${images[j].title}</h2>
                    <h5>${images[j].text}</h5>
                </div>`
            j++
       }
       else if(j==5){
            document.getElementById("img_dom").innerHTML= `<img src="${images[0].image}" alt="" id="img_dom"></img><br>
            <div class="position-absolute bottom-50 text-right color-white padding-text">
                    <h2>${images[0].title}</h2>
                    <h5>${images[0].text}</h5>
                </div>`
           j=1
       }
   
    })
   
}


   


btnPrevious.addEventListener("click", function(){

   
})



