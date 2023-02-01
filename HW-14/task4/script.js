function trimString(sentence, excludeChars) {
    let trimmed = sentence;

    for (const char of excludeChars) {
        trimmed = trimmed.split(char).join('');
    }

    return trimmed;
}

console.log(trimString('Hello world', ['H', 'o', 'e', 'w']));
