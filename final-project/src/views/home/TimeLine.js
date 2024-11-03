import react, {Component} from 'react';
import TimePeriodCard from './TimePeriodCard';

class TimeLine extends Component{
    constructor(props){
        super(props);
        this.img = [
            {
                src: `/text-img/1.png`, 
                alt: 'orcale bone script for fish', 
                name: 'Oracle Bone Script',
                chinese: ['甲', '骨', '文'],
                pinyin: ['jia', 'gu', 'wen']
            },
            {
                src: `/text-img/2.png`, 
                alt: 'bronze inscription for fish', 
                name: 'Bronze Inscription',
                chinese: ['金', '文', '\u00A0'],
                pinyin: ['jin', 'wen', '\u00A0']
            },
            {
                src: `/text-img/3.png`, 
                alt: 'seal script for fish', 
                name: 'Seal Script',
                chinese: ['篆', '书', '\u00A0'],
                pinyin: ['zhuan', 'shu', '\u00A0']
            },
            {
                src: `/text-img/4.png`, 
                alt: 'clerical script for fish', 
                name: 'Clerical Script',
                chinese: ['隶', '书', '\u00A0'],
                pinyin: ['li', 'shu', '\u00A0']
            },
            {
                src: `/text-img/5.png`, 
                alt: 'cursive script for fish', 
                name: 'Cursive Script',
                chinese: ['草', '书', '\u00A0'],
                pinyin: ['cao', 'shu', '\u00A0']
            },
            {
                src: `/text-img/6.png`, 
                alt: 'running script for fish', 
                name: 'Running Script',
                chinese: ['行', '书', '\u00A0'],
                pinyin: ['xing', 'shu', '\u00A0']
            },
            {
                src: `/text-img/7.png`, 
                alt: 'regular script for fish', 
                name: 'Regular Script',
                chinese: ['楷', '书', '\u00A0'],
                pinyin: ['kai', 'shu', '\u00A0']
            }
        ]
    }
    render(){
        return(
            <div className = 'time-line'>
                <div className = 'line'></div>
                <div className = 'cards'>
                    {this.img.map((img, idx) => {
                        return(
                            <TimePeriodCard key={idx}
                                            src={img.src}
                                            alt={img.alt}
                                            name={img.name}
                                            chinese={img.chinese}
                                            pinyin={img.pinyin}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TimeLine;