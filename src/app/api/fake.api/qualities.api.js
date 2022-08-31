const qualities = {
  tedious: {_id: '67rdca3eeb7f6fgeed471198', name: 'Tedious', color: 'primary'},
  strange: {_id: '67rdca3eeb7f6fgeed471100', name: 'Strange', color: 'secondary'},
  bullet: {_id: '67rdca3eeb7f6fgeed4711012', name: 'Troll', color: 'success'},
  alcoholic: {_id: '67rdca3eeb7f6fgeed471101', name: 'Alcoholic', color: 'danger'},
  handsome: {_id: '67rdca3eeb7f6fgeed471102', name: 'Handsome', color: 'info'},
  uncertain: {_id: '67rdca3eeb7f6fgeed471103', name: 'Uncertain', color: 'dark'}
}

const fetchAllQualities = () => new Promise(resolve => {
  setTimeout(() => resolve(qualities), 1000)
})

export default fetchAllQualities
