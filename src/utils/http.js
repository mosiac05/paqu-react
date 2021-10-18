export const fetchData = async (resource = 'universities') => {
    try {
        const response = await fetch(`https://paqu-app-default-rtdb.firebaseio.com/${resource}.json`)
        
        if(!response.ok) {
            return []
        }

        const data = await response.json()
        console.log('Data::', data);
        const results = []

        for (const key in data) {
            const itemData = {id: key}
            for (const itemKey in data[key]) {
                if(itemKey !== 'id') {
                    itemData[itemKey] = data[key][itemKey]
                }
            }
            results.push(itemData)
        }

        console.log('Results'+resource, results);
        return results
    } catch(error) {
        return []
    }
}