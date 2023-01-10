const Liste = () => {
    

    const collaborator = JSON.parse(localStorage.getItem("collaborator"));
    return (
      <>
        <h2>Liste des collaborateurs</h2>
    
        <div>
            {collaborator.map(function(data, keys){
                return(
                <div key={keys}>
                    <img src={data.photo} alt={data.firstname}></img>
                    <h3> {data.firstname} {data.lastname} ({data.age}ans) </h3>
                    <p>{data.service}</p>
                    <p>{data.city} {data.country}</p>
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                    <p>Anniversaire {data.birthdate}</p>
                </div>  
                )}
            )}
       </div>
      </>
    );
 }
 
 export default Liste;