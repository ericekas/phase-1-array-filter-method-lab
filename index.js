
function findMatching(drivers, name) {
    return drivers.filter((element) => element.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
    return drivers.filter((element) => element.slice(0,name.length) === name)
}

function matchName(drivers, checkName) {
    return drivers.filter((element) => element.name === checkName)
}


