import React, { useRef, useState } from 'react'
import './App.css';

const App: React.FC<any> = () => {

	const scrollRef = useRef<any>(null);
	const [scrollTop, setScrollTop] = useState<number>(0);

	const onScroll = () => {
		if (scrollRef?.current) {
			setScrollTop(scrollRef?.current.scrollTop);
		}
	};

	return (
		<>
			<div> scrollTop: {scrollTop}</div>
			<div
				style={{ width: 600, height: 200, border: '1px solid #fff', overflowY: 'auto' }}
				ref={scrollRef}
				onScroll={onScroll}
			>
				<div
					style={{ height: 2000 }}
				></div>
			</div>
		</>
	);
}

export default App;