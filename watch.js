const pushTarget = require('./dep.js').pushTarget

class Watch {
    constructor (data ,exp, callback) {
        this.exp = exp
        this.update = callback
        pushTarget(this)
        console.log('依赖收集',data[exp])
    }
}

module.exports = Watch
