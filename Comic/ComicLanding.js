
let x= document.getElementById("image_box");

async function fetchImage(){
    let data = await fetch("https://gateway.marvel.com:443/v1/public/comics?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b");

    let res = await data.json();
    
    return res.data.results;
}

let images_array=["https://i.annihil.us/u/prod/marvel/i/mg/b/b0/61ae1ea2852da/portrait_uncanny.jpg",'https://i.annihil.us/u/prod/marvel/i/mg/9/30/61ae1ce771d18/portrait_uncanny.jpg',"https://i.annihil.us/u/prod/marvel/i/mg/5/d0/61a92d24612cc/portrait_uncanny.jpg","https://i.annihil.us/u/prod/marvel/i/mg/c/30/61ae1cc783f1e/portrait_uncanny.jpg","https://i.annihil.us/u/prod/marvel/i/mg/2/40/61ae1ce6bfdb9/portrait_uncanny.jpg",'https://i.annihil.us/u/prod/marvel/i/mg/7/00/61a92d267c89e/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/1/70/61ae1cae4a4cc/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/6/10/61ae1d01d5947/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/9/60/61ae1d199e6c2/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/9/40/61ae1edc92761/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/9/40/61a92d267cd5a/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/7/00/61a92d267c89e/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/b/b0/61ae1cae4b724/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/c/20/61ae1d077f5cc/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/6/10/61ae1d0750a98/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/f/20/61ae1ce708bee/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/9/10/61840cebd7d22/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/8/a0/614260a6baf4b/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/d/10/614260a549118/portrait_uncanny.jpg','https://i.annihil.us/u/prod/marvel/i/mg/9/90/5f2c345fc3e56/portrait_uncanny.jpg']


async function appendImage(){
    let d = await fetchImage();
    console.log(d);
    let image_box=document.getElementById("image_box")
    d.forEach((el,i) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        try{
            img.src=images_array[i];
            if(img.status==403){
                img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXbZBhHelqwq7NPAHcaOb2T8vfRtFPdH_-fRMoG0iH1G06FD5C3-6GnXRC073-DbqAEM&usqp=CAU"
            }
        }catch(err){
         console.log(err)
            img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXbZBhHelqwq7NPAHcaOb2T8vfRtFPdH_-fRMoG0iH1G06FD5C3-6GnXRC073-DbqAEM&usqp=CAU"
        }
        img.alt="image";
        let p = document.createElement("p");
        p.innerHTML=el.title;
        div.append(img,p);
        div.onclick=()=>{
            localStorage.setItem("id",JSON.stringify({id:el.id,img:images_array[i]}));

            window.location.href="./ComicDetails.html"
        }
        image_box.append(div);
    });
}

appendImage()