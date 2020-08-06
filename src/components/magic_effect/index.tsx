import React from "react";
import BaseComponent, {BaseComponentProps, BaseComponentState} from "../base/BaseComponent";
import './index.scss'

interface MagicEffectProps extends BaseComponentProps {

}

interface MagicEffectState extends BaseComponentState {

}

/**
 * 魔法特效
 */
export default class MagicEffect extends BaseComponent<MagicEffectProps, MagicEffectState> {
    render() {
        return (
            <div>

            </div>
        );
    }
}