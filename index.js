listPhrases =
    ['You suck.', 'You deserve to die.', 'Law should not be applied to you.',
    'Fuck off everything.', 'I do not care.', 'Burn in hell.', 'More hate, please.',
    'Your mom does not like you.', 'Your father does not like you.',
    'How about you die?', 'Fuck your religion, fuck your dreams, fuck you.',
    'Might be shit to be you.', 'I will kill you.', 'Merry christmas and burn.',
    'Fuck global warming.', 'The world is my toilet.',
    'This is not my problem.'];

exports.getGreatPhrase = function(){
    var phrase = listPhrases[Math.floor(Math.random()*listPhrases.length)];
    return phrase;
}
