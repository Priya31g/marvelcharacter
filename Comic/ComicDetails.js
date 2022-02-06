function Back(){
    window.location.href="./ComicLanding.html"
}
let localdata = JSON.parse(localStorage.getItem("id"))
let main_cont = document.getElementById("main_cont");
console.log(localdata)
let img = document.createElement("img");
img.src=localdata.img;
img.alt="thumbnail";

async function getDetail(){
    try{
        let data=await fetch(`https://gateway.marvel.com/v1/public/comics/${localdata.id}?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b`);
        let res = await data.json();
        
        return res.data.results[0];
    }catch(err){
        console.log(err);
    }
  
}

async function appendData(){

    let d = await getDetail();
   // console.log(d)
    let div = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.innerHTML=d.title;
    h3.style.fontSize="35px";

    let published = document.createElement("p");
    published.innerHTML="Published : "+ d.dates[1].date.substr(0,10);
    published.style.fontSize = "25px";
    let writer = document.createElement("p");
    if(d.creators.items[0]){
       
        writer.innerHTML="Writer : "+ d.creators.items[0].name;
        writer.style.fontSize = "22px"

    }

    let description = document.createElement("div");
    description.innerHTML=d.description;
    description.style.fontSize = "20px";


    let price = document.createElement("div");
    price.innerHTML ="Price : $ "+ d.prices[0].price;
    price.setAttribute("class","price")


    div.append(h3,published,writer,description,price);

    div.setAttribute("class","details_div")
    main_cont.append(img,div)
}

appendData()