export const professionsObject = {
  doctor: {_id: '67rdca3eeb7f6fgeed471818', name: 'Doctor'},
  waiter: {_id: '67rdca3eeb7f6fgeed471820', name: 'Waiter'},
  physics: {_id: '67rdca3eeb7f6fgeed471814', name: 'Physics'},
  engineer: {_id: '67rdca3eeb7f6fgeed471822', name: 'Engineer'},
  actor: {_id: '67rdca3eeb7f6fgeed471824', name: 'Actor'},
  cook: {_id: '67rdca3eeb7f6fgeed471829', name: 'Cook'}
}

export const professions = [
  { _id: "67rdca3eeb7f6fgeed471818", name: "Doctor" },
  { _id: "67rdca3eeb7f6fgeed471820", name: "Waiter" },
  { _id: "67rdca3eeb7f6fgeed471814", name: "Physics" },
  { _id: "67rdca3eeb7f6fgeed471822", name: "Engineer" },
  { _id: "67rdca3eeb7f6fgeed471824", name: "Actor" },
  { _id: "67rdca3eeb7f6fgeed471829", name: "Cook" }
]

const fetchAllProfessions = () => new Promise(resolve => {
  setTimeout(() => resolve(professionsObject), 1000)
})

export default fetchAllProfessions
