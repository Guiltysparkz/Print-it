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
let i = 1;

slider_left.addEventListener("click", function() {
	console.log("Clicked left")
	dots[i-1].classList.remove("dot_selected")
	i--
	if (i == 0) {
		i = 4
		banner_img.src = "./assets/images/slideshow/" + slides[3]["image"] + ""
		tagLine.innerHTML = slides[3]["tagLine"]
		dots[3].classList.add("dot_selected")
	}
	else {
		banner_img.src = "./assets/images/slideshow/" + slides[i-1]["image"] + ""
		tagLine.innerHTML = slides[i-1]["tagLine"]
		dots[i-1].classList.add("dot_selected")
    }
});
slider_right.addEventListener("click", function() {
	console.log("Clicked right")
	dots[i-1].classList.remove("dot_selected")
	i++
	if (i > 4) {
		i = 1
		banner_img.src = "./assets/images/slideshow/" + slides[i-1]["image"] + ""
		tagLine.innerHTML = slides[i-1]["tagLine"]
		dots[i-1].classList.add("dot_selected")
	}
	if (i == 4) {
		banner_img.src = "./assets/images/slideshow/" + slides[3]["image"] + ""
		tagLine.innerHTML = slides[3]["tagLine"]
		dots[3].classList.add("dot_selected")
	}
	else {
		banner_img.src = "./assets/images/slideshow/" + slides[i-1]["image"] + ""
		tagLine.innerHTML = slides[i-1]["tagLine"]
		dots[i-1].classList.add("dot_selected")
	}
});

const dots = document.querySelectorAll(".dot")

dots.forEach((dot, index) => {
	dot.addEventListener("click", function() {
		dots.forEach(dot => {
			dots[i-1].classList.remove("dot_selected")
		})
		i = index + 1;
		banner_img.src = "./assets/images/slideshow/" + slides[i-1]["image"] + ""
		tagLine.innerHTML = slides[i-1]["tagLine"]
		dots[i-1].classList.add("dot_selected")
    });
});


// !!how do you change the var name inside a function??? ex: tagLine = tagLine[i]

// let slider_right = document.getElementById("slider_right");
// let slider_left = document.getElementById("slider_left");
// let banner_img = document.getElementById("banner_img");
// let tagLine = "text";
// let tagLine1 = "Impressions tous formats <span>en boutique et en ligne</span>";
// let tagLine2 = "Tirages haute définition grand format <span>pour vos bureaux et events</span>";
// let tagLine3 = "Grand choix de couleurs <span>de CMJN aux pantones</span>";
// let tagLine4 = "Autocollants <span>avec découpe laser sur mesure</span>";
// let i = 1;
// slider_left.addEventListener("click", function() {
// 	console.log("Clicked left")
// 	i--
// 	if (i == 0) {
// 		i = 4
// 		banner_img.src = "./assets/images/slideshow/slide"+ i +".png"
// 		tagLine = tagLine[i]
// 		tagLine.innerText = tagLine
// 	}
// 	else {
// 		banner_img.src = "./assets/images/slideshow/slide"+ i +".jpg"
// 		tagLine = tagLine[i]
// 		tagLine.innerText = tagLine
//     }
// });
// slider_right.addEventListener("click", function() {
// 	console.log("Clicked right")
// 	i++
// 	if (i > 4) {
// 		i = 1
// 		banner_img.src = "./assets/images/slideshow/slide"+ i +".jpg"
// 		tagLine = tagLine[i]
// 		tagLine.innerText = tagLine
// 	}
// 	if (i == 4) {
// 		banner_img.src = "./assets/images/slideshow/slide"+ i +".png"
// 		tagLine = tagLine[i]
// 		tagLine.innerText = tagLine
// 	}
// 	else {
// 		banner_img.src = "./assets/images/slideshow/slide"+ i +".jpg"
// 		tagLine = tagLine[i]
// 		tagLine.innerText = tagLine
// 	}
// 	console.log(tagLine)
// });