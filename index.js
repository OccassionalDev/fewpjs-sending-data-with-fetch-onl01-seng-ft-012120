// Add your code here

let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};

let configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
  })
};

fetch(destinationURL, configurationObject);