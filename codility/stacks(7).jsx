export const StacksQueues = () => {
    function brackets(S) {
        const SLength = S.length;
        const compare = {
            '{': '}',
            '[': ']',
            '(': ')'
        }
        const compareKeys = Object.keys(compare);
        const blocks = ['{}', '[]', '()'];
        let bracketsMap = '';
        
        for (let i = 0; i < SLength; i++){
            const current = S[i];
            const next = S[i + 1];
            const mapLastElem = bracketsMap[bracketsMap.length - 1];
            
            if(bracketsMap.length > SLength / 2) return 0;

            if(blocks.includes(current + next)) {
                i++;
                continue;
            }

            if(compareKeys.includes(current)){
                bracketsMap += current;
                continue;
            }

            if(!compareKeys.includes(current) && compare[mapLastElem] === current){
                bracketsMap = bracketsMap.slice(0, -1);
                continue;
            }
            
            if(i > 0 && bracketsMap.length === 0) return 0;
            
            return 0;
        }
        
        if(bracketsMap.length > 0) return 0;
        
        return 1;
    }

    // console.log(brackets("{[()()]}"));//1
    // console.log(brackets("([)()]"));//0
    // console.log(brackets(')('));//0
    // console.log(brackets('({{({}[]{})}}[]{})'));//1
    // console.log(brackets('{{{{'));//0
    // console.log(brackets('()(()()(((()())(()()))'));//0

    return <div>Stacks and Queues</div>;
};
