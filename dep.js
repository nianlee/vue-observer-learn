class Dep {
    constructor () {
        this.subs = []
    }
    notify () {
        const subs = this.subs.slice()
        subs.forEach(watch => watch.update())
    }
    addSub () {
        this.subs.push(Dep.target)
    }
}

Dep.target = null

function pushTarget (watch) {
    Dep.target = watch
}

module.exports = {
    Dep,
    pushTarget
}
