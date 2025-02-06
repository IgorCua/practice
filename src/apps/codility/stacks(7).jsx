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
                while(downStream.length > 0) {
                    let lastDownstream = downStream[downStream.length - 1];

                    if(current > lastDownstream){
                        downStream.pop();
                    } else {
                        break;
                    }
                }
                // console.log('hello', upstream, downStream)
                if(downStream.length === 0){
                    upstream.push(current);
                }
            }
        }
        
        return upstream.length + downStream.length;
    }

    // console.log(fish([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])); //2
    // console.log(fish([4, 2, 1, 5, 3], [0, 0, 0, 0, 1])); //5
    // console.log(fish([6, 4, 2, 1, 5], [1, 0, 0, 0, 0])); //5

    

    return <div>Stacks and Queues</div>;
};
