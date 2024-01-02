/*function range(n1, n2 = 1, n3 = 1) {
    var nums = []
    if (n2 == 1) {
        for (let i = n2; i <= n1; i+=n3) {
            nums.push(i)
        }
    } else if (n1 < n2) {
        for (let i = n1; i <= n2; i+= n3) {
            nums.push(i)           
        }
    } else if (n1 > n2) {
        for (let i = n1; i >= n2; i-=n3) {
            nums.push(i)            
        }
    }
    return nums
}*/

function range(a, b, s = 1) {
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)

    const nums = []

    for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
        nums.push(i)        
    }

    return nums
}

console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6,2))
console.log(range(8, -3, 4))