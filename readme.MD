### Instructions to Set Up and Run the Node.js Application

1.  Verify Root Directory : Ensure that you are in the root directory of your project.

2. Navigate to the 'chatbot' Directory:
 
   cd chatbot
   

3. Install Dependencies: Use npm to install all necessary dependencies.
 
   npm i
  

4. Run the Application: Use `npx` to start the application with `nodemon` for automatic restarts upon file changes.
    
   npx nodemon app.js
 

### API Endpoint Details

Endpoint: `http://localhost:4000/generate`

Method: POST

#### Request Body

The API expects a JSON object with the following structure:
 BODY 
{
    "prompt": "okay and what is 20 + your given answer"
}
 


#### Response

{
    "response": "20 + 12 = 32"
}
 