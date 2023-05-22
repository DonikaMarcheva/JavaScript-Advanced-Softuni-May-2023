function solve(input) {
    let cars = {};
    let commandObj = {
        create(name, inherit, parentName) {
            if (inherit) {
                cars[name] = Object.create(cars[parentName]);
            } else {
                cars[name] = {};
            }
        },
        set(name, key, value) {
            cars[name][key] = value;
        },
        print(name) {
            let entry = []
            for (let key in cars[name]) {
                entry.push(`${key}:${cars[name][key]}`)
            }
            console.log(entry.join(","))
        }
    }

    for (const command of input) {
        let [commandName, a, b, c] = command.split(' ');
        let action = commandObj[commandName];
        action(a, b, c);
    }
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)