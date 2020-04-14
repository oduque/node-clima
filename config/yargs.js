const arvg = require('yargs')
    .options('descripcion', {
        description: 'Descripcion de la ciudad',
        alias: 'd',
        type: 'string',
        demand: true
    })
    .help()
    .argv;

module.exports = {
    arvg
}