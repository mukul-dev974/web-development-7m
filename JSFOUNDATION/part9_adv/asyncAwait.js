function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           reject({ name: "chaicode", url: "https://chaicode.com"}); 
        }, 3000);
    });
}

async function getUserData(){
    try {
        console.log("Fetching user data...");
        const userdata = await fetchUserData();
        console.log("User data fetched successfully");
        

        console.log("user data: ", userdata);
        
        
    } catch (error) {
        console.log("error fetching data",  error);
        
    }
}

getUserData();