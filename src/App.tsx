import React, {Suspense} from 'react';
import './App.scss';
import {
    BackTopComponent
} from './components';

const IndexPage1 = React.lazy(() => import('./pages/index/page1'));
const IndexPage2 = React.lazy(() => import('./pages/index/page2'));

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div className="App">
                <Suspense fallback={<div>Loading...</div>}>
                    <IndexPage1 onNextPageClick={() => {
                        // 滚动到下一页
                        window.scrollTo({
                            top: window.innerHeight,
                            behavior: 'smooth'
                        })
                    }}/>
                    <IndexPage2/>

                    <BackTopComponent/>
                </Suspense>
            </div>
        );
    }
}
