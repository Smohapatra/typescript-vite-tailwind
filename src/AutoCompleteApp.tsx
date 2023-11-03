import { useState, useEffect, useRef, ChangeEvent } from "react";

const WORDS = [
  "banana",
  "cherry",
  "blueberry",
  "chocolate",
  "coconut",
  "cranberry",
  "cucumber",
  "butter",
  "cheese",
  "carrot",
  "broccoli",
  "cabbage",
  "bagel",
  "cantaloupe",
  "cashew",
  "clementine",
  "bluebell",
  "caramel",
  "blackberry",
  "biscuit"
];

const useDebouncedValue = (callback: (inputVal: string) => void) => {
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if(timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  }, [])

  const debouncedValue = (inputVal: string) => {
    if(timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      callback(inputVal);
    }, 500)
  }

  return debouncedValue;
}

function App() {
  const [value, setValue] = useState<string>('');
  const [suggList, setSuggList] = useState<string[]>([]);

  const handleDebouncedValue = useDebouncedValue((inputVal) => {
    if (inputVal === '') {
      setSuggList([]);
      return;
    }

    const suggesList: string[] = [];
    WORDS.forEach(word => {
      if (word.substring(0, inputVal.length) === inputVal) {
        suggesList.push(word);
      }
    })
    setSuggList(suggesList);
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    handleDebouncedValue(value);
  }

  const handleSugestionClick = (sugg: string) => {
    setValue(sugg);
    setSuggList([]);
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <div style={{ margin: '20px', width: '300px', position: 'relative'}}>
          <input onChange={handleInputChange} value={value} style={{ width: '100%', padding: '10px', height: '40px'}} />
          {suggList.length > 0 && <ul style={{padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px', border: 'solid 1px black', borderRadius: '10px', marginTop: '8px'}}>
            {suggList.map((sugg, idx) => (
              <li key={idx}>
                <div onClick={() => handleSugestionClick(sugg)}>{sugg}</div>
              </li>
            ))}
          </ul>}
        </div>
      </div>
    </>
  )
}

export default App;
