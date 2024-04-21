var arr = [
    { name: "Elie" },
    { name: "Tim" },
    { name: "Matt" },
    { name: "Colt" }
]

function extractValue(arrayOfObjects, key) {
    return arrayOfObjects.reduce(function (accum, current) {
        accum.push(current[key])
        return accum
    }, [])
}
let vowels = 'aeiou'

function vowelCount(string) {
    let arrayString = string.split('')
    return arrayString.reduce(function (accum, value) {
        if (vowels.includes(value)) {
            if (accum[value]) {
                accum[value]++
            }
            else {
                accum[value] = 1
            }
        }
        return accum
    }, {})
}

function addKeyAndValue(arrayOfObjects, keyval, val) {
    return arrayOfObjects.reduce(function (accum, value) {
        newObj = { ...value }
        newObj[keyval] = val
        accum.push(newObj)
        return accum
    }, [])
}

function partition(array, callback) {
    return array.reduce(function (accum, val) {
        if (callback(val)) {
            accum[0].push(val)
        }
        else {
            accum[1].push(val)
        }
        return accum
    }, [[], []])
}