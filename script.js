const testinomialsContainer = document.querySelector('.testinomials-container')
const testinomial = document.querySelector('.testinomial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testinomials = [
  {
    name: 'Mia Curren',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/46.jpg',
    text: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid deleniti provident a quod eos repudiandae? Adipisci maiores debitis saepe aspernatur? Quam ea facilis quae, rerum asperiores sed quos dolores.",
  },
  {
    name: 'David Lloyd',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid deleniti provident a quod eos repudiandae? Adipisci maiores debitis saepe aspernatur? Quam ea facilis quae, rerum asperiores sed quos do.",
  },
  {
    name: 'Sammy Zayn',
    position: 'Accountant',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
    text: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid deleniti provident a quod eos repudiandae? Adipisci maiores debitis saepe aspernatur? Quam ea facilis quae, rerum asperiores sed quos dol."
  },
  {
    name: 'Batista',
    position: 'Actor',
    photo: 'https://randomuser.me/api/portraits/men/44.jpg',
    text: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid deleniti provident a quod eos repudiandae? Adipisci maiores debitis saepe aspernatur? Quam ea facilis quae, rerum asperiores sed quos dol."
  }
]

let index = 1

function updateTestinomial() {
  const { name, position, photo, text } = testinomials[index]

  testinomial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  index++

  if (index > testinomials.length - 1) {
    index = 0
  }
}

setInterval(updateTestinomial, 10000)