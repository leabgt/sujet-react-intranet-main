
const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const random = JSON.parse(localStorage.getItem("random"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("random");
    localStorage.removeItem("status");
    localStorage.removeItem("collaborator");
    window.location.href = "/connexion";
  };

  const profil = () => {
    window.location.href = "/profil";
  };

  const showList = () => {
    window.location.href = "/liste"
  }


  return (
    <>
      <h2>Bievenue sur Intranet</h2>
      <h3>Avez vous dit bonjour à : </h3>
      <p onClick={showList}>Liste</p>
      <p onClick={logout}>Logout</p>
      <img src={user.photo} alt={user.name} onClick={profil}></img>
      
      <div>
        <img src={random.photo} alt={random.firstname}></img>
        <p>{random.firstname} {random.lastname} ({random.age} ans)</p>
        <p>{random.email}</p>
        <p>{random.phone}</p>
        <p>Anniversaire : {random.birthdate}</p>
      </div>

      <div>

      </div>
    </>
  );
}
 
export default Home;