import react, {Component} from 'react';

class TimePeriodCard extends Component{


    render(){
        return(
            <div className = 'time-period-card'>
                <a href = '/' className = 'card-link'>
                <h1>{this.props.name}</h1>
                <img src = {`${process.env.PUBLIC_URL}${this.props.src}`}
                            alt = {this.props.alt}
                            className = 'card-img' 
                            width = '50%'/>
                <div className = "phase-name">
                    <div className = 'chinese-name'>
                        {this.props.chinese.map((word, idx) => {
                            return(
                                <h2>{word}</h2>
                            );
                        })}
                    </div>
                    <div className = 'pinyin-name'>
                    {this.props.pinyin.map((word, idx) => {
                            return(
                                <p>{word}</p>
                            );
                        })}
                    </div>
                </div>
                </a>

            </div>
        )
    }
}

export default TimePeriodCard;