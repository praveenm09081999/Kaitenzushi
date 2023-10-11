function getMaximumEatenDishCount(N, D, K) {
  let eaten = new Set();
  let eatenArr = []
  let count = 0;
  let sizeOfEaten = 0;
  let history = 0;
  for (let i = 0; i < N; i++) {
    if (!eaten.has(D[i])) {
      count++;
      eatenArr.push(D[i])
      eaten.add(D[i]);
      sizeOfEaten = eaten.size
  
      if (sizeOfEaten > K) {
        eaten.delete(eatenArr[history]);
        history++
      }
    }
  }
  
  return count;
  }


console.log(getMaximumEatenDishCount(7,[1,2,3,3,2,1,1],1))