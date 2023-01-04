import { SonComponent } from '../SonComponent';
import './styles.css';


type FatherProps = {
    fatherText: string;
}

export function FatherComponent({ fatherText }: FatherProps){

    function handleSonEvent(){
        alert("Son has clicked");
    }

    return(
        <div className="father-component">
            { fatherText }

            <SonComponent sonText="Son Text Example" clickFn={handleSonEvent} />
        </div>
    )
}