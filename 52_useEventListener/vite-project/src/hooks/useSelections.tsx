import { useSafeState, useCreation } from './hooks.ts';

const useSelections = <T,>(lists: T[], initValues: T[] = []) => {
    const [selected, setSelected] = useSafeState<T[]>(initValues);
    
    // 通过new Set去处理选中的数据时，转化为数组需要使用Array.from
    const selectedSet = useCreation(() => new Set(selected), [selected])
}