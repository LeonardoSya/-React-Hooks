import { useState } from 'react'
import './App.css'
import List from './components/List';
import useSelections from './hooks/useSelections';

const App: React.FC = () => {
  const items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const selections = useSelections(items);

  return (
    <div>
      <h1>Item Selection Example</h1>
      <List items={items} selections={selections} />
      <div>
        <p>Selected Items: {JSON.stringify(selections.selected)}</p>
        <button onClick={selections.selectAll}>Select All</button>
        <button onClick={selections.unSelectAll}>Unselect All</button>
      </div>
    </div>
  )

}

export default App
