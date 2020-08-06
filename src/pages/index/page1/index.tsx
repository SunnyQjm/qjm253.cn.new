import React from "react";
import './index.scss';
import {
    csdn,
    down, github, hexo, jianShu, logo, starrySky3, starrySky4, wordpress,
} from '../../../imgs';
import {AutoSwitchBg, CircleImageComponent, MeteorEffectBgComponent} from "../../../components";

interface IndexPage1Props {
    onNextPageClick?: () => any;
}

interface IndexPage1State {

}

export default class IndexPage1 extends React.PureComponent<IndexPage1Props, IndexPage1State> {

    static defaultProps = {
        onNextPageClick: () => {

        }
    }

    render() {
        return (
            <div className='index-page-1'>
                {/*Index Page 1*/}
                <CircleImageComponent imgSrc={logo} size={100} padding={5} backgroundColor={'white'}/>

                <AutoSwitchBg imgs={[starrySky3, starrySky4].sort(function () {
                    return .5 - Math.random();
                })} customStyle={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: -100
                }}/>

                <MeteorEffectBgComponent/>

                <h1 className='index-page-1__title'>SunnyQjm | 建明</h1>
                <span>每一个不曾起舞的日子，都是对生命的辜负</span>
                <div className='index-page-1__friend-links'>
                    <a href="https://github.com/SunnyQjm">
                        <CircleImageComponent imgSrc={github} size={30} padding={10} backgroundColor={'white'}/>
                    </a>
                    <a href="https://blog.csdn.net/qq_33215972">
                        <CircleImageComponent imgSrc={csdn} size={30} padding={10} backgroundColor={'white'}/>
                    </a>
                    <a href="https://sunnyqjm.github.io/">
                        <CircleImageComponent imgSrc={hexo} size={30} padding={10} backgroundColor={'white'}/>
                    </a>
                    <a href="https://www.jianshu.com/u/d8e0ad691736">
                        <CircleImageComponent imgSrc={jianShu} size={30} padding={10} backgroundColor={'white'}/>
                    </a>
                    <a href="https://blog.qjm253.cn/">
                        <CircleImageComponent imgSrc={wordpress} size={30} padding={10} backgroundColor={'white'}/>
                    </a>
                </div>
                <img src={down} className='index-page-1__next-page' alt='下一页' onClick={this.props.onNextPageClick}/>
            </div>
        );
    }
}