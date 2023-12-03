import { useState } from "react";
import './App.css';

const dirStructure = {
  'children': [
    {
      'children': [
        {
          'children': [
            {
              'children': [],
              'name': 'file1.txt'
            },
            {
              'children': [],
              'name': 'file2.txt'
            },
            {
              'children': [
                {
                  'children': [],
                  'name': 'file3.txt'
                }
              ],
              'name': 'folder3'
            }
          ],
          'name': 'subfolder1'
        },
        {
          'children': [],
          'name': 'subfolder2'
        }
      ],
      'name': 'folder1'
    },
    {
      'children': [
        {
          'children': [],
          'name': 'file3.txt'
        }
      ],
      'name': 'folder2'
    },
    {
      'children': [],
      'name': 'file4.txt'
    }
  ],
};

const DisplayDir = ({ name, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setOpen(!open)}>{name}</div>
      {open && children.map((child, idx) => {
        if (child.children.length === 0) {
          return (
            <div key={idx} className="ml-2">
              {child.name}
            </div>
          );
        } else {
          return (
            <div key={idx} className="ml-2">
              <DisplayDir name={child.name} children={child.children} />
            </div>
          );
        }
      })}
    </div>
  );
}

function App() {

  return (
    <div>
      {dirStructure.children.map((child, idx) => {
        return (
          <div key={idx}>
            <DisplayDir name={child.name} children={child.children} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
