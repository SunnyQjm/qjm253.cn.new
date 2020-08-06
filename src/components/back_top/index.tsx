import React from "react";
import {backTop} from "../../imgs";
import './index.scss';
import {ParticleEffectContainer} from "../index";
import BaseComponent, {BaseComponentProps, BaseComponentState} from "../base/BaseComponent";

interface BackTopComponentProps extends BaseComponentProps {

}

interface BackTopComponentState extends BaseComponentState {
    hide: boolean
}

export default class BackTopComponent extends BaseComponent<BackTopComponentProps, BackTopComponentState> {
    static defaultProps = {};

    constructor(props: BackTopComponentProps) {
        super(props);
        this.state = {
            hide: true
        };
    }

    handlePageScroll = (e: Event) => {
        if (e.target) {
            // @ts-ignore
            const scrollTop = e.target.documentElement.scrollTop;
            if (scrollTop > 200) {
                this.setState({
                    hide: false
                });
            } else {
                this.setState({
                    hide: true
                });
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handlePageScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handlePageScroll)
    }

    backTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    render() {
        const {
            hide
        } = this.state;
        return (
            <ParticleEffectContainer customStyle={{
                right: hide ? `-50px` : '20px',
                position: 'fixed',
                bottom: '20px',
                transition: `right 0.5s`,
                borderRadius: `50%`,
                background: 'gray',
                opacity: 0.5
            }}>
                <img src={backTop} className='back-top-container__back-top-img' onClick={this.backTop} alt='回到顶部'>

                </img>
            </ParticleEffectContainer>
        );
    }
}