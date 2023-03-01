"use strict";
// let myName: string = "dave"
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: string | number
// myName = "43"
// meaningOfLife = 77;
// isLoading = true;
// album = 23
// const sum = (a:number,b:string) =>{
//     return a + b
// }
// let isActive : number | boolean | string
// let postID : string | number
// let re:RegExp = /\w+/g
//lesson 3
// let stringArray = ["manuel", "david", "chioma"]
// let cars = ["volvo", "ford", 1092]
// let mixedData = ["manuel", 1223, false]
// stringArray[0] = "john"
// stringArray.push("clara")
// cars[0] = 1984
// cars.unshift("true")
// let test = []
// let bards: string[] = []
// bards.push("manuel");
// //TUPLES
// let myTuple: [string, number, boolean] = ["dave", 1234, true];
// let mixed = ["john", 111, false]
// myTuple[1] = 43
// //Objects 
// let myObject: object 
// myObject = []
// console.log(typeof myObject)
// myObject = bards
// myObject = {}
// const exampleObjext = {
//     prop1: "dave",
//     prop2: true,
// }
// exampleObjext.prop2 = false
// exampleObjext.prop1 = "femi"
// type Guitarist = {
//     name: string,
//     active?: boolean,
//     albums: (string | number )[]
// }
// interface Musician {
//     name?: string,
//     active: boolean,
//     albums: (string | number )[]
// }
// let wizkid:Musician = {
//     name: "wizzy",
//     active: true,
//     albums: ["mil", "ojuelegba", "mil2"]
// }
// let evh:Guitarist = {
//     name: "manus",
//     active: true,
//     albums: [112, "face of zik"]
// }
// let jim:Guitarist = {
//     name: "jimmy",
//     active: false,
//     albums: ["I", "II", "IIII"]
// }
// const getAJob = (process: Guitarist) => {
//     return `hello ${process.name}`
// }
// const getMusicianData = (musician: Musician) => {
//     if (musician.name) {
//         return `hello ${musician.name?.toUpperCase()}`
//     } 
//     return "Hello !"
// }
// console.log(getAJob(jim))
// console.log(getMusicianData(wizkid))
//enums
// enum Grade {
//     U = 1,
//     D,
//     C,
//     B,
//     A,
// }
// console.log(Grade.U)
// FUNCTIONS
//TYPE ALIASES
// type stringOrNumber = string | number
// type stringOrNumberArray = (string | number)[]
// type Guitarists = {
//     name?: string,
//     active: boolean,
//     album: (string | number)[]
// }
// type UserId = stringOrNumber
// //literal types 
// let myName: "Dave"
// let myUser: "Dave" | "Jogn" | "Clara"
// myUser = "Jogn" 
//FUNCTIONS
// const add = (a:number, b:number):number => {
//     return a + b
// }
// const logMsg = (message:any): void => {
//     console.log(message)
// }
// logMsg("hello")
// logMsg(add(2,3))
// const subtract = function(c:number, d:number):number {
// return c - d
// }
// type mathFunction = (a:number,b:number) => number
// interface mathFunction {
//     (a:number,b:number): number
// }
// let multiply: mathFunction = function (c,d) {
//     return c* d
// }
// logMsg(multiply(2,3))
// //optional params
// const addZAll = (a:number,b:number,c?:number) => {
//         if(typeof c !== "undefined") {
//           return  a + b + c
//         }
//         return a + b
// }
// //default param value
// const sumAll = (a:number=10,b:number,c:number=2) => {
//         return a + b + c
// }
// logMsg(addZAll(1,1,1))
// logMsg(addZAll(1,1))
// logMsg(sumAll(undefined,2))
//rest parameters
// const total = (...nums:number[]):number => {
//  return nums.reduce((prev, curr) => prev + curr)
// }
// logMsg(total(1,2,3,4))
// const createError = (errMsg: string) => {
//     throw new Error(errMsg)
// }
// const infinite = () => {
//     let i:number = 1
//     while (true) {
//         i++
//         if (i > 100) break
//     }
// }
// CUSTOM TYPE GUARD
// const isNumber = (value:any):boolean => {
// return typeof value === "number"
// ?true : false
// }
// USE OF NEVER TYPE
// const numberOrString = (value: number | string):string => {
//     if(typeof value === "string" ){
//         return "string"
//     }
//     if (isNumber(value)) {
//         return "number"
//     }
//     return createError ("This should never happen")
// }
// type One = string;
// type Two = string | number;
// type Three = "hello"
// //convert to more or less specific 
// let a:One = "hello"
// let b = a as Two //less specific
// let c = a as Three // more specific
// let d = <One>"word"
// let e = <string | number>"word"
// const addOrConcat = (a:number, b:number, c:"add" | "concat"): number | string => {
//     if (c === "add" ) return a + b
//     return " " + a + b
// }
// let myVal:string = addOrConcat(2,2,"concat") as string
// //be careful TS sees no problem but a string is returned
// let nextVal:number = addOrConcat(2,2,"add") as number
// ( 10 as unknown) as string
//the DOM
// const img = document.querySelector('img') !
// const myImg = document.getElementById('#img') as HTMLImageElement
// const nextImage = <HTMLImageElement>document.getElementById('#img')
// img.src
// myImg.src
// class Coder {
//     secondLand!:string
//     constructor(
//         public readonly name:string,
//         public music:string, 
//         private age:number, 
//         protected lang:string = "Typescript"
//         ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
//     public getAge () {
//         return `Hello  I am ${this.age} years old`
//     }
// }
// const Dave = new Coder ("Dave", "Rock", 12)
// console.log(Dave.getAge())
// // console.log(Dave.name)
// // console.log(Dave.lang)
// class webDev extends Coder{
//     constructor(
//         public computer: string,
//         name:string,
//         age:number,
//         music:string
//     ) {
//         super(name, music, age)
//         this.computer = computer
//     }
//     public getLang() {
//         return `I write ${this.lang}`
//     }
// }
// const Sara = new webDev ("Mac", "Sara", 12, "Classical")
// console.log(Sara.getLang())
// // console.log(Sara.age)
// // console.log(Sara.lang)
// //************************************************************************************************//
// interface Musician {
//     name:string,
//     instrument: string,
//     play(action:string) : string
// }
// class Guitarist implements Musician {
//     name: string
//     instrument: string
//     constructor(name:string, instrument: string) {
//         this.name = name
//         this.instrument = instrument
//     }
//     play(action:string){
//         return ` ${this.name} ${action} the ${this.instrument}`
//     }
// }
// const Page = new Guitarist ("Jimmy", "guitar")
// console.log((Page.play("bangs")))
// //*********************************************************************************************//
// class Peeps {
//     static count: number = 0
//     static getCount(): number {
//         return Peeps.count
//     }
//     public id: number 
//     constructor(public name: string) {
//         this.name= name
//         this.id = ++Peeps.count
//     }
// }
// const John = new Peeps("Jihn")
// const Jude = new Peeps("Jude")
// const James = new Peeps("James")
// console.log(Peeps.count)
// console.log(James.id)
// //*********************************************************************************************//
// class Bands {
//     private dataState: string[]
// constructor(){
//     this.dataState = []
// }
// public get data(): string[] {
//     return this.dataState
// }
// public set data(value: string[]) {
//      if (Array.isArray(value) && value.every(el => typeof el === "string")) {
//         this.dataState = value
//         return 
//      } else throw new Error("param is not an array of strings")
// }
// }
// const myBands = new Bands()
// myBands.data = ['Neisl young', 'led siped']
// console.log(myBands.data)
// myBands.data = [ ...myBands.data, "ZZ"]
// console.log(myBands.data)
// Index signatures
// interface Transactions {
//     [index: string]: number 
// }
// interface  Transactions  {
//         [index: string]: number 
//     Pizza:number,
//     Books: number,
//     Job: number
// }
// const todaysTransactions: Transactions = {
//     Pizza : -10,
//     Books: -5,
//     Job: 50,
//     Dave: 23
// }
// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions["Pizza"])
// let prop: string = "Pizza"
// console.log(todaysTransactions[prop])
// const todaysNet = (transactions: Transactions):number => {
//     let total = 0
//     for (const transaction in transactions ) {
//         total += transactions[transaction]
//     }
//     return total
// }
// console.log(todaysNet(todaysTransactions))
// todaysTransactions.Pizza = 40
// console.log(todaysTransactions['Dave'])
// ///////////////////////////////////////////////////////////////////////////////
// interface Student {
//     // [key: string]: string | number | number[] | undefined
//     name: string,
//     GPA: number,
//     classes?: number[]
// }
// const student: Student = {
//     name: "Doug",
//     GPA: 3.5,
//     classes: [100, 200]
// }
// // 
// for (const key in student) {
//     console.log(`${key}: ${student[key as keyof Student]}`)
// }
// Object.keys(student).map(key => {
//     console.log(student[key as keyof typeof student])
// })
// const logStudentKey = (student: Student, key: keyof Student): void => {
//     console.log(`student ${key}: ${student[key]}`)
// }
// logStudentKey(student, "classes")
// interface Incomes {
//     [key: string | number]: number
// }
// type Streams = "salary" | "bonus" | "sidehustle"
// type Incomes = Record<Streams, number>
// const monthlyIncomes: Incomes = {
//     "salary": 300,
//     "bonus": 100,
//     "sidehustle" : 300
// }
// for (const revenue in monthlyIncomes) {
//     console.log(monthlyIncomes[revenue as keyof Incomes])
// }
//Generics
const echo = (arg) => arg;
const isObject = (arg) => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
};
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const isBoolean = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process user with the logic here 
    return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentIs: "bqecbvqjv",
    title: "final project",
    grade: 11
};
console.log(updateAssignment(assign1, { grade: 20 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
//required and readonly
const recordAssignment = (assign) => {
    //send to a database
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
//record 
const hexColorMap = {
    red: "ffooo",
    blue: "dike",
    black: "000"
};
const finalGrades = {
    Sara: "A",
    kely: "C"
};
