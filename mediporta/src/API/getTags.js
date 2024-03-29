const getTags = async () => {
    try {
        const response = await fetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow')
        const data = await response.json()

        return { data: data }
    } catch (err) {

        return { data: {error_message: err}}
    }
}

export default getTags