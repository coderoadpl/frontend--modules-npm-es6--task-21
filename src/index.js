// const firstName = 'Mateusz'
// const lastName = 'Choma'

// const me = { firstName, lastName }

// console.log(me)

const me = {
    firstName: 'Mateusz',
    lastName: 'Choma',
    car: {
        brand: 'Opel',
        model: 'Insignia',
    },
}

// const firstName = me.firstName
// const lastName = me.lastName
// const notExistingProp = me.notExistingProp

const {
    firstName,
    lastName,
    notExistingProp,
} = me

// const { car } = me
// const { brand } = car

const { car: { brand } } = me

console.log(firstName)
console.log(lastName)
console.log(notExistingProp)
console.log(brand)