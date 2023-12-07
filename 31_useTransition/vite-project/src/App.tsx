import React, { useState, useTransition } from 'react'
import './App.css'

const App: React.FC<any> = () => {
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState("");
    const [list, setList] = useState<string[]>([]);

    return (
        <>
            <input
                type="text"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    startTransition(() => {
                        const res: string[] = [];
                        for (let i = 0; i < 10000; i++) {
                            res.push(e.target.value);
                        }
                        setList(res);
                    });
                }}
            />
            {isPending ? (
                <div>Loading...</div>
            ) : (
                list.map((item, index) => <div key={index}>{item}</div>)
            )}
        </>
    );
};

export default App
