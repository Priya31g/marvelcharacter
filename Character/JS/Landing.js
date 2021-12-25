
  
    async function searchmovie(n) {
        let res = await fetch(`https://www.superheroapi.com/api.php/3045277052375665/search/${n}`);
        let data = await res.json();
        //  console.log(data);
        return data.results;
    }
    let div = document.getElementById("movies");

    function call(m) {
        // let name = document.getElementById("query").value;
        location.reload();
        localStorage.setItem("detail", JSON.stringify(m));
        // let movies = await searchmovie(name);

       // console.log(m)
        window.location.href = `./Character/Html/character.html`
    }


    function appendMovie(m) {
        console.log(m)

        div.innerHTML = null;
        for (let i = 0; i < m.length; i++) {
            let div_det = document.createElement("div")
            let p = document.createElement("p");
            p.innerText = m[i].name;
            p.setAttribute("id", "name")
            let p1 = document.createElement("p");
            p1.innerText = m[i].appearance.gender;
            div_det.append(p, p1);
            div_det.className += "flex";
            div_det.setAttribute("id", i)
            div_det.addEventListener('click', function() {
                call(m[i]);
            });
            console.log(div_det.id)

            div.append(div_det);

        }

    }


    async function main() {
        let name = document.getElementById("query").value;

        if (name.length < 3) {
            return false;
        }
        let movies = await searchmovie(name);
        if (movies == undefined) {
            // console.log("i");
            return false;
        } else {
            appendMovie(movies)
            console.log(movies);
        }
    }
    var timerId;

    function debounce(func, delay) {
        let name = document.getElementById("query").value;

        if (name.length < 3) {
            return false;
        }
        if (timerId) {
            clearTimeout(timerId)
        }
        // setTimeout(func, delay);
        timerId = setTimeout(func, delay)

}


var aud = document.getElementById("audio");
let img = document.getElementById("a_i")
function checkingAudio(){
 
   
      play_a();
   
}
function play_a(){
    aud.play();
    img.src="https://cdn-icons-png.flaticon.com/512/945/945174.png";
    img.onclick=pause_a;
}
function pause_a(){
    aud.pause();
    img.src="https://cdn-icons-png.flaticon.com/512/945/945154.png";
    img.onclick=play_a;
}