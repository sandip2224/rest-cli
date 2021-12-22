const axios = require('axios')

const getTodo = async () => {
    try {
        const res = await axios.get('http://localhost:3000/api/todo/61c29b8a096af42f58d09512')
        console.log(res)
    }
    catch (err) {
        console.log("ERROR")
        console.log(err)
    }
}

getTodo()