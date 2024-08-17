function filter(objects, propertyName, value) {
    let filteredObjects = [];
    
    for (let i = 0; i < objects.length; i++) {
        let obj = objects[i];
        if (obj[propertyName].includes(value)) {
            filteredObjects.push(obj);
        }
    }
    return filteredObjects;
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ];

let result = filter(objects, 'surname', 'Иванов');

console.log(result)
