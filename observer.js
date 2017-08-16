const Dep = require('./dep.js').Dep

class Observer {
    constructor (data) {
        if (Object.prototype.toString.call(data) === '[object Object]') {
            this.walk(data)
        }
    }
    walk (data) {
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }
    defineReactive (data, key, val) {
        let dep = new Dep()
        observer(val)
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: () => {
                dep.addSub()
                return val
            },
            set: newVal => {
                if (val === newVal) {
                    return
                }
                val = newVal
                observer(val)
                dep.notify()
            }
        })
    }
}

function observer(data) {
    if (Object.prototype.toString.call(data) !== '[object Object]') {
        return
    }
    new Observer(data)
}

module.exports = observer
