import './style.module.css';

export const Worker = () => {
    return (
        <div>
            <label htmlFor="quota">Number of primes:</label>
            <input readOnly type="text" id={"quota"} name="quota" value="1000000" />

            <button id="generate">Generate primes</button>
            <button id="reload">Reload</button>

            <textarea 
                readOnly
                id="user-input" 
                rows="5" 
                cols="62"
                value={'Try typing in here immediately after pressing "Generate primes"'}
            >
            </textarea>

            <div id="output"></div>
        </div>
    );
};
