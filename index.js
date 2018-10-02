'use strict';

const listPhrases = 
    ['You suck.', 'You deserve to die.', 'Law should not be applied to you.',
    'Fuck off everything.', 'I do not care.', 'Burn in hell.', 'More hate, please.',
    'Your mom does not like you.', 'Your father does not like you.',
    'How about you die?', 'Fuck your religion, fuck your dreams, fuck you.',
    'Might be shit to be you.', 'I will kill you.', 'Merry christmas and burn.',
    'Fuck global warming.', 'The world is my toilet.',
    'This is not my problem.', 'You are a cunt.', 'Imma whoop yo ass up.', 'You are a Prick.', 
    'You are proof that evolution CAN go in reverse.', 'There is only one problem with your face, I can see it.',
    'Bitch you are like Monday, nobody likes you.', 'The last time I saw something like you, I flushed it.',
    'If I wanted to kill myself, I would climb up your ego and jump down to your IQ level.', 'How did you get here? Did someone leave your cage open?',
    'I’d slap you but that will be animal abuse.'];

module.exports = () => listPhrases[ 0| Math.random() * listPhrases.length];
