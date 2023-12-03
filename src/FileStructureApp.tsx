import { useState } from "react";
import './App.css';

const dirStructure = {
  "root": {
    "folder1": {
      "subfolder1": {
        "file1.txt": null,
        "file2.txt": null,
        "folder3": {
          "file3.txt": null
        },
      },
      "subfolder2": {}
    },
    "folder2": {
      "file3.txt": null
    },
    "file4.txt": null
  }
};

interface DirStructure {
  [key: string]: DirStructure | null;
}

const DisplayDir = ({ dir, name = '' }: { dir: DirStructure, name?: string }) => {
  const [open, setOpen] = useState(() => {
    if (name === '') {
      return true;
    }
    return false;
  });

  return (
    <div>
      <div onClick={() => setOpen(!open)}>{name}</div>
      {open && Object.keys(dir).map((key, idx) => {
        if (dir[key] === null) {
          return (
            <div key={idx} className="ml-2">
              {key}
            </div>
          );
        } else {
          return (
            <div key={idx} className="ml-2">
              <DisplayDir dir={dir[key] as DirStructure} name={key} />
            </div>
          );
        }
      })}
    </div>
  );
}

function App() {

  return (
    <DisplayDir dir={dirStructure} />
  );
}

export default App;
