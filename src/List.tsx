type Props = {
    items: string[],
    checkedItems: string[],
    handleChange: (item: string) => void
}

export const List = ({ items, checkedItems, handleChange }: Props) => {
    return (
        <div style={{border: 'solid 1px black', width: '300px', height: '400px', margin: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <ul>
                {items.map((item, i) => {
                    return (
                        <li key={i} style={{ margin: '20px'}}>
                            <input type="checkbox" style={{ margin: '8px'}} onChange={() => handleChange(item)} checked={checkedItems.includes(item)} />
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>

    );
}