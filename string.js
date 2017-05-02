var exports = module.exports = {};

function PasswordMessage(m){
    this.name="Password Message";
    this.message=m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode>min && unicode<max){
        return true;
    }
    else{
        return false;
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
        let hasUpper=false;
        try{
            for(let a=0; a<str.length; a++){
                if(inRange(a,65,90)==true){
                    let hasUpper=true;
                    throw new PasswordMessage("has uppercase character");
                }
                else{
                    let hasUpper=false;
                }
            }
            if(hasUpper==false){
                throw new PasswordMessage("does not have uppercase letter");
            }
            catch(e){
                console.log(e.message);
                return hasUpper;
            }
        }
}

exports.containsLower =function(str){
    let hasLower=false;
    try{
        for(let a=0; a<str.length; a++){
            if(inRange(a,97,122)==true){
                let hasLower=true;
                throw new PasswordMessage("has lowercase character");
            }
            else{
                let hasLower=false;
            }
        }
        if(hasLower==false){
            throw new PasswordMessage("does not have lowercase letter");
        }
        catch(e){
            console.log(e.message);
            return hasLower;
        }
    }
}

exports.containsNumerical =function(str){
    let hasNumber=false;
    try{
        for(let a=0; a<str.length; a++){
            if(inRange(a,48,57)==true){
                let hasNumber=true;
                throw new PasswordMessage("has number");
            }
            else{
                let hasNumber=false;
            }
        }
        if(hasNumber==false){
            throw new PasswordMessage("does not have number");
        }
        catch(e){
            console.log(e.message);
            return hasNumber;
        }
    }
}

exports.containsSpecial =function(str){
    let hasSpecial=false;
    let special= [33,64,35,36,37,94,38,42];
    try{
        for(let d=0; d<special.length; d++){
            for(let e=0; e<special.length; e++){
                if(d.charCodeAt(0)==e;){
                    
                }
            }
        }
    }
}
