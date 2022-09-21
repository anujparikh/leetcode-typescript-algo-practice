const staircaseRecursion = (stepNumber) => {
    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;

    const take1Step = staircaseRecursion(stepNumber - 1);
    const take2Step = staircaseRecursion(stepNumber - 2);
    const take3Step = staircaseRecursion(stepNumber - 3);

    return take1Step + take2Step + take3Step;
}