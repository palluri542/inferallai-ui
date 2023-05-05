import React from 'react';

const styles = {
    header: {
        marginBottom: '30px',
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '28px'
    },
    nav: {

    }
}

function Header() {
  return (
    <div style={styles.header}>
        <div style={styles.title}>infer.all.ai</div>
        <div style={styles.nav}>
            <ul>
                <li>Api documentation</li>
            </ul>
        </div>
    </div>
  );
}

export default Header;
