export const loadState = () => {
  try {
      const serializedState = localStorage.getItem('state');
      if(serializedState === null){
          return undefined;
      }
      return JSON.parse(serializedState)
  } catch (error) {
    return console.log(
      "🚀 ~ file: index.js ~ line 8 ~ loadState ~ error",
      error
    );
  }
};

export const saveState = (state) =>{
    try {
        const serializedState = JSON.parse(state);
        localStorage.setItem('state', serializedState)
    } catch (error) {
        throw error
    }
}
