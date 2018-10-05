const upButton = document.querySelector('#up')
const downButton = document.querySelector('#down')
const elm = document.querySelector('#count')

let count = 0

upButton.addEventListener('click', () => {
  count += 1
  elm.innerText = count
})

downButton.addEventListener('click', () => {
  count -= 1
  elm.innerText = count
})

const users = [
  { name: 'Macaron', age: 16 },
  { name: 'Muffine', age: 8 },
  { name: 'Bagel', age: 11 },
  { name: 'Syrup', age: 9 }
]

const greetAll = arr => {
  ret = []
  for (const i in arr) {
    const v = arr[i]
    if (v.age >= 10) {
      ret[i] = `Hello, ${v.name}.`
    } else {
      ret[i] = `Hi, ${v.name}!`
    }
  }
  return ret
}

const result = greetAll(users)

console.log(result)

setTimeout(() => {
  console.log('Jump!!!')
}, 3000)

setTimeout(() => {
  console.log('Step!!')
}, 1000)

console.log('Hop!')

fetch('users.json')
  .then(rp => {
    return rp.json()
  })
  .then(users => {
    console.log(users)
  })

class Parent {
  constructor(name) {
    this.name = name
  }
}

class Child extends Parent {
  constructor(name) {
    super(name)
  }

  greet() {
    console.log(`Hello ${this.name}.`)
  }
}

const user = new Child('Bagel')

user.greet()
