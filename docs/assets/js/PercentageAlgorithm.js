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
   
   
  
   
    
 calcConstants(user) {
   var universal = 100/(this.weight1 + this.weight2 + this.weight3 + this.weight4 + this.weight5 + this.weight6 + this.weight7);
 if (this.dorm == user.dorm) {
    this.dormConstant = universal;
 }
 else {
   this.dormConstant = 0;
 }
  
 if (this.diningHall == user.diningHall) {
    this.diningHallConstant = universal;
 }
 else {
   this.diningHallConstant = 0;
 }
 if (this.courses = user.courses)
    {
    this.coursesConstant = universal;
 }
 else {
   this.coursesConstant = 0;
 }
  
 if (this.clubs == user.clubs)
        {
    this.clubsConstant = universal;
 }
 else {
   this.clubsConstant = 0;
 }
  
 if (this.study == user.study) {
    this.studyConstant = universal;
 }
 else {
   this.studyConstant = 0;
 }
 if (this.games == user.games) {
    this.gamesConstant = universal;
 }
 else {
   this.gamesConstant = 0;
 }
 if (this.crc == user.crc) {
    this.crcConstant = universal;
 }
 else {
   this.crcConstant = 0;
 }
    }
  calcPercentage() {
   
   var percentage = Math.round((this.weight1 * this.dormConstant) + (this.weight2 * this.diningHallConstant) + (this.weight3 * this.coursesConstant) + (this.weight4 * this.clubsConstant)
 + (this.weight5 * this.studyConstant) + (this.weight6 * this.gamesConstant) + (this.weight7 * this.crcConstant));
 return percentage;
  
   
 }
 
}