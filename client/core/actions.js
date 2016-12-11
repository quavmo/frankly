export const toggleDrawer = () => ({
  type: 'TOGGLE_DRAWER'
});

export const toggleComposition = () => ({
  type: 'TOGGLE_COMPOSITION'
});

export const pickFrank = payload => ({
  type: 'PICK_FRANK',
  payload
});

export const updateComposition = payload => ({
  type: 'UPDATE_COMPOSITION',
  payload
});

export const submitComposition = payload => ({
  type: 'SUBMIT_COMPOSITION',
  payload
});