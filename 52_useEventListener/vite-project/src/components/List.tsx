import React from 'react';
import ListItem from './ListItem';

interface ListProps {
    items: string[];
    selections: {
        isSelected: (data: string) => boolean;
        toggle: (data: string) => void;
        selectAll: () => void;
        unSelectAll: () => void;
        selected: string[];
    };
}

const List: React.FC<ListProps> = ({ items, selections }) => (
    <div>
        {items.map((item) => (
            <ListItem
                key={item}
                data={item}
                isSelected={selections.isSelected(item)}
                onToggle={selections.toggle}
            />
        ))}
    </div>
);

export default List;