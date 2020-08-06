import React, {CSSProperties} from "react";
import './index.scss';
import BaseComponent, {BaseComponentProps, BaseComponentState} from "../base/BaseComponent";

interface ParticleEffectContainerProps extends BaseComponentProps {
    customStyle?: CSSProperties
}

interface ParticleEffectContainerState extends BaseComponentState {

}

export default class ParticleEffectContainer extends BaseComponent<ParticleEffectContainerProps, ParticleEffectContainerState> {
    static defaultProps = {
        customStyle: ''
    }

    render() {
        return (
            <div className='particle-effect-container' style={this.props.customStyle}>
                {this.props.children}
            </div>
        );
    }
}