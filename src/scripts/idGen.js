// generator function to create id for each contact, yield keyword pauses generator
const idGenerator = function* (startFrom = 0) {
    let newId = 1;
    while (true) {
        yield startFrom + newId
        newId++
    }
}
module.exports = idGen;