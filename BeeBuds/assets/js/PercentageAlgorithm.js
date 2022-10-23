class User{
    
    constructor(dorm, diningHall, courses, clubs, study, games, crc, weight1, weight2, weight3, weight4, weight5, weight6, weight7) {
        this.dorm = dorm;
        this.diningHall = diningHall;
        this.courses = courses;
        this.clubs = clubs;
        this.study = study;
        this.games = games;
        this.crc = crc;
        this.weight1 = weight1;
        this.weight2 = weight2;
        this.weight3 = weight3;
        this.weight4 = weight4;
        this.weight5 = weight5;
        this.weight6 = weight6;
        this.weight7 = weight7;
        this.dormConstant = 0;
        this.diningHallConstant = 0;
        this.coursesConstant = 0;
        this.clubsConstant = 0;
        this.studyConstant = 0;
        this.gamesConstant = 0;
        this.crcConstant = 0;
        
        
    }
    
    
    /*function arrayEquals(a, b) {
        return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
    }
    */
    
     
 calcConstants(user) {
   var universal = 100/(this.weight1 + this.weight2 + this.weight3 + this.weight4 + this.weight5 + this.weight6 + this.weight7);
if (this.dorm == user.dorm) {
    this.dormConstant = universal;
}

if (this.diningHall == user.diningHall) {
    this.diningHallConstant = universal;
}

if (this.courses = user.courses) 
    {
    this.coursesConstant = universal;
}

if (Array.isArray(this.clubs) &&
        Array.isArray(user.clubs) &&
        (this.clubs).length === (user.clubs).length &&
        (this.clubs).every((val, index) => val === user.clubs[index])) 
        {
    this.clubsConstant = universal;
}

if (this.study == user.study) {
    this.studyConstant = universal;
}

if (this.games == user.games) {
    this.gamesConstant = universal;
}

if (this.crc == user.crc) {
    this.crcConstant = universal;
}
    }
  calcPercentage() {
    
    var percentage = Math.round((this.weight1 * this.dormConstant) + (this.weight2 * this.diningHallConstant) + (this.weight3 * this.coursesConstant) + (this.weight4 * this.clubsConstant) 
+ (this.weight5 * this.studyConstant) + (this.weight6 * this.gamesConstant) + (this.weight7 * this.crcConstant));
return percentage;

    
}

/*static updateNum() {
    this.num++;
    //console.log(this.num);
    //console.log(User.displayPercent());
}

static displayPercent() {
    if (this.num > 0) {
    var dorm = document.getElementById("Residence Hall").value;
    var diningHall = document.getElementById("Favorite Dining Hall").value;
    var major = document.getElementById("Major").value;
    let user = new User(dorm, diningHall, major, ["BDBI", "Robojackets"], "CULC", true, true, 1, 10, 2, 10, 10, 10, 10);
    let user2 = new User("Smith", "West Village", "Biomedical Engineering", ["BDBI", "Robojackets"], "CULC", true, true, 10, 10, 2, 10, 10, 10, 10);
    user.calcConstants(user2);
    var percentMatch = user.calcPercentage();
    //document.write(percentMatch);
    //console.log(percentMatch);
    return(percentMatch);
    }
    else {
        document.write("None: Create a profile with settings to see your match!");
        return(0);
    }
}*/

}

/*let user = new User("Hanson", "North Avenue", "Computer Science", ["BDBI", "Robojackets"], "CULC", true, true, 1, 10, 2, 10, 10, 10, 10);

let user2 = new User("Smith", "West Village", "Biomedical Engineering", ["BDBI", "Robojackets"], "CULC", true, true, 10, 10, 2, 10, 10, 10, 10);
user.calcConstants(user2);
user.calcPercentage();*/
