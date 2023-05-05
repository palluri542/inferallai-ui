import React from 'react';
import Section from './section';

const styles = {
    wrapper: {
        // display: 'flex',
        background: '#FFF',
        padding: '60px 30px',
        borderRadius: '10px'
    },
    child: {
        fontSize: '20px',
        fontWeight: '600',
        textAlign: 'center'
    }
}

function Hero() {
    return (
        <Section>
            <div style={styles.child}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </div>
            <br />
            <div style={styles.child}>
                <img src={require("./hero.jpeg").default} alt="not found" />
            </div>
        </Section>
    );
}

export default Hero;
