import React from 'react';
import cl from './sortList.scss'

interface SortListProps {
    isShowSortListLabel?: boolean;
}

const SortList: React.FC<SortListProps> = ({ 
    isShowSortListLabel = true,
}) => {
    
    return (
        <div className={cl.sort_list_block}>
            {isShowSortListLabel
                ? <h2 className={cl.sort_list_label}>Сортировка</h2>
                : null
            }
            <div className={cl.sort_list_select_wrapper}>
                <button className={cl.sort_list_select}> По городу </button>
                <button className={cl.sort_list_select}> По компании</button>
            </div>
        </div>
        
    );
}

export default SortList;