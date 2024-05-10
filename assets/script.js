const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let slider_right = document.getElementById("slider_right");
let slider_left = document.getElementById("slider_left");
let banner_img = document.getElementById("banner_img");
let tagLine = document.getElementById("tagLine");
let i = 0;

slider_left.addEventListener("click", function() {
    console.log("Clicked left")
    dots[i].classList.remove("dot_selected")
    if (i == 0) {
        i = 3   }
    else {
        i--;
    }
    banner_img.src = "./assets/images/slideshow/" + slides[i]["image"] + ""
    tagLine.innerHTML = slides[i]["tagLine"]
    dots[i].classList.add("dot_selected")
});

slider_right.addEventListener("click", function() {
	console.log("Clicked right")
	dots[i].classList.remove("dot_selected")
    if (i == 3) {
        i = 0   }
    else {
        i++;
    }
    banner_img.src = "./assets/images/slideshow/" + slides[i]["image"] + ""
    tagLine.innerHTML = slides[i]["tagLine"]
    dots[i].classList.add("dot_selected")
});

const dots = document.querySelectorAll(".dot")

dots.forEach((dot, index) => {
	dot.addEventListener("click", function() {
		dots.forEach(dot => {
			dots[i].classList.remove("dot_selected")
		})
		i = index;
		banner_img.src = "./assets/images/slideshow/" + slides[i]["image"] + ""
		tagLine.innerHTML = slides[i]["tagLine"]
		dots[i].classList.add("dot_selected")
    });
});