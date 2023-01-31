let valores = [1, 2]
let op = [(val) => {
    let res = 0
    for (let i in val) {
        res += val[i]
    }
    return res // Não esqueça do Return
},
    (val) => {
    let res = 1
    for (let i in val) {
        let ele = val[i]
        res *= ele
    }
    return res

}, (val) => {
    for(i of val){
        console.log(v)
    }
}
]

console.log(op[0](valores))