async function fetchGetData(){
    try{

        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        if(!response.ok){
            throw new error('HTTP Error Status : ${response.status}');
        }
        
        let data = await response.json();
        console.log(data)

    }catch(error){
        console.log(error);
    }
}

fetchGetData()