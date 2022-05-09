import React from 'react';
import cl from './sortList.scss'

interface OptionProps {
    value: string;
    label: string;
    groupName: string;
}

interface SortListProps {
    options: OptionProps[];
    selectedValue?: (value: string) => void;
    isShowSortListLabel?: boolean;
}

const SortList: React.FC<SortListProps> = ({ 
    options = [],
    isShowSortListLabel = true,
    selectedValue = () => {}
}) => {
    
    return (
        <div className={cl.sort_list_block}>
            {isShowSortListLabel
                ? <h2 className={cl.sort_list_label}>Сортировка</h2>
                : null
            }
            <div className={cl.sort_list_select_wrapper}>
                {options.map(option => 
                    <label key={`${option.groupName}-${option.value}`} className={cl.sort_list_select}>
                        <input type="radio" name={option.groupName} value={option.value} onChange={(e) => {selectedValue(e.target.value)}}/>
                        {option.label}
                    </label>
                )}
            </div>
        </div>
        
    );
}

export default SortList;