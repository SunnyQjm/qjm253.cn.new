import React, {CSSProperties} from "react";
import BaseComponent, {BaseComponentProps, BaseComponentState} from "../base/BaseComponent";
import './index.scss';

interface CircleImageComponentProps extends BaseComponentProps {
    imgSrc: string,
    size: number,
    padding: number,
    backgroundColor: string
}

interface CircleImageComponentState extends BaseComponentState {
    imgStyle: CSSProperties,
    divStyle: CSSProperties,
}

/**
 * 展示圆形图像组件
 * 1. 图片大小自适应；
 * 2. 长宽不一的图片自动居中。
 */
export default class CircleImageComponent extends BaseComponent<CircleImageComponentProps, CircleImageComponentState> {
    constructor(props: CircleImageComponentProps) {
        super(props);
        this.state = {
            imgStyle: {},
            divStyle: {}
        };
    }

    fitImg = () => {
        const img = new Image();
        img.src = this.props.imgSrc;
        img.onload = () => {
            let width = img.width;
            let height = img.height;
            let abs = Math.abs(width - height);
            if (width > height) {
                let ratio = abs / (2 * height);
                this.setState({
                    imgStyle: {
                        marginLeft: `-${ratio * 100}`
                    }
                });
            } else {
                let ratio = abs / (2 * width);
                this.setState({
                    imgStyle: {
                        marginTop: `-${ratio * 100}`
                    }
                });
            }
        }
    }

    componentDidMount() {
        const {
            size,
            padding,
            backgroundColor
        } = this.props;
        this.setState({
            divStyle: {
                width: `${size}px`,
                height: `${size}px`,
                padding: `${padding}px`,
                backgroundColor: backgroundColor
            }
        });
        // 加载图片并自适应大小
        this.fitImg();
    }

    render() {
        const {
            imgSrc
        } = this.props;
        const {
            imgStyle,
            divStyle
        } = this.state;
        return (
            <div style={divStyle} className='circle-image'>
                <img style={imgStyle} src={imgSrc} alt={''} className='circle-image__img'/>
            </div>
        );
    }
}