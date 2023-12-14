/*
 * @Author: LeonardoSya 2246866774@qq.com
 * @Date: 2023-12-14 15:13:19
 * @LastEditors: LeonardoSya 2246866774@qq.com
 * @LastEditTime: 2023-12-14 22:36:21
 * @FilePath: \React\深入理解React Hooks\52_useEventListener\vite-project\src\components\List.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

const List: React.FC<ListProps> = ({items, selections}) => (
    <div>
        {items.map((item) => {
            <ListItem
                key={item}
                data={item}
                isSelected={selections.isSelected(item)}
                onToggle={selections.toggle}
            />
        })}
    </div>
);

export default List;