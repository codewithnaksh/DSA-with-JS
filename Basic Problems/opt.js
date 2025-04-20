
function randomNum() {
    return (Math.floor(Math.random()*10));
}
function otpGen(len) {
    let otp = "";
    while(len > 0){
        otp += randomNum() ;
        len--;
    }
    return otp;
}
console.log("Your OTP is",otpGen(6));