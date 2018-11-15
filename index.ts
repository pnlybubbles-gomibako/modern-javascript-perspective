const greet = (name: string): string => {
  return `Hello ${name}!`
}

console.log(greet('Macaron'))

fetch('users.json')
  .then(rp => {
    return rp.json()
  })
  .then(users => {
    console.log(users)
  })
