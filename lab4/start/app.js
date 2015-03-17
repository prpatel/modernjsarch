var Person = require('./Person'),
    logger = require('./logger');

var joe = new Person({
    firstName:'Joe',
    lastName:'Smith',
    age:31,
    knowsKungFu:true
});

logger.info('Does '+ joe.firstName +' know kung-fu?');
logger.info(joe.knowsKungFu ? 'You better believe it!' : 'Nope.');
