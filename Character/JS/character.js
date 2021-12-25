function redirect() {
    window.location.href = "../../Landing.html"

}

function appendMovie() {
    let t = localStorage.getItem(("detail"));
    t = JSON.parse(t)
         console.log(t);
      //  let{alignment,publisher}=biography
        let dob= t.biography["place-of-birth"]
        // let f_a=biography["first-appearance"]
         let eye=t.appearance["eye-color"];
         let hair=t.appearance["hair-color"];
         
         let f_name=t.biography["full-name"]
    let div1 = document.getElementById("personal_info");
    let p1 = document.createElement("p");
    p1.innerText = "Birth Place :   " + dob;
    let p2 = document.createElement("p");
    p2.innerText = "Gendre :   " + t.appearance.gender;
    let p3 = document.createElement("p");
    p3.innerText = "Heigth :   " + t.appearance.height;
    div1.append(p1, p2, p3)
    let div2 = document.getElementById("anatomy");
    let a1 = document.createElement("p");
    
    a1.innerText = "Eye color :   " + eye;
    let a2 = document.createElement("p");
    a2.innerText = "Mass :   " + t.appearance.weight[1];
    let a3 = document.createElement("p");
    a3.innerText = "Hair color :   " + hair;
    div2.append(a1, a2, a3);
   
    document.getElementById("n").innerText = f_name;
}
appendMovie()



var x = document.getElementById("audio");
let img1 = document.getElementById("a_i")
function checkingAudio(){
 
   
      play_a();
   
}
function play_a(){
    x.play();
    img1.src="https://cdn-icons-png.flaticon.com/512/945/945174.png";
    img1.onclick=pause_a;
}
function pause_a(){
    x.pause();
    img1.src="https://cdn-icons-png.flaticon.com/512/945/945154.png";
    img1.onclick=play_a;
}