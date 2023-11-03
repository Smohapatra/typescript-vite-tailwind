import { useState } from "react";
import { List } from "./List";

function ListApp() {
  const [listEls, setListEls] = useState(['one', 'two', 'three']);
  const [secondListEls, setSecondListEls] = useState(['four', 'five', 'six']);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleInputChange = (item: string) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(prev => prev.filter(i => i !== item));
    } else {
      setCheckedItems(prev => [...prev, item]);
    }
  }

  const left = () => {
    let newList: string[] = [];
    for (let i = 0; i < checkedItems.length; i++) {
      if (!listEls.includes(checkedItems[i])) {
        newList = [...newList, checkedItems[i]];
      }
    }
    setListEls(prev => [...prev, ...newList]);
    setSecondListEls(prev => prev.filter(i => !newList.includes(i)));
    setCheckedItems([]);
  }

  const right = () => {
    let newSecList: string[] = [];
    for (let i = 0; i < checkedItems.length; i++) {
      if (!secondListEls.includes(checkedItems[i])) {
        newSecList = [...newSecList, checkedItems[i]];
      }
    }
    setSecondListEls(prev => [...prev, ...newSecList]);
    setListEls(prev => prev.filter(i => !newSecList.includes(i)));
    setCheckedItems([]);
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <List items={listEls} checkedItems={checkedItems} handleChange={handleInputChange} />
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <button onClick={left} style={{ width: '60px', height: '40px', border: 'solid 1px black'}}>&lt;</button>
          <button onClick={right} style={{ width: '60px', height: '40px', border: 'solid 1px black'}}>&gt;</button>
        </div>
        <List items={secondListEls} checkedItems={checkedItems} handleChange={handleInputChange} />
      </div>
    </>
  )
}

export default ListApp;
