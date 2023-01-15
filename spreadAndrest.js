let other = ["love cat", "have sister"]
let profile = [18, "math", true, "dude", other]

function myFunc(personOne, age, skill, isStudent, gender, dll) {
  console.log(personOne)
  console.log([age, skill, isStudent, gender])
  dll.forEach((item, index) => {
    console.log(item)
    console.log(index)
  })
}

myFunc("jesaya", ...profile)
