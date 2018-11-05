function produceDrivingRange(blockRange){
  return function(firstBlock, endBlock){
    let start = parseInt(firstBlock);
    let end = parseInt(endBlock)
    let distance = end-start;
    let diff = blockRange - distance
      if (diff > 0){
        return `within range by ${diff}`;
      } else {
        return `${diff*-1} blocks out of range`;
      }
  }
}

function produceTipCalculator(percentage){
  return function(fare){
    return fare*percentage;
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
