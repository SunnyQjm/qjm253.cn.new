import React from "react";
import './index.scss';
import {IFramePhoneComponent} from "../../../components";
import {xuebanH5Code, xuebanLogo, xuebanMiniProgramCode} from "../../../imgs";

interface IndexPage2Props {

}

interface IndexPage2State {

}

export default class IndexPage2 extends React.PureComponent<IndexPage2Props, IndexPage2State> {

    render() {
        return (
            <div className='index-page-2'>
                <div className='index-page-2__xueban-detail-container'>
                    <div className='index-page-2__xueban-detail-container_line1'>
                        <img src={xuebanLogo} className='index-page-2__xueban-detail-container_line1_logo' alt={''}/>
                        <span className='index-page-2__xueban-detail-container_line1_title css22786b4732223c6'>学伴</span>
                    </div>
                    <div className='index-page-2__xueban-detail-container_detail css22786b4732223c6'>
                        一款用于大连理工大学校内，集查询成绩、课表、考场、借阅信息及图书检索等多功能于一身的学生助手型App
                    </div>
                    <div className='index-page-2__xueban-detail-container_links'>
                        <img src={xuebanMiniProgramCode}  alt={''}/>
                        <img src={xuebanH5Code}  alt={''}/>
                        {/*<img src={xuebanLogo} />*/}
                    </div>
                </div>
                <IFramePhoneComponent src={'https://xueban.qjm253.cn/h5'}/>
            </div>
        );
    }
}