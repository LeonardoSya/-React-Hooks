import React from 'react';

interface ListItemProps {
    data: string,
    isSelected: boolean;
    onToggle: (data: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ data, isSelected, onToggle }) => (
    <div
        style={{
            backgroundColor: isSelected ? 'lightblue' : 'white',
            padding: '8px',
            margin: '4px',
            cursor: 'pointer',
        }}
        onClick={() => onToggle(data)}
    >
        {data}
    </div>
)

export default ListItem;