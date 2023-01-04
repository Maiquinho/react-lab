import './styles.css';


type SonProps = {
    sonText: string;
    clickFn: () => void;
}

export function SonComponent({ sonText, clickFn }: SonProps){

    return(
        <div className='son-component'>
            <div>{sonText}</div>
            <button onClick={clickFn}>Son's Button</button>
        </div>
    )
}