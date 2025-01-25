export const Lessons1_5 = () => {
    //     function missingInteger (A) {
    //         let consNums = new Set();
    //         let maxVal, minVal;

    //         // console.log('isSet', consNums.keys());
    //         A.forEach((e) => {
    //             if(e > 0 && !consNums.has(e)){
    //                 consNums.add(e);
    //             }
    //         });

    //         if(!consNums.size) return 1;

    //         for( const key of consNums ){
    //             if(!maxVal && !consNums.has(key + 1)) maxVal = key + 1;
    //             if(!minVal || key < minVal) minVal = key;
    //         }

    //         console.log(minVal >= 2 ? 1 : maxVal);
    //     }

    //     function missingInteger(A) {
    //         const positiveNumbers = new Set();
    //         let smallestMissing = 1;

    //         A.forEach((num) => {
    //             if (num > 0) {
    //                 positiveNumbers.add(num);
    //             }
    //         });

    //         if (!positiveNumbers.size) return 1;

    //         // Find the smallest missing positive integer
    //         while (positiveNumbers.has(smallestMissing)) {
    //             smallestMissing++;
    //         }

    //         return smallestMissing;
    //     }
    //     missingInteger([1, 3, 6, 4, 1, 2]); //5
    //     missingInteger([5, 6, 7]); //4
    //     missingInteger([1, 2, 3, 4, 5, 7, 1000000]); //6
    //     missingInteger([1, 2, 3]);//4
    //     missingInteger([-1, -2,]);//1

    //     function solution(N, A) {
    //         let counters = Array(N).fill(0);
    //         let maxCounter = 0;
    //         let lastUpdate = 0;

    //         for ( let i = 0; i < A.length; i++) {
    //             const elem = A[i];

    //             if(elem <= N) {
    //                 counters[elem - 1] = Math.max(counters[elem - 1], lastUpdate);
    //                 counters[elem - 1]++;
    //                 maxCounter = Math.max(maxCounter, counters[elem - 1]);
    //             } else {
    //                 lastUpdate = maxCounter;
    //             }
    //         }

    //         if (lastUpdate > 0) {
    //             counters = Array.from(counters, (e) => Math.max(e, lastUpdate));
    //         }

    //         return counters;
    //     }
    //     solution(5, [3,4,4,6,1,4,4]); //(3, 2, 2, 4, 2)

    //     function solution(A) {
    //         let arrlength = A.length;
    //         let consNums = new Set;

    //         for( let i = 0; i < arrlength; i++){
    //             let elem = A[i];

    //             if(!consNums.has(elem)){
    //                 consNums.add(elem);
    //             }

    //         }

    //         if(arrlength !== consNums.size || !consNums.has(1)) return 0;

    //         for(let i = 0; i < arrlength; i++){
    //             const elem = A[i];
    //             if( elem > 1 && !consNums.has(elem - 1)) return 0
    //         }

    //         return 1;
    //     }

    //     function solution(X, A) {
    //         const positions = new Set();
    //         let time = -1;

    //         for (let i = 0; i < A.length; i++) {
    //             const num = A[i];

    //             if (num <= X && !positions.has(num)) {
    //                 positions.add(num);
    //                 if (i > time) time = i;
    //             }

    //             if (positions.size === X) {
    //                 return time;
    //             }
    //         }

    //         return -1;
    //         // let counter = X;
    //         // let time = A.indexOf(X);
    //         // let step = 0;

    //         // if(time === -1) return -1;

    //         // while (counter > 1) {
    //         //     step = A.find((num, i) => {
    //         //         if (num === counter - 1) {
    //         //             if(i > time){
    //         //                 time = i;
    //         //             }
    //         //         }
    //         //         return num === counter - 1;
    //         //     });

    //         //     if (step === undefined) return -1;
    //         //     counter -= 1;
    //         // }
    //         // console.log('time', time)
    //         // for(let i = X; i >= 0; i--){

    //         //     if(i === 0) return 0;
    //         //     // if(i === X) return X;

    //         //     A.find((num, i) => {
    //         //         console.log(i, num)
    //         //         if(num === counter - 1 && i > time){
    //         //             time = i;
    //         //             counter -= 1;
    //         //         }
    //         //         return num === counter - 1;
    //         //     });
    //         //     // if(){}
    //         // }

    //         // return time;
    //     }

    //     console.log(solution(1, [1]));
    //     console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
    //     console.log(solution(6, [1,3,1,4,2,3,6,4]));

    //     function solution(A, K) {
    //         const arrLength = A.length;
    //         let counter = K;
    //         let result = [];

    //         if (arrLength <= 1 || K === 0) return A;

    //         while (counter > 0) {
    //             if (counter > arrLength) {
    //                 counter -= arrLength;
    //                 continue;
    //             }

    //             if (counter === arrLength) return A;

    //             break;
    //         }
    //         result = A.slice(arrLength - counter);
    //         result.push(...A.slice(0, arrLength - counter));

    //         return result;
    //     }
    //     console.log(solution([1, 3, 41, 24, 412, 12, 3], 5));

    //     function solution(A) {
    //         const arrLen = A.length - 1;
    //         let p1 = 0;
    //         let a1 = A.slice(1).reduce((acc, val) => acc + val, 0);
    //         let difference;

    //         for(let i = 0; i < arrLen; i++){
    //             const currElem = A[i];
    //             let substraction;

    //             if (i < arrLen) p1 += currElem;
    //             if (i > 0) a1 -= currElem;

    //             substraction = Math.abs(p1 - a1);
    //             if(difference === undefined) difference = substraction;

    //             if (difference === 0) {
    //                 return 0;
    //             }

    //             if (difference > substraction) {
    //                 difference = substraction;
    //             };

    //         }

    //         return difference;
    //     }

    //     function solution(A) {
    //         let result = 0;
    //         let visitedNums = {};

    //         for (elem of A) {
    //             visitedNums[elem] ? visitedNums[elem] += 1 : visitedNums[elem] = 1;
    //         };

    //         for (const key in visitedNums) {
    //             if(visitedNums[key] % 2 !== 0) {
    //                 result = +key;
    //                 break;
    //             }
    //         }

    //         return result;
    //     }

    //     function solution(A) {
    //         let result = new Set();

    //         for (elem of A) {
    //             result.has(elem) ? result.delete(elem) : result.add(elem);
    //         };

    //         return [...result][0];
    //     }

    //     function prefixSums(A, B, K) {
    //         if (K === 0) return 0; // K cannot be 0 to avoid division by zero

    //         const countUpToB = Math.floor(B / K);
    //         const countUpToAminus1 = Math.floor((A - 1) / K);

    //         return countUpToB - countUpToAminus1;
    //     }
    //     // Initialize prefix sum arrays for each nucleotide type
    //     function solution(S, P, Q) {
    //         const N = S.length;
    //         const M = P.length;

    //         // Initialize prefix sum arrays for each nucleotide type
    //         const prefixA = Array(N + 1).fill(0);
    //         const prefixC = Array(N + 1).fill(0);
    //         const prefixG = Array(N + 1).fill(0);
    //         const prefixT = Array(N + 1).fill(0);

    //         // Fill the prefix sum arrays based on the DNA sequence S
    //         for (let i = 0; i < N; i++) {
    //             // Update cumulative counts for each nucleotide
    //             prefixA[i + 1] = prefixA[i] + (S[i] === "A" ? 1 : 0);
    //             prefixC[i + 1] = prefixC[i] + (S[i] === "C" ? 1 : 0);
    //             prefixG[i + 1] = prefixG[i] + (S[i] === "G" ? 1 : 0);
    //             prefixT[i + 1] = prefixT[i] + (S[i] === "T" ? 1 : 0);
    //         }

    //         // Array to store results of each query
    //         const result = Array(M);

    //         // Process each query
    //         for (let k = 0; k < M; k++) {
    //             const start = P[k];
    //             const end = Q[k] + 1; // +1 because prefix arrays are 1-indexed

    //             // Check for the smallest nucleotide impact factor in the range
    //             if (prefixA[end] - prefixA[start] > 0) {
    //                 result[k] = 1; // A is present
    //             } else if (prefixC[end] - prefixC[start] > 0) {
    //                 result[k] = 2; // C is present
    //             } else if (prefixG[end] - prefixG[start] > 0) {
    //                 result[k] = 3; // G is present
    //             } else {
    //                 result[k] = 4; // T is present
    //             }
    //         }

    //         return result;
    //     }

    //     function solution(A) {
    //         let prevAverage = Infinity;
    //         let result = 0;

    //         function updateResult(i, slice) {
    //             const average = slice.reduce((acc, val) => acc + val) / slice.length;

    //             // Check if this is the lowest average found so far
    //             if (average < prevAverage || (average === prevAverage && i < result)) {
    //                 prevAverage = average;
    //                 result = i;
    //             }
    //         }

    //         for (let i = 0; i < A.length - 1; i++) {
    //             // Calculate two-element and three-element slices starting at i
    //             updateResult(i, A.slice(i, i + 2));
    //             if (i < A.length - 2) {
    //                 updateResult(i, A.slice(i, i + 3));
    //             }
    //         }

    //         return result;
    //     }

    return <div>Lessons 1-5</div>;
};
