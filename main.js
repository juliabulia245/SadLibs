//SadLibs v1.0 by Julia Alsarraf (2021-04-19)

//create an object to store arrays of words for each part of speech
const word = {
    noun : ['sadness', 'depression', 'funeral', 'cat'],
    verb : ['mope', 'sigh', 'give up', 'laugh'],
    adjective: ['blue', 'hopeless', 'morbid', 'silly'],
    //select a random word from the array of the provided key
    generate(key) {
        return key[Math.floor(Math.random()*key.length)];
    }
}

//create a function that returns a message with randomly generated parts of speech placed in a template
const createMessage = () => {
    return `I took my ${word.generate(word.adjective)} ${word.generate(word.noun)} to the park in an attempt to make myself feel better, but all I wanted to do was ${word.generate(word.verb)}.`;
}

//output a random message to the console
console.log(createMessage());