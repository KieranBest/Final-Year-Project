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
