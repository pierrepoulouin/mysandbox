let prevBtn = document.querySelector('.slider-previous')
let nextBtn = document.querySelector('.slider-next')
let countainer = document.querySelector('.app')

console.log('previous button: ', prevBtn)
console.log('next button: ', nextBtn)

let slide = document.querySelectorAll('.slider-item')

console.log('Slide: ', slide)
console.log('je suis le premier index : ', slide[0])
console.log('je suis le dernier index: ', slide[2])

let counter = 0

console.log(slide)
// rajoute une classe en js

// rajoute ative dans la class app
countainer.classList.add('active')
// on stock la taille du slide dans une variable
let sliderSize = slide.length

console.log('la taille de mon tableau est de:', sliderSize)

slide[counter].classList.add('active')

function prevSlide() {
  // on enleve le selecteur active
  slide[counter].classList.remove('active')
  counter--
  //console.log(event)
  // on veut que le compteur passe à 3 quand on arrive à 0
  if (counter < 0) {
    counter = sliderSize - 1
  }
  // on ajoute sur l'index actuel le selecteur active
  slide[counter].classList.add('active')
}

function nextSlide() {
  slide[counter].classList.remove('active')
  counter++
  //console.log(event)
  // on veut que le compteur passe à 0 quand on arrive à 3
  if (counter >= sliderSize) {
    counter = 0
  }
  slide[counter].classList.add('active')
}
prevBtn.addEventListener('click', () => {
  prevSlide()
})

/*prevBtn.addEventListener('click', function(e) {
  console.log(e);
}) une autre syntaxe (plus vieille)
*/
nextBtn.addEventListener('click', () => {
  nextSlide()
})
