let theMEME = (word) => {
    const output = [];
    const { length } = word;

    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            const substring = word.substring(i, j + 1);
            output.push(substring);
        }
    }

    return output;
}

console.log(theMEME('dog'));
