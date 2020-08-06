import React from "react";
import './index.scss';
import {
    csdn,
    down, github, hexo, jianShu, logo, starrySky3, starrySky4, wordpress,
} from '../../../imgs';
import RcQueueAnim from "rc-queue-anim";
import {AutoSwitchBg, CircleImageComponent, MeteorEffectBgComponent} from "../../../components";

interface IndexPage1Props {
    onNextPageClick?: () => any;
}

interface IndexPage1State {
    showFriendLinks: boolean
}

export default class IndexPage1 extends React.PureComponent<IndexPage1Props, IndexPage1State> {

    static defaultProps = {
        onNextPageClick: () => {

        }
    }

    constructor(props: IndexPage1Props) {
        super(props);
        this.state = {
            showFriendLinks: false
        };
    }

    render() {
        const {
            showFriendLinks
        } = this.state;
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

                <h1 className='index-page-1__title' onClick={() => {
                    this.setState({
                        showFriendLinks: !showFriendLinks
                    })
                }} style={{
                    zIndex: 1
                }}>SunnyQjm | 建明</h1>
                <span>每一个不曾起舞的日子，都是对生命的辜负</span>
                <RcQueueAnim className='index-page-1__friend-links' key='page' type={'scaleX'} delay={300} duration={5000}>
                    <a href="https://github.com/SunnyQjm" key={'github'}>
                        <CircleImageComponent imgSrc={github} size={30} padding={10} backgroundColor={'white'}/>
                    </a>
                    <a href="https://blog.csdn.net/qq_33215972" key={'csdn'}>
                        <CircleImageComponent imgSrc={csdn} size={30} padding={10} backgroundColor={'white'}/>
                    </a>
                    <a href="https://sunnyqjm.github.io/" key={'hexo'}>
                        <CircleImageComponent imgSrc={hexo} size={30} padding={10} backgroundColor={'white'}/>
                    </a>
                    <a href="https://www.jianshu.com/u/d8e0ad691736" key={'jianshu'}>
                        <CircleImageComponent imgSrc={jianShu} size={30} padding={10} backgroundColor={'white'}/>
                    </a>
                    <a href="https://blog.qjm253.cn/" key={'wordpress'}>
                        <CircleImageComponent imgSrc={wordpress} size={30} padding={10} backgroundColor={'white'}/>
                    </a>
                </RcQueueAnim>
                <img src={down} className='index-page-1__next-page' alt='下一页' onClick={this.props.onNextPageClick}/>
            </div>
        );
    }
}