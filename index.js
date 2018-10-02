'use strict';

const listPhrases = 
    ['You suck.', 'You deserve to die.', 'Law should not be applied to you.', 'Your therapist lied to you.',
    'Fuck off everything.', 'I do not care.', 'Burn in hell.', 'More hate, please.',
    'Your mom does not like you.', 'Your father does not like you.', 'You wouldn\'t be a great manager in Japan.',
    'How about you die?', 'You have no drawing skills.', 'Fuck your religion, fuck your dreams, fuck you.',
    'Might be shit to be you.', 'I will kill you.', 'Merry christmas and burn.',
    'Fuck global warming.', 'Your face is backwards.', 'The world is my toilet.', 'Your face is the reason aliens don\'t visit us.',
    'This is not my problem.', 'You are a cunt.'];

module.exports = () => listPhrases[ 0| Math.random() * listPhrases.length];
