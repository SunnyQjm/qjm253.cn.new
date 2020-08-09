import React, {CSSProperties} from "react";
import BaseComponent, {BaseComponentProps, BaseComponentState} from "../base/BaseComponent";
import './index.scss';

interface IFramePhoneComponentProps extends BaseComponentProps {
    src: string,
    width?: string | number,
    height?: string | number,
    phoneBorderColor?: string,
    customStyle?: CSSProperties,
    iFrameAttributes?: React.IframeHTMLAttributes<HTMLIFrameElement>,
}

interface IFramePhoneComponentState extends BaseComponentState {
}

/**
 * 一个用iframe实现的带手机框样式的H5浏览器，可以在里面浏览H5页面
 */
export default class IFramePhoneComponent extends BaseComponent<IFramePhoneComponentProps, IFramePhoneComponentState> {
    static defaultProps = {
        width: 400,
        height: 650,
        src: 'https://qjm253.cn',
        iFrameAttributes: {},
        customStyle: {},
        phoneBorderColor: '#333'
    }

    render() {
        const {
            width,
            height,
            src,
            iFrameAttributes,
            customStyle,
            phoneBorderColor
        } = this.props;
        return (
            <div className='iframe-phone-component' style={customStyle}>
                <div className="iframe-phone-component__phone" id="phone_1" style={{
                    width: width,
                    height: height,
                    borderColor: phoneBorderColor,
                    boxShadow: `0 3px 0 #BBB, 0 4px 0 #BBB, 0 5px 0 #BBB, 0 7px 0 #BBB, 0 10px 20px`
                }}>
                    <iframe
                        sandbox='allow-forms allow-same-origin allow-scripts allow-top-navigation' {...iFrameAttributes}
                        src={src}
                        title={'phone-h5'}
                    />
                </div>
            </div>
        );
    }
}