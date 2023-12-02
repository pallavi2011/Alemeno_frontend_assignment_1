To run frontend enter below command:

npm run dev

To run backend dummy json web server type below command:

npx json-server db.json --port 3030

For real-time likes api please check file "Card.jsx" and uncomment below code and restart boh frontend and backend:- Step 1:- Uncomment below code in Card.jsx // useEffect(() => {

// const interval = setInterval(() => { // // Poll the server for new data. // fetch("https://localhost:3030/courses") // .then(res => res.json()) // .then( // (result) => { // setLikes(courses.likes); // }

// )

// }, 1000); // return () => clearInterval(interval); // }, []);

Step 2:- update likes in db.json file and check the same getting updated in frontend.
