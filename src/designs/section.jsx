import React from 'react';

const styles = {
    wrapper: {
        background: '#FFF',
        padding: '60px 30px',
        borderRadius: '10px',
        marginBottom: '20px'
    }
}

function Section({children}) {
    return (
        <div style={styles.wrapper}>
            {children}
        </div>
    );
}

export default Section;
