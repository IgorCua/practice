const Sorting = () => {
    // function distinct (A) {
    //     let distinctNums = new Set();

    //     for (const elem of A) {
    //         if(!distinctNums.has(elem) && elem >= 0) {
    //             distinctNums.add(elem);
    //         }
    //     }

    //     console.log(distinctNums.size);
    // }

    // distinct([2,1,1,2,3,1,-4]) //3;

    function triplet(A) {
        // Sort the array in ascending order
        A.sort((a, b) => a - b);

        // Calculate the product of:
        // - The three largest numbers
        const maxProduct1 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
        // - The two smallest numbers and the largest number
        const maxProduct2 = A[0] * A[1] * A[A.length - 1];

        // Return the maximum of these two products
        return Math.max(maxProduct1, maxProduct2);
    }

    // console.log(triplet([-3,1,2,-2,5,6]));//60
    // console.log(triplet([4, 5, 1, 0]));//20
    // console.log(triplet([10, 10, 10]));//
    // console.log(triplet([-10, -2, -4]));//-80
    // console.log(-2 > -4);

    function triangle(A) {
        const sorted = A.sort((a, b) => a - b);
        const sortedLength = sorted.length;

        for (let i = 0; i < sortedLength; i++) {
            const elem1 = sorted[i];
            const elem2 = sorted[i + 1];
            const elem3 = sorted[i + 2];

            if (!elem3) return 0;

            if (
                elem2 + elem3 > elem1 
                && elem1 + elem3 > elem2 
                && elem1 + elem2 > elem3
            ) return 1;
        }

        return 0;
    }

    // triangle([10, 2, 5, 1, 8, 20]);//1
    // triangle([10, 2, 5, 1, 8]);//
    // triangle([0, 234525, 5, 1000000, 8, 40932]);

    // function numOfDiscIntersections (A) {
    //     const limit = 10000000;
    //     let result = 0;
        

    //     for(let j = 0; j < A.length; j++){
    //         const elem1 = A[j];

    //         for (let k = j + 1; k < A.length; k++){
    //             const elem2 = A[k];
                
    //             if(result > limit) return -1;

    //             k - j <= elem1 + elem2 && result++;
    //         }
    //     }

    //     return result;
    // } // 81%

    function numOfDiscIntersections (A) {
        const arrLength = A.length;
        const sortedA = A.toSorted((a, b) => a - b);
        const limit = 10000000;
        let result = 0;
        let endIndex = 0;
        console.log(A);
        console.log(sortedA);


        for(let j = 0; j < arrLength; j++){
            const elem1 = A[j];

            // while() result++;

            while (endIndex < arrLength && (j - elem1) < elem1) {
                endIndex++;
            }
            // for (let k = j + 1; k < arrLength; k++){
            //     const elem2 = A[k];
                
            //     if(result > limit) return -1;

            //     k - j <= elem1 + elem2 && result++;
            // }
        }

        return result;
    } // 
    // console.log('81%', numOfDiscIntersections([1, 5, 2, 1, 4, 0]));//11

    function numOfDiscIntersections2(A) {
        const limit = 10000000;
        const N = A.length;
    
        // Create two arrays to store the start and end points of the discs
        const startPoints = new Array(N);
        const endPoints = new Array(N);
        // const endPoints = A.sort((a, b) => a - b);
        
        // Fill the arrays with start and end points of the discs
        for (let i = 0; i < N; i++) {
            startPoints[i] = i - A[i]; // Left-most point of the disc
            endPoints[i] = i + A[i];  // Right-most point of the disc
        }
    
        console.log('startPoints', startPoints)
        console.log('endPoints', endPoints)
        // Sort both arrays
        startPoints.sort((a, b) => a - b);
        endPoints.sort((a, b) => a - b);

        console.log(A)
        console.log('startPoints', startPoints)
        console.log('endPoints', endPoints)

        let activeDiscs = 0;
        let result = 0;
        let endIndex = 0;
    
        // Iterate through the sorted start points
        for (let i = 0; i < N; i++) {
            // Add all discs that start at this point
            while (endIndex < N && endPoints[endIndex] < startPoints[i]) {
                // console.log('activeDiscs while', activeDiscs);
                console.log('while start', startPoints);
                console.log('while end', endPoints);
                activeDiscs--; // Close the active disc
                endIndex++;
            }
    
            result += activeDiscs; // All currently active discs intersect with this one
            console.log('activeDiscs +=', activeDiscs);
            if (result > limit) return -1; // Check for limit
    
            activeDiscs++; // This disc is now active
        }
    
        return result;
    }//AI 100%
    // console.log('100%', numOfDiscIntersections2([1, 5, 2, 1, 4, 0]));//11
    return <div>Sorting</div>;
};

export default Sorting;
