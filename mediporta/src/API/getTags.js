const getTags = async () => {
    const response = await fetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow')
    const data = await response.json()

    return data
}

export default getTags