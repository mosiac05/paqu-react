import { useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Card from '../components/UI/Card';
import './Table.css'

const Table = ({ title, items, columns, pathToLoad }) => {
    // Set filtered state
    const [filteredItems, setFilteredItems] = useState([])
    // console.log(filteredItems);
    const router = useHistory()
    const location = useLocation()

    // Re-render component when items change
    useMemo(() => setFilteredItems(items), [items])

    // Filter items by search
    const filterHandler = (event) => {
        const searchTerm = event.target.value.trim().toLowerCase()
        if(searchTerm !== '') {
            const theFiltered = items.filter(item => item.name.toLowerCase().includes(searchTerm))
            setFilteredItems(theFiltered)
        } else {
            setFilteredItems(items)
        }
    }

    // Load new page
    const loadPageHandler = (event) => {
        let url = location.pathname
        if(!location.pathname.endsWith('/')) {
            url += '/'
        }
        router.push(url+event.target.id+pathToLoad);
    }

    return (
        <Card className="table-list">
            <div className="filter">
                <input 
                    className="filter-input" 
                    onChange={filterHandler}
                    placeholder="Type here to filter results..." />
                <button className="filter-clear">{filteredItems.length}</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th width="5%">S/N</th>
                        {columns.map((column, index) => (
                            <th key={'column'+index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.length > 0 && filteredItems.map((item, index) => {
                        return <tr key={'item'+index}>
                            <td width="5%">{index+1}.</td>
                            <td
                                onClick={loadPageHandler} 
                                id={item.id} 
                            >
                                {item.name}
                            </td>
                        </tr>
                    })}
                    {filteredItems.length < 1 && (
                        <tr>
                            <td colSpan={(columns.length + 1).toString()} style={{textAlign: 'center'}}>No {title.toLowerCase()} found</td>
                        </tr>
                    )}
                </tbody>
                {/* <tfoot>
                    <tr>
                        <th>S/N</th>
                        <th>Universities</th>
                    </tr>
                </tfoot> */}
            </table>
        </Card>
    )
}

export default Table