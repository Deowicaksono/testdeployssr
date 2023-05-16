import { useEffect } from "react";

export default () => {

    useEffect(() => {
        getDataApi()
    },[]);


    async function getDataApi(){
        const data= await fetch('/api/api_test')

        let dataGet= await data.json()

        console.log(dataGet)
    }

    return(
        <>
            <div>
                <p>
                    Welcome to contact
                </p>
            </div>
        </>
    )

}