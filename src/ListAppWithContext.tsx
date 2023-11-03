import { useState, useContext, createContext, ReactNode } from 'react';

type ListContextTypes = {
  leftList: string[];
  rightList: string[];
  selected: string[];
  handleSelected: (item: string) => void;
  left: () => void;
  right: () => void;
}

const ListContext = createContext<ListContextTypes | null>(null);

const useListContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("error")
  }
  return context;
}

type ListProviderProps = {
  children: ReactNode;
}

const ListProvider: React.FC<ListProviderProps> = ({ children }) => {
  const [leftList, setLeftList] = useState<string[]>(["one", "two", "three"]);
  const [rightList, setRightList] = useState<string[]>(["four", "five", "six"]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelected = (item: string) => {
    let currSelected = [...selected];
    if(currSelected.includes(item)) {
      currSelected = currSelected.filter(i => i !== item);
    } else {
      currSelected = [...currSelected, item];
    }
    
    setSelected(currSelected);
  }

  const left = () => {
    const currSelected = [...selected];
    let leftOne = [...leftList];
    let rightOne = [...rightList];
    currSelected.map(i => {
      if (rightOne.includes(i)) {
        rightOne = rightOne.filter(j => j !== i)
        leftOne = [...leftOne, i]
      }
    })
    setLeftList(leftOne)
    setRightList(rightOne);
    setSelected([]);
  }

  const right = () => {
    const currSelected = [...selected];
    let leftOne = [...leftList];
    let rightOne = [...rightList];
    currSelected.map(i => {
      if (leftOne.includes(i)) {
        leftOne = leftOne.filter(j => j !== i)
        rightOne = [...rightOne, i]
      }
    })
    setLeftList(leftOne)
    setRightList(rightOne);
    setSelected([]);
  }

  return (
    <ListContext.Provider value={{ leftList, rightList, selected, handleSelected, left, right }}>
      {children}
    </ListContext.Provider>
  )
}

function App() {
  return (
    <ListProvider>
      <Content />
    </ListProvider>
  )
}

function Content() {
  const { leftList, rightList, left, right } = useListContext();

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
      <List items={leftList} />
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <button onClick={left}>&lt;</button>
        <button onClick={right}>&gt;</button>
      </div>
      <List items={rightList} />
    </div>
  )
}

export default App;

type ListProps = {
  items: string[];
}

function List({ items }: ListProps) {
  const {selected, handleSelected} = useListContext();

  return (
    <ul>
      {items.map(item => (
        <li key={item}>
          <input type='checkbox' checked={selected.includes(item)} onChange={() => handleSelected(item)}/>
          {item}
        </li>
      ))}
    </ul>
  )
}