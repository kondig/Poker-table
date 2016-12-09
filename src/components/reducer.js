

const style = {
  front: {transform: 'rotateY(0deg)'},
  back: {transform: 'rotateY(180deg)'}
};

const table = (state = {}, action) => {
  switch (action.type) {
    case 'FLIP_CARD':
      if (action.side === 'front') {
        return {
          ...state,
          style: style.back
        }
      }
	    return {
	        ...state,
	        style: style.front
	      };


	default:
	   return state;
   }
};

export { table }
