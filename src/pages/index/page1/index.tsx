import React from "react";
import './index.scss';
import {
    down, starrySky3, starrySky4,
} from '../../../imgs';
import {AutoSwitchBg, MeteorEffectBgComponent} from "../../../components";

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

                <AutoSwitchBg imgs={[starrySky3, starrySky4].sort(function () {
                    return .5 - Math.random();
                })} customStyle={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: -100
                }}/>

                <MeteorEffectBgComponent/>

                <img src={down} className='index-page-1__next-page' alt='下一页' onClick={this.props.onNextPageClick}/>
            </div>
        );
    }
}