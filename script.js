/* 
Create strorage for names

When user clicks Btn  random name is generated/chosen from list of 110 names.

Store selected name

Random name is then display
*/

const nameDisplay = document.querySelector("#name-display")
const nameGenBtn = document.querySelector("#gen-name")

const nameList = ['Liam','Noah','Oliver','James','Elijah','William','Henry','Lucas','Benjamin','Theodore','Mateo','Levi',
                'Sebastian','Daniel','Jack','Michael','Alexander','Owen','Asher','Samuel','Ethan','Leo','Jackson','Mason',
                'Ezra','John','Hudson','Luca','Aiden','Joseph','David','Jacob','Logan','Luke','Julian','Gabriel','Grayson',
                'Wyatt','Matthew','Maverick','Dylan','Isaac','Elias','Anthony','Thomas','Jayden','Carter','Santiago','Ezekiel',
                'Charles','Josiah','Caleb','Cooper','Lincoln','Miles','Christopher','Nathan','Isaiah','Kai','Joshua','Andrew',
                'Angel','Adrian','Cameron','Nolan','Waylon','Jaxon','Roman','Eli','Wesley','Aaron','Ian','Christian','Ryan',
                'Leonardo','Axel','Jonathan','Everett','Robert','Jameson','Landon','Silas','Jose','Beau','Micah','Colton',              
                'Jordan','Jeremiah','Parker','Greyson','Rowan','Adam','Nicholas','Theo','Xavier','Hunter','Dominic','Jace',
                'Gael','River','Thiago','Kayden','Damian','August','Carson','Austin','Myles','Amir','Emmett']

    function generateName() {
    let result = nameList[Math.floor(Math.random()*nameList.length)]
    nameDisplay.textContent = result
    console.log(result)
 }

nameGenBtn.addEventListener('click', generateName)