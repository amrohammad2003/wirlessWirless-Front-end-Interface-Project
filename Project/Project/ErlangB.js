function erlangB(E, C) {
    let numerator = Math.pow(E, C) / factorial(C);
    let denominator = 0;
    for (let k = 0; k <= C; k++) {
        denominator += Math.pow(E, k) / factorial(k);
    }
    if (denominator === 0) return 1; // Avoid division by zero
    return numerator / denominator;
}

function factorial(n) {
    // Use an iterative approach to avoid stack overflow for large C
    if (n < 0) return NaN;
    if (n === 0) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function findChannels(E, B) {
    if (E <= 0 || B <= 0) return 0;
    let C = Math.ceil(E); // Start searching from a reasonable point
    if (C === 0) C = 1;
    
    while (true) {
        let blockingProbability = erlangB(E, C);
        if (blockingProbability <= B) {
            return C;
        }
        C++;
        // Add a safeguard for extremely high traffic loads
        if (C > 10000) return C; 
    }
}