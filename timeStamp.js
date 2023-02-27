class timeStamp{
    constructor(h,m,s,ms,time){
        this.h = h
        this.m = m
        this.s = s
        this.ms = ms
        this.time = time
    }
}
let currentExpectedHitTime = new timeStamp
let currentActualHitTime = new timeStamp
let noteOffTime = new timeStamp

// Creates accessible and understandable time signatures for the currentActualHitTime, 
// currentExpectedHitTime and noteOffTime. This allows us to work out the differenceInHitTime
// and timeHeldNote.
function createTime(x,n){
    while(x.toString().length < n){
        x = "0" + x
    }
    return parseInt(x)
}