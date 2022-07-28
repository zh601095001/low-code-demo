import React from 'react';
import styles from "./index.module.less"

function Demo() {
    return (
        <div className={styles.demo}>
            test
            <div className="inner"/> {/*此处css不生效*/}
        </div>
    );
}

export default Demo;