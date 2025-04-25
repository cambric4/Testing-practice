export function analyzeArray(arr) {
    const sum = arr.reduce((acc,val) => acc + val, 0);
    return {
        average: sum / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    };
}