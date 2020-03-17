function isFibonacci(x) {
    if (check(x)) {
        alert("la so fibonasi")
    } else {
        alert("khong la so fibonaci")
    }
}

function check(x) {
    let a = 0;
    let b = 1;
    let c = a + b;
    if (x == a || x == b) {
        return true;
    }
    while (c <= x) {
        if (c == x) {
            return true;
        } else {
            a = b;
            b = c;
            c = a + b;
        }
    }
    return false;
}

let x = parseInt(prompt("nhap so can kiem tra"));
isFibonacci(x);



