const Watch = require('./watch.js')
const observer = require('./observer.js')

var data = {
    a: 2
}

observer(data)
const watch = new Watch(data, 'a', update)

function update () {
    console.log('trigger update')
}

setTimeout(function(){
    console.log('update data.a')
    data.a = 5
}, 1000)

setTimeout(function(){
    console.log('update data.a to same value')
    data.a = 5
}, 1000)