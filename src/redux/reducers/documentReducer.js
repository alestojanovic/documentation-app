export default function documentReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_DOCUMENT":
      return [...state, { ...action.document }];
    default:
      return state;
  }
}
