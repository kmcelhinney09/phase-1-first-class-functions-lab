const returnFirstTwoDrivers = function(arr){
    return [arr[0],arr[1]];
}

const returnLastTwoDrivers = function(arr){
    return [arr[arr.length -2],arr[arr.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return fare => fare * multiplier
}

const fareDoubler = fare => createFareMultiplier(2)(fare);

const fareTripler = fare => createFareMultiplier(3)(fare);

function selectDifferentDrivers(arr,returnDrivers){
    return returnDrivers(arr);
}