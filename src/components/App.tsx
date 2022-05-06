import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/_global.scss'
import '../styles/_typography.scss'
import cl from './app.scss'
import SortList from './SortList/SortList';
import UsersPage from '../pages/UsersPage/UsersPage';
import UserInfoPage from '../pages/UserInfoPage/UserInfoPage';


const App: React.FC = () => {

    const [selectedSort, setSelectedSort] = useState<string>("id");

    const user = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }

    const options = [
      {
        groupName: "group1",
        value: "city",
        label: "По городу"
      },
      {
        groupName: "group1",
        value: "company",
        label: "По компании"
      },
    ]

    const sortUsers = (selectedSort : string) => {
        setSelectedSort(selectedSort);
    }

    return (
        <div className={cl.app}>
            <div className={cl.sort_block}>
                <SortList options={options} selectedValue={sortUsers}/>
            </div>
            <div className={cl.content_block}>
                <UsersPage sortBy={selectedSort}/>
                {/* <UserInfoPage user={user}/> */}
            </div>
            
        </div>
    );
};

export default App;
  
  