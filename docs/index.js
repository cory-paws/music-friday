const crew = [];
crew.push("Dad");
crew.push("Finn");
crew.push("Cory");

crew.forEach((member,index) => console.log(index+". "+ member));


const year = [];

let crewNo = 2;

for(let x = 0; x < 53; x++){
    year[x] = crew[crewNo];
    crewNo = crewNo + 1;
    if (crewNo +1 > crew.length){
        crewNo = 0; 
    }
    console.log(x+". "+year[x]);
}

const getWeekNumber = d => {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo;
}

const now = new Date();

const weekOfYear = getWeekNumber(now);
console.log("Todays week number is "+weekOfYear);
const statement = ""+year[weekOfYear];

console.log(statement);

const element = document.getElementById("who");
element.innerText = statement;

const dateElemenet = document.getElementById("date");
dateElemenet.innerText = new Intl.DateTimeFormat('en-GB').format(now)