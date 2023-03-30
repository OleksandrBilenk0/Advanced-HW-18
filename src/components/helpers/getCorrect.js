export const getCorrectTime = (time)=> time.toString().padStart(2, '0');
export const stripReductionSize =(el=100, st=1, timerBar)=> ((timerBar/el)*st).toFixed(2); 
export const stripeRduction= (el, bar)=> {bar.style.width=`${el}%`};