const apiBaseUrl = "https://itsusersform.free.beeceptor.com";

function getUsers(){
	const endpoint = "/users";
  
	axios.get(`${apiBaseUrl}${endpoint}`).then(response=>{
  	const users = response.data.data;
  	console.log(users);
  });	
}
function addUser() {
  const endpoint = "/user";
  axios.post(`${apiBaseUrl}${endpoint}`, {
      firstName: 'Ramesh',
      lastName: 'K',
      dob: '06-10-2000',
      phonenumber: '8456488484',
      emailaddress: 'ram0064@gmail.com'
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}


getUsers();
addUser();

