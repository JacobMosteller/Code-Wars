function warnTheSheep(queue) {
    // queue is 'backwards' and 1 indexed
    const wolfIndex = queue.length - queue.indexOf(`wolf`);

    if (wolfIndex === 1)
        return "Pls go away and stop eating my sheep";
    else
        return `Oi! Sheep number ${wolfIndex - 1}! You are about to be eaten by a wolf!`;
}