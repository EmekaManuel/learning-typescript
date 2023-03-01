// original code 
// const year = document.getElementById("year") as HTMLElement
// const thisYear:number = new Date().getFullYear();
// year?.setAttribute("dateTime", thisYear)
// year?.textContent = thisYear 

//first variation
// let year: HTMLElement | null 
// year = document.getElementById("year") 

// let thisYear: string
// thisYear = new Date().getFullYear().toString();
// if (year) {

//     year.setAttribute("dateTime", thisYear)
//     year.textContent = thisYear 
// }

//second variation
// const year = document.getElementById("year") as HTMLSpanElement
// const thisYear: string = new Date().getFullYear().toString();
// year.setAttribute("dateTime", thisYear)
// year.textContent = thisYear 