import React from 'react';
import styles from "./index.module.less"

function Demo2() {
    return (
        <div className={styles.demo2}>
            <ul>
                {[1, 2, 3].map(item => <li>{item}</li>)}
            </ul>
            <div className="inner"></div>
        </div>
    );
}

export default Demo2;