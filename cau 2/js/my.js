
let arr = [1, 2, 3, 3, 3, 3, 3, 3, 1, 4];
function tryRemoveFromArray(array, number) {
    let i = 0;
    while (i < array.length) {
        if (array[i] == number) {
            array.splice(i, 1);
        } else {
            i++;
        }

    }

}
tryRemoveFromArray(arr, 3);
document.write(arr);