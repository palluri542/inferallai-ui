import React from 'react';

const wrapper = {
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: '#DDD',
    display: 'flex'
}

const active = {
    background: '#181c32',
    padding: '5px',
    borderRadius: '5px',
    color: '#FFF',
    flex: 1,
    textAlign: 'center'
}
const nonactive = {
    padding: '5px',
    flex: 1,
    textAlign: 'center'
}

function Switch() {
  return (
    <div style={wrapper}>
        <div style={active}>Monthly</div>
        <div style={nonactive}>Annually</div>
    </div>
  );
}

export default Switch;
