import React from 'react';
import Demo from "../components/Demo";
import Demo2 from "../components/Demo2";
import {Layout} from "antd";
import styles from "../index.module.less"

const {Header, Sider, Content} = Layout

function Home() {
    return (
        <Layout className={styles.layoutWhite}>
            <Header className="header"></Header>
            <Layout className="layout">
                <Sider width={300} className="sider-left"></Sider>
                <Content className="content"></Content>
                <Sider width={300} className="sider-right"></Sider>
            </Layout>
        </Layout>
    );
}

export default Home;