export const StacksQueues = () => {
    function brackets(S) {
        const SLength = S.length;
        const compare = {
            "{": "}",
            "[": "]",
            "(": ")",
        };
        const compareKeys = Object.keys(compare);
        const blocks = ["{}", "[]", "()"];
        let bracketsMap = "";

        for (let i = 0; i < SLength; i++) {
            const current = S[i];
            const next = S[i + 1];
            const mapLastElem = bracketsMap[bracketsMap.length - 1];

            if (bracketsMap.length > SLength / 2) return 0;

            if (blocks.includes(current + next)) {
                i++;
                continue;
            }

            if (compareKeys.includes(current)) {
                bracketsMap += current;
                continue;
            }

            if (
                !compareKeys.includes(current) &&
                compare[mapLastElem] === current
            ) {
                bracketsMap = bracketsMap.slice(0, -1);
                continue;
            }

            if (i > 0 && bracketsMap.length === 0) return 0;

            return 0;
        }

        if (bracketsMap.length > 0) return 0;

        return 1;
    }

    // console.log(brackets("{[()()]}"));//1
    // console.log(brackets("([)()]"));//0
    // console.log(brackets(')('));//0
    // console.log(brackets('({{({}[]{})}}[]{})'));//1
    // console.log(brackets('{{{{'));//0
    // console.log(brackets('()(()()(((()())(()()))'));//0
    function fish(A, B) {
        let upstream = [];
        let downStream = [];

        for (let i = 0; i < A.length; i++) {
            const current = A[i];
            const direction = B[i];
            // console.log('downstream', downStream)
            if (direction === 1) {
                downStream.push(current);
            } else {
                while (downStream.length > 0) {
                    let lastDownstream = downStream[downStream.length - 1];

                    if (current > lastDownstream) {
                        downStream.pop();
                    } else {
                        break;
                    }
                }
                // console.log('hello', upstream, downStream)
                if (downStream.length === 0) {
                    upstream.push(current);
                }
            }
        }

        return upstream.length + downStream.length;
    }

    // console.log(fish([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])); //2
    // console.log(fish([4, 2, 1, 5, 3], [0, 0, 0, 0, 1])); //5
    // console.log(fish([6, 4, 2, 1, 5], [1, 0, 0, 0, 0])); //5

    function nesting(S) {
        const SLength = S.length;
        let openingClosures = [];

        if (SLength % 2 !== 0) return 0;

        for (let i = 0; i < SLength; i++) {
            const current = S[i];

            if (openingClosures.length > SLength / 2) return 0;

            if (current === "(") {
                openingClosures.push(current);
                continue;
            }

            if (current === ")" && openingClosures.length > 0) {
                openingClosures.pop();
            } else {
                return 0;
            }
        }

        return openingClosures.length > 0 ? 0 : 1;
    }

    // console.log(nesting("(()(())())"));//1
    // console.log(nesting("())"));//0
    // console.log(nesting('()(()()(((()())(()()))'));//0
    // console.log(nesting('(('));//0

    function stoneWall(H) {
        let stack = [];
        let result = 0;

        for (let i = 0; i < H.length; i++) {
            while (stack.length > 0 && stack[stack.length - 1] > H[i]) {
                stack.pop(); // Remove taller blocks
                console.log("while stack", stack);
            }

            if (stack.length === 0 || stack[stack.length - 1] < H[i]) {
                stack.push(H[i]); // Add new block
                result++; // Count new block
                console.log("if stack", stack);
            }
        }

        return result;
    }

    // console.log(stoneWall([8, 8, 5, 7, 9, 8, 7, 4, 8])); //7
    // console.log(stoneWall([1, 1, 1])); //1
    // console.log(stoneWall([1])); //1

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

    return <div>Stacks and Queues</div>;
};
