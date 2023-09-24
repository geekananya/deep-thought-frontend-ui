import React from 'react'
import SectionWrapper from '../Components/SectionWrapper'
import {mgmt, head, descr, contextBoxOptions, obj4sa} from './text-content'
import ytembed from '../assets/yt-snapshot.png'
import group from '../assets/group.svg'
import up from '../assets/icons/expand-up.svg'
import down from '../assets/icons/expand-down.svg'
import left from '../assets/icons/arrow-curve-left.svg'
import right from '../assets/icons/arrow-curve-right.svg'
import expand from '../assets/icons/arrow-expand.svg'
import eclipse from '../assets/icons/eclipse.svg'
import './ProjectSection.css'

class ProjectSection extends React.Component{

    constructor(){
        super();
        this.state = {
            sections: 4
        }
    }

    render(){

        return(
            <div className='proj-section'>
                <h2 className='head0 head-font bold color-blue'>{head[0]}</h2>
                <div className='bg-grey-br padding-grey'>
                    <p className='head-font bolder fs-125 mg0'>{mgmt[0]}</p>
                    <p className='head-font mg0 mt'>{mgmt[1]}</p>
                </div>
                <div className='grid'>
                    <SectionWrapper des={descr[0]} h={head[0]}>
                        <hr></hr>
                        <img src={ytembed} alt='YT Video Embed'></img>
                    </SectionWrapper>

                    <SectionWrapper des={descr[1]} h={head[1]}>
                        <div className='thread-a flex'>
                            <img src={up} alt='contract'></img>
                            <p className='bold'>Thread A</p>
                        </div>
                        <div className='flex justify-left'>
                            <div className='ht'>
                                <div className="sub-box mar ml-27 dimen">Sub thread 1</div>
                                <div className='sub-sub-box ml-27 dimen'>Enter Text here</div>
                            </div>
                            <div className='ht'>
                                <div className="sub-box mar ml-27 dimen">Sub Interpretation 1</div>
                                <div className='sub-sub-box ml-27 dimen'>Enter Text here</div>
                            </div>
                        </div>
                        <div className='flex justify-right layer2'>
                            <img className='group ml-27' src={group} alt="4 icons"></img>
                            <div className='select flex'>
                                <p className='bold hidden'>Select Categ</p>
                                <img src={down} alt='expand'></img>
                            </div>
                            <div className='select flex'>
                                <p className='bold hidden'>Select Proces</p>
                                <img src={down} alt='expand'></img>
                            </div>
                        </div>
                        <button className='button ml-27 add'>+ Sub-thread</button>
                        <div>
                            <div className="sub-box ml-27 dimen-summ">Sub Interpretation 1</div>
                            <div className='sub-sub-box ml-27 dimen-summ'>Enter Text here</div>
                        </div>


                    </SectionWrapper>

                    <SectionWrapper des={descr[2]} h={head[2]}>
                        <hr></hr>
                        <p className="title ma31 bold">Title</p>
                        <input type="text" name="title" className="title-box ma31"></input>
                        <p className ="content ma31 bold">Content</p>
                        <div className ="content-box ma31 head-font">
                            <div className='flex'>
                                {
                                    contextBoxOptions.map((option)=> <div>{option}</div>)
                                }
                            </div>
                            <div className='content-icon flex'>
                                <img src={left} alt='left'></img>
                                <img src={right} alt='right'></img>
                                <img src={expand} alt='expand'></img>
                                <input className='paragraph head-font bold' type='text' placeholder='Paragraph'></input>
                                <img src={eclipse} alt='eclipse'></img>
                            </div>
                        </div>
                        <div className="content-box-latter ma31"></div>
                    </SectionWrapper>

                    <SectionWrapper des={descr[3]} h={head[3]}>
                        <hr></hr>
                        <div className='intro flex justify-left'>
                            <img src={up} alt='contract'></img>
                            <p className='bold'>Introduction</p>
                        </div>
                        <p className="text">{obj4sa.intro}</p>
                        <p className="more">See More</p>
                        <div className='intro flex justify-left bg-white'>
                            <img src={up} alt='contract'></img>
                            <p className='bold'>Thread A</p>
                        </div>
                        <p className="text">{obj4sa.threada}</p>
                        <p className="more">See More</p>
                        <div className='example intro flex justify-left bg-white'>
                            <p className='bold'>Example 1</p>
                        </div>
                        <p className="example-text text">{obj4sa.Example1}</p>
                    </SectionWrapper>
                     
                </div>
            </div>
        )
    }
}

export default ProjectSection;
