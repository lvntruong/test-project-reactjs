const comments = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_COMMENT":
      const newData = [...state];
      newData.splice(action.payload.index, 1);
      console.log(newData);
      return newData;
    case "RELOAD_COMMENT":
      return action.payload;
    default:
      return state;
  }
};

export default comments;
