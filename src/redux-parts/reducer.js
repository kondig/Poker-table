const table = (state = {}, action) => {
  switch (action.type) {
	  case 'FLIP_CARD':
      if (side === 'front') {
        return {
          ...state;
          style: style[back];
      } else {
	      return {
	        ...state,
	        style: style[front];
	      };
       }
      }
	default:
	   return state;
   }
};

export { table }
