
const potentialMatch = [
  {
    id: 1,
    Fname: "Ranjana",
    Lname: "Waiba",
    age: 19,
    gender: "Female",
    maritalStatus: "single",
    location: {
      permanentLocation: { city: "Kavre", country: "Nepal" },
      currentLocation: { city: "Australia", country: "USA" },
    },
  },
  {
    id: 2,
    Fname: "Rajina",
    Lname: "Gurung",
    age: 24,
    gender: "female",
    maritalStatus: "single",
    location: {
      permanentLocation: { city: "Dhading", country: "Canada" },
      currentLocation: { city: "Kathmandu", country: "Nepal" },
    },
  },
  {
    id: 3,
    Fname: "Nirjal",
    Lname: "Giri",
    age: 22,
    gender: "male",
    maritalStatus: "married",
    partnerName: "sushmita",
    location: {
      permanentLocation: { city: "Jhapa", country: "Delhi" },
      currentLocation: { city: "bangalore", country: "India" },
    },
  },
];


//bakended api response
const shadiResponse = {
  status: 200,
  message: "Potential match fetched successfully",
  data: potentialMatch,
};







const getPerfectMatch = () => {
  if (shadiResponse.status === 200) {
    shadiResponse.data.map((candidate) => {
      const { gender, age, maritalStatus, location } = candidate; // Destructure the candidate object
      const Myrequirements =
        (gender === "male" && age >= 20) || maritalStatus === "single";
      if (Myrequirements) {  // ternary operator // for resuable /simple banauna
        
        if (location.currentLocation.country === "USA") {
          console.log( // else   in  summay if else in   ternary operator 
            `Perfect Match Found: ${candidate.Fname} ${candidate.Lname}, Age: ${candidate.age}, Location: ${location.currentLocation.city}, ${location.currentLocation.country}`
          );
        }
      }
    });
  }
};
getPerfectMatch();