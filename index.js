/*

Multiple

Line

Comments

*/

console.log(1 + 2 - (3 * 4) / 5)
// 2.999232

console.log(6 ** 7 % 5)
// 1

console.log('hello' === 'world')
// false

console.log(false !== true)
// true

console.log(2 >= 1 && 3 < 3)
// false

console.log((true && !true) || true)
// true

while (true) {
  const x = Math.random()

  if (x > 0.8) {
    continue
  }

  if (x > 0.5) {
    break
  }
}

// const a = ['a', 'b', 'c']

// for (const v of a) {
//   console.log(v)
// }
// a
// b
// c

// for (const i in a) {
//   const v = a[i]
//   console.log(i, v)
// }
// 0 a
// 1 b
// 2 c

// const user = {
//   name: 'Macaron',
//   age: 16
// }

// console.log(user.name)
// Macaron

// user.name = 'Muffine'
// user.age = 8

// console.log(user)
// {name: "Muffine", age: 8}

const a = []

console.log(a[0])
// undefined

const b = {}

console.log(b.knownField)
// undefined

const greet = name => {
  console.log(`Hi, ${name}!`)
}

greet('Scone')
// Hi, Scone!

const two = x => {
  return 2 * x
}

const two_ = x => 2 * x

console.log(two(2))
// 4
console.log(two_(2))
// 4

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

// const elm = document.querySelector('#hello')
// elm.innerText = 'Hello JS!'

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

const cb = () => {
  console.log('Time up!')
}

setTimeout(cb, 3000)

console.log('Start!')

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
