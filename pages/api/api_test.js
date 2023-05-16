let apiTemp="https://jsonplaceholder.typicode.com/users"

export default async function testApiSSR (req,res) {
    const result=await fetch(apiTemp)

    let resTemp= await result.json()

    
    res.json(resTemp)
}

