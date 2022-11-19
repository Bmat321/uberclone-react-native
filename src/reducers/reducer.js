export const StartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_START":
      return {
        longitude: action.payload.longitude,
        latitude: action.payload.latitude,
        address: action.payload.address,
        name: action.payload.name,
      };
    default:
      return state;
  }
};
export const EndReducer = (state, action) => {
  switch (action.type) {
    case "ADD_END":
      return {
        longitude: action.payload.longitude,
        latitude: action.payload.latitude,
        address: action.payload.address,
        name: action.payload.name,
      };
    default:
      return state;
  }
};
