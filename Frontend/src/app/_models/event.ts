export class Event {
    constructor(public id:number, 
                public title:string, 
                public eventDate:Date, 
                public mainSpeaker:string, 
                public otherSpeakers:string[],
                public students:number[])
                {}
}
