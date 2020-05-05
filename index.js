// Add your code here

let configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
};

fetch(destinationURL, configurationObject);