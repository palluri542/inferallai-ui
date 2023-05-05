import React from 'react';

const styles = {
    wrapper: {
        background: '#FFF',
        padding: '60px 30px',
        borderRadius: '10px',
        marginBottom: '20px'
    },
    title: {
        fontSize: '20px',
        fontWeight: '600',
        textAlign: 'center'
    }
}

function Section({children, title}) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.title}>{title}</div>
            {children}
        </div>
    );
}

export default Section;
