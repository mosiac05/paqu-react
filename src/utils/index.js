export const getData = (data=[], item='', id='') => {
    const resultObj = data.find(dataItem => dataItem.id.toString() === id.toString())
    if(!resultObj) {
        return ''
    }

    return resultObj[item]
}

export const shuffleArray = (array) => {
   return array.sort(() => Math.random() - 0.5);
}