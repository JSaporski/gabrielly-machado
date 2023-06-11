const sunflower = document.querySelector('.sunflower')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')

sunflower.addEventListener('click', () => {
  modal.classList.add('active')
})

close.addEventListener('click', () => {
  modal.classList.remove('active')
})
