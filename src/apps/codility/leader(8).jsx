export const Leaders = () => {
    function dominator(A) {
        let candidate = null;
        let count = 0;

        // Step 1: Find a candidate using Boyer-Moore Voting Algorithm
        for (let num of A) {
            if (count === 0) {
                candidate = num;
                count = 1;
            } else if (num === candidate) {
                count++;
            } else {
                count--;
            }
        }
        
        // Step 2: Verify if the candidate is actually the dominator
        let occurrences = 0;
        let index = -1;
        
        for (let i = 0; i < A.length; i++) {
            if (A[i] === candidate) {
                occurrences++;
                index = i; // Store the last found index
            }
        }
        
        return occurrences > A.length / 2 ? index : -1;

        // const ALength = A.length;
        // let candidate = [];

        // for(let i = 0; i < ALength; i++){
        //     const current = A[i];
        //     const next = A[i + 1];

        //     if(candidate.length === 0) {
        //         candidate.push(current);
        //         continue;
        //     }

        //     if(current !== candidate[candidate.length - 1]){
        //         candidate.pop();
        //     } else {
        //         candidate.push(current);
        //     }

        // }

        console.log("candidate", candidate);
        // return candidate.length ? A.indexOf(candidate[0]) : -1;
    }

    // console.log(dominator([3, 4, 3, 2, 3, -1, 3, 3]));//0, 2, 4, 6 or 7
    // console.log(dominator([2, 1, 1, 3, 4]));//1 or 2
    // console.log(dominator([0, 0, 1, 1, 1]));
    return <div>Leaders</div>
}