const testimonals=[
    {
        name:"Clara",
         photo:"images/pexels-olly-3785412.jpg",
       text:"Highly recommend! The quality and service provided were outstanding. They truly care about their customers and it shows in every interaction. l like it I highly recommend them!",
    },{


    name:"Stepen",
    photo:"images/pexels-jibarofoto-2146722.jpg",
    text:"A truly exceptional experience! From start to finish, everything was handled with great care and attention to detail. I couldn't be happier with the outcome.",
    
}
,{
    name:"Keila",
     photo:"images/pexels-keila-aguilar-1684985-3285341.jpg",
    text:"This service has exceeded my expectations. The team was professional, efficient, and the results were outstanding. I highly recommend them!",
}
];
const img=document.querySelector("img");
const text1=document.querySelector(".text");
const user=document.querySelector(".username");
let idx=0;
showtestimonals();
function showtestimonals(){
    const{name,photo,text}=testimonals[idx];
    img.src=photo;
    text1.innerText=text;
    user.innerText=name;
    idx++;
    if(idx===testimonals.length){
        idx=0;
    }
    setTimeout(()=>{
        showtestimonals();
    },8000);
}
