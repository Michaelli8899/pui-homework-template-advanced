import react, {Component} from 'react';

class TextAnimation extends Component{
    constructor(props){
        super(props);
        this.img = [
            {src: `/text-img/1.png`, alt: 'orcale bone script for fish', name: 'Oracle Bone Script'},
            {src: `/text-img/2.png`, alt: 'bronze inscription for fish', name: 'Bronze Inscription'},
            {src: `/text-img/3.png`, alt: 'seal script for fish', name: 'Seal Script'},
            {src: `/text-img/4.png`, alt: 'clerical script for fish', name: 'Clerical Script'},
            {src: `/text-img/5.png`, alt: 'cursive script for fish', name: 'Cursive Script'},
            {src: `/text-img/6.png`, alt: 'running script for fish', name: 'Running Script'},
            {src: `/text-img/7.png`, alt: 'orcale bone script for fish', name: 'Oracle Bone Script'}
        ]
    }
    render(){
        return(
            <div className = 'text-animation'>
                {this.img.map((img, idx) => {
                    return(
                        <img src = {`${process.env.PUBLIC_URL}${img.src}`}
                            alt = {img.alt} 
                            className = {`img${idx}`} 
                            width = '35%'/>
                    );
                })}
                <h2 className="secondary-title center">This Shows The Character for “Fish”Across Time Periods</h2>
            </div>
        );
    }
}

export default TextAnimation;