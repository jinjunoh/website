import React from 'react'

const Progress_bar = ({bgcolor,progress,height,skill}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'black',
		borderRadius: 40,
		margin: 50,
	}
	
    const Skill = {
        hpadding: 10,
        textAlign: 'middle',
		color: 'white',
		font: 'medium',
    }

	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (

    <div style={Parentdiv}>
        <div style={Skill}>{skill}</div>
	<div style={Childdiv}>
        
		<span style={progresstext}>{`${progress}%`}</span>
	</div>
    </div>
	)
}

export default Progress_bar;
