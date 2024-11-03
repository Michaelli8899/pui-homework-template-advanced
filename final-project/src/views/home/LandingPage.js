import react, {Component} from 'react';
import TextAnimation from './TextAnimation';
import ReadMore from '../partials/ReadMore';

class LandingPage extends Component{
    render(){
        return(
            <div className = 'landing'>
                <h1 className="main-title">Development of Chinese Characters</h1>
                <TextAnimation />
                <ReadMore />
            </div>
        );
    }
}

export default LandingPage;
        