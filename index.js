const triangle = ({
    resultCount = 5,
    inicializedState = [[1]],
  } = {}) => {
    if(inicializedState.length >= resultCount) return [...inicializedState];
  
    const tempMathArr = [0, ...inicializedState[inicializedState.length - 1], 0]; // we added numbers 0 to start and end of array
    const newLevelArr = [...inicializedState[inicializedState.length - 1], 0] // added at new line
      .map((arrItem, position) =>
        tempMathArr[position] + tempMathArr[position + 1] // we used temp array
      );
  
    return triangle({
      inicializedState: [...inicializedState, newLevelArr],
      resultCount,
    });
  };
  
  
  
  document.querySelector("div").innerHTML = JSON.stringify(triangle());