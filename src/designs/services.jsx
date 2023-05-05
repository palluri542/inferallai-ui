import React from 'react';
import Section from './section';

const servicesList = [
    { name: 'Text to Image', description: 'Converts text to image' },
    { name: 'Image to Image', description: 'Converts image to image' },
    { name: 'Text to Audio', description: 'Converts text to audio' },
    { name: 'Text to Video', description: 'Converts text to video' },
];

const styles = {
    wrapper: {
        display: 'flex'
    },
    card: {
        padding: '20px',
        textAlign: 'center',
        verticleAlign: 'middle'
    },
    name: {
        fontWeight: 'bold',
        fontSize: '18px'
    },
    desc: {
        fontWeight: '300',
        fontSize: '12px'
    }
}

function Services() {
    return (
        <Section>
            {
                servicesList.map(service => (
                    <div style={styles.card}>
                        <div style={styles.name}> {service.name} </div>
                        <div style={styles.desc}> {service.description} </div>
                    </div>
                ))
            }
        </Section>
    );
}

export default Services;
