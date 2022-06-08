import React from 'react';
import { useTheme } from '../hooks/useTheme';

// CSS
import './theme.css';

const Themechanger = () => {
	const { changeColor, mode, changeMode } = useTheme();
	const themeColors = [ '#52249c', '#249c6b', '#b70233' ];
	return (
		<div className="selector">
            {mode === 'dark' && <button onClick={()=>{mode === 'light' ? changeMode('dark') : changeMode('light')}}>light</button>}
            {mode === 'light' && <button onClick={()=>{mode === 'light' ? changeMode('dark') : changeMode('light')}}>dark</button>}
			<div>
				{themeColors.map((color) => (
					<div
						className="button"
						key={color}
						onClick={() => changeColor(color)}
						style={{ backgroundColor: color }}
					/>
				))}
			</div>
		</div>
	);
};

export default Themechanger;
