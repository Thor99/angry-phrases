'use strict';

const listPhrases = 
    ['You suck.', 'You deserve to die.', 'Law should not be applied to you.',
    'Fuck off everything.', 'I do not care.', 'Burn in hell.', 'More hate, please.',
    'Your mom does not like you.', 'Your father does not like you.',
    'How about you die?', 'Fuck your religion, fuck your dreams, fuck you.',
    'Might be shit to be you.', 'I will kill you.', 'I fucking hate you, motherfucker.','Merry christmas and burn.',
    'Fuck global warming.', 'The world is my toilet.', 'Fuck your mama',
    'This is not my problem.'];

module.exports = () => listPhrases[ 0| Math.random() * listPhrases.length];
