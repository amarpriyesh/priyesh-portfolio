const initialState = {
    value: false, // or true, depending on your desired initial state
  };



export const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'toggleDark':
        return { value: !state.value };
      default:
        return state;
    }
  };

 export const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'toggleSlider':
        return { value: !state.value};
      default:
        return state;
    }
  };

  
export default sliderReducer