import {professionsObject as professions} from './professions.api'

const qualities = {
  tedious: {_id: '67rdca3eeb7f6fgeed471198', name: 'Tedious', color: 'primary'},
  strange: {_id: '67rdca3eeb7f6fgeed471100', name: 'Strange', color: 'secondary'},
  bullet: {_id: '67rdca3eeb7f6fgeed4711012', name: 'Bullet', color: 'success'},
  alcoholic: {_id: '67rdca3eeb7f6fgeed471101', name: 'Alcoholic', color: 'danger'},
  handsome: {_id: '67rdca3eeb7f6fgeed471102', name: 'Handsome', color: 'info'},
  uncertain: {_id: '67rdca3eeb7f6fgeed471103', name: 'Uncertain', color: 'dark'}
}

const users = [
  {
    _id: '67rdca3eeb7f6fgeed471815',
    name: 'John Dorian',
    profession: professions.doctor,
    qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
    completedMeetings: 36,
    rate: 2.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471816',
    name: 'Koks',
    profession: professions.doctor,
    qualities: [qualities.bullet, qualities.handsome, qualities.alcoholic],
    completedMeetings: 15,
    rate: 2.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471817',
    name: 'Bob Kelso',
    profession: professions.doctor,
    qualities: [qualities.bullet],
    completedMeetings: 247,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471818',
    name: 'Rachel Green',
    profession: professions.waiter,
    qualities: [qualities.uncertain],
    completedMeetings: 148,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471819',
    name: 'Sheldon Cooper',
    profession: professions.physics,
    qualities: [qualities.strange, qualities.tedious],
    completedMeetings: 37,
    rate: 4.6,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471820',
    name: 'Leonard Hofstadter',
    profession: professions.physics,
    qualities: [qualities.strange, qualities.uncertain],
    completedMeetings: 147,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471821',
    name: 'Howard Wolowitz',
    profession: professions.engineer,
    qualities: [qualities.strange, qualities.tedious],
    completedMeetings: 72,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471822',
    name: 'Nikola Tesla',
    profession: professions.engineer,
    qualities: [qualities.handsome],
    completedMeetings: 72,
    rate: 5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471823',
    name: 'Monica Geller',
    profession: professions.cook,
    qualities: [qualities.strange, qualities.uncertain],
    completedMeetings: 17,
    rate: 4.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471824',
    name: 'Ratatouille',
    profession: professions.cook,
    qualities: [qualities.handsome, qualities.bullet],
    completedMeetings: 17,
    rate: 4.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed47181f',
    name: 'Joey Tribbiani',
    profession: professions.actor,
    qualities: [qualities.uncertain, qualities.strange],
    completedMeetings: 434,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: '67rdca3eeb7f6fgeed47181r',
    name: 'Brad Pitt',
    profession: professions.actor,
    qualities: [qualities.handsome],
    completedMeetings: 434,
    rate: 5,
    bookmark: false
  },
]

if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(users))
}

const fetchAll = () => new Promise(resolve => {
  setTimeout(() => resolve(JSON.parse(localStorage.getItem('users'))), 1000)
})

const update = (id, data) => new Promise(resolve => {
  const users = JSON.parse(localStorage.getItem('users'))
  const userIndex = users.findIndex(u => u._id === id)
  users[userIndex] = {...users[userIndex], ...data}
  localStorage.setItem('users', JSON.stringify(users))
  resolve(users[userIndex])
})

const getById = id => new Promise(resolve => {
  setTimeout(() => {
    resolve(JSON.parse(localStorage.getItem('users')).find(user => {
      return user._id === id
    }), 1000)
  })
})

export default {
  fetchAll,
  getById,
  update
}