function findMax(arr) {
    let max = arr[0];
for(let i=1; i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i]
    }
}
document.write("so lon nhat la: " +max);
}

let arr=[8,9,2,4,6,8,0,4,6,3];
findMax(arr);