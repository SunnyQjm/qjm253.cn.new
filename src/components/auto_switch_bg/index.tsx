import React, {CSSProperties} from "react";
import './index.scss'
import BaseComponent, {BaseComponentProps, BaseComponentState} from "../base/BaseComponent";

interface AutoSwitchBgProps extends BaseComponentProps {
    imgs: string[];
    initialIndex?: number;
    changeDuration?: number;
    customStyle?: CSSProperties;
}

interface AutoSwitchBgState extends BaseComponentState {
    currentImgIndex: number;
}

/**
 * 自动切换的全屏背景
 */
export default class AutoSwitchBg extends BaseComponent<AutoSwitchBgProps, AutoSwitchBgState> {
    static defaultProps = {
        initialIndex: 0,
        imgs: [],
        changeDuration: 5000,
        customStyle: {}
    }

    constructor(props: AutoSwitchBgProps) {
        super(props);
        this.state = {
            currentImgIndex: props.initialIndex ? props.initialIndex : 0,
        };
    }

    private autoChangeIntervalId: number = -1;

    componentDidMount() {
        const {changeDuration, imgs} = this.props;
        this.autoChangeIntervalId = setInterval(() => {
            this.setState((prevState: AutoSwitchBgState) => {
                return {
                    currentImgIndex: (prevState.currentImgIndex + 1) % imgs.length
                }
            });
        }, changeDuration);
    }

    render() {
        const {
            imgs,
            customStyle
        } = this.props;
        const {
            currentImgIndex
        } = this.state;
        return (
            <div className='auto-switch-bg' style={customStyle}>
                {
                    imgs.map((img, index) => {
                        return (
                            <img src={img} alt="背景" className='auto-switch-bg__img' style={{
                                opacity: currentImgIndex === index ? 1 : 0
                            }} key={index}/>
                        )
                    })
                }
            </div>
        );
    }
}