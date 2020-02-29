var app = angular.module('app_angularJS', ['ngRoute']);

function countItems(arr, item) {
    // Write the code that goes here
    var total =0;
    
    for(var ele in arr){
      if(Array.isArray(arr[ele])) {
        total += countItems(arr[ele], item);
      }
      else {
        if(arr[ele] == item){
            total++;
        }
      }
    }
    
    return total;
  }
  
  var arr = [
    "apple",
    ["banana", "strawberry", "apple"]
  ];
  console.log(countItems(arr, "apple"));