const stray = nums => {
    const sortedNums = nums.sort((a, b) =>  a-b)
    return sortedNums[0] === sortedNums[1] ? sortedNums[sortedNums.length -1] : sortedNums[0]
}