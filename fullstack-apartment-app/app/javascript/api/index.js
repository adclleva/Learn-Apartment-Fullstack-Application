const getApartments = () => {
    return fetch('/apartments')
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                return Promise.new(() => {
                    resolve({error: 'There was an error.'})
                })
            }
        })
}


export {
    getApartments
}