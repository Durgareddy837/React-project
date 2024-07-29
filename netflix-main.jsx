import { NetflixRegister } from "./netflix-register";
import'./netflix-main.css';

export function NetflixMain(){
    return(
        <main>
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div>
                <NetflixRegister/>
            </div>
        </main>
        
    )
}