// Add your code here

function submitData(name, email) {
  let formData = {
    
  };
  
  let configObj = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
  
  return fetch("http://localhost:3000/users", configObj);
}