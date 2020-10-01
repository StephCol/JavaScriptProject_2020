new Vue({ 
    el: '#root',
    data: {
        name: '',
        phone: '',
        make: '',
        model: '',
        date: '',
        values:  [
            {name: "age", price: 0},
            {name: "gender", price: 400.00  },
            {name: "fuel", price: 0},
            {name: "carAge", price: 0},
            {name: "claims", price: 0}, 
            {name: "miles", price: 0},
            {name: "value", price: 0},
            {name: "security", price: 100.00},
            {name: "usage", price: 30},
            {name: "coverType", price: 0}

        ],
        total: '000.00'
    },
    methods: {  
        getAgePrice:function(){          
                this.values[0].price = 0;
            
                var age = parseInt(this.values.age);
           
                    if((age >= 17 && age < 25) || age >= 65){
                        this.values[0].price = 500; 
                    }
                    else if(age >= 25 && age < 30){
                        this.values[0].price = 350;
                    } 
                    else if(age >= 30 && age < 65){
                        this.values[0].price = 350;
                    }  
            
            this.getTotal();
        },
        getGenderPrice:function(selectedGender){
            
            this.values[1].price = 0;
            this.values.gender = selectedGender;
             
            if(this.values.gender == 'Male'){
                this.values[1].price = 400; 
            }
            else if(this.values.gender == 'Female'){
                this.values[1].price = 250;
            }
        
            this.getTotal();
        },
          getFuelPrice:function(){
              
           this.values.fuel = document.getElementById("fuel").value;

            
            this.values[2].price = 0;
           
            if(this.values.fuel == 'Diesel'){
                this.values[2].price = 50; 
            }
            else if(this.values.fuel == 'Petrol'){
                this.values[2].price = 40;
            }
            else if(this.values.fuel == 'Hybrid'){
                this.values[2].price = 20;
            }
        
            this.getTotal();
        },
         getCarAgePrice:function(){
            
            this.values[3].price = 0;
            
                var age = parseInt(this.values.carAge);
           
                    if(age >= 0 && age < 3){
                        this.values[3].price = 100; 
                    }
                    else if(age >= 3 && age < 6){
                        this.values[3].price = 70;
                    } 
                    else if(age >= 6 && age < 10){
                        this.values[3].price = 50;
                    }  
                    else if(age >= 10){
                        this.values[3].price = 20;
                    } 
            
            this.getTotal();
        },
         getClaimsPrice:function(){
            
            this.values[4].price = 0;
            
             this.values.claims = document.getElementById("claims").value;
             
                var claims = parseInt(this.values.claims);
           
                    if(claims == 0 || claims == 1){
                        this.values[4].price = 100; 
                    }
                    else if(claims == 2){
                        this.values[4].price = 80;
                    } 
                    else if(claims == 3){
                        this.values[4].price = 60;
                    }  
                    else if(claims == 4){
                        this.values[4].price = 40;
                    } 
                    else if(claims >= 5){
                        this.values[4].price = 20;
                    } 
            
            this.getTotal();
        },
         getMilesPrice:function(){
            
            this.values[5].price = 0;
            
                var miles = parseInt(this.values.miles);
           
                    if(miles >= 0 && miles < 15000){
                        this.values[5].price = 30; 
                    }
                    else if(miles >= 15000 && miles < 25000){
                        this.values[5].price = 40;
                    } 
                    else if(miles >= 25000){
                        this.values[5].price = 50;
                    }   
            
            this.getTotal();
        },
           getCarValuePrice:function(){
            
            this.values[6].price = 0;
            
                var value = parseFloat(this.values.value);
               
                value = value * .1;
           
                this.values[6].price = value; 
     
            this.getTotal();
        },
        getSecurityPrice:function(selectedSecurity){
            
            
            this.values[7].price = 0;
            this.values.security = selectedSecurity;
           
            if(this.values.security == 'None'){
                this.values[7].price = 100; 
            }
            else if(this.values.security == 'Alarm'){
                this.values[7].price = 70; 
            }
            else if(this.values.security == 'Immobiliser'){
                this.values[7].price = 50; 
            }
            else if(this.values.security == 'Alarm, Immobiliser'){
                this.values[7].price = 30; 
            }
            else if(this.values.security == 'Tracker, Alarm, Immobiliser'){
                this.values[7].price = 10; 
            }
        
            this.getTotal();
              
        },
        getUsagePrice:function(selectedUsage){
            
            this.values[8].price = 0;
            this.values.usage = selectedUsage;
            
            
           
            if(this.values.usage == 'Social, Domestic, Pleasure'){
                this.values[8].price = 30; 
            }
            else if(this.values.usage == 'Class 1'){
                this.values[8].price = 50; 
            }
            this.getTotal();
              
        },
         getCoverPrice:function(){
            
            this.values[9].price = 0;
            this.values.coverType = document.getElementById("coverType").value;
             
            if(this.values.coverType == 'Fully Comprehensive'){
                this.values[9].price = 400; 
            }
            else if(this.values.coverType == 'Third Party Fire & Theft'){
                this.values[9].price = 200; 
            }
            this.getTotal();
              
        },
        getTotal:function(){
            
                tot = 0;
            
            if(this.values[1].price == 400)
                this.values.gender = 'Male';
            
            if(this.values[7].price == 100){
                 this.values.security = 'None'; 
            }
            
             if(this.values[8].price == 30){
                 this.values.usage = 'Social, Domestic, Pleasure'; 
            }
            
               for(var i=0; i<this.values.length; i++){
                   
                   tot += parseFloat(this.values[i].price) ;
                   
               }  
            
            this.total = parseFloat(tot).toFixed(2);
                
            
        },
        setModel:function(){
            /*Have to do this because if directly binded to variable the placeholder will not display*/    
            this.model = document.getElementById("model").value;  
        }
        
        }
    
    
});

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function isLetter(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 32 || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) ) {
        return true;
    }
    return false;
}

function isDateChar(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    
    date = document.getElementById("date").value;
    
    if (((date.length >= 0 && date.length <= 1) || (date.length >= 3 && date.length <= 4) || (date.length >5  && date.length <= 9)) && charCode > 47 && charCode < 58) {
        return true;
    }
    else if((date.length == 2 || date.length == 5) && charCode == 47)
    {
        return true;
    }
    return false;
}


function custToCar(){
    
    name = document.getElementById("name").value;
    age = parseInt(document.getElementById("age").value);
    phone = document.getElementById("phone").value;
    
     
    if(name.length >= 2 && (age >= 17 && age <= 99) && phone.length == 10 && phone.substring(0,2) == 08){   
      
        document.getElementById("custDetails").style.display ="none";
        document.getElementById("person").src ="personG.png";
        document.getElementById("personDash").src ="dashG.png";
        document.getElementById("carDetails").style.display ="block";
        
    }
    else {
         
        if(name.length < 2){
        document.getElementById("name").style.borderColor = "red";
        }
        
        if((age < 17 || age > 99) || isNaN(age)){       
        document.getElementById("age").style.borderColor = "red";
        document.getElementById("ageError").innerHTML = "You must be over 16 to apply";   
        document.getElementById("ageError").style.display = "block";
        }
        
        if(phone.length < 10 || phone.length > 10 ){
        document.getElementById("phone").style.borderColor = "red";
            
        }
        
    }
}

function changeBorder(input){
    
    var valid = false;
    
    if(input == 'name'){       
        var name = document.getElementById("name").value;
        
        if(name.length >= 2){
            valid = true;
        }
    }
    else if(input == 'age'){       
        var age = document.getElementById(input).value;        
        if(age >= 17 && age <= 99 ){
             valid = true;
              document.getElementById("ageError").style.display = "none";
        }
    }
    else if(input == 'phone'){       
        var phone = document.getElementById(input).value;        
        if(phone.length == 10 && phone.substring(0,2) == 08){
             valid = true;
        document.getElementById("phoneError").style.display = "none";
            }
            else{
                 document.getElementById("phone").style.borderColor = "red";
                document.getElementById("phoneError").innerHTML = "Phone No. format must be 08xxxxxxxx";   
                document.getElementById("phoneError").style.display = "block";
            }
    }
    else if(input == 'make' || input == 'model' || input == 'fuel' || input == 'claims' ){
        var index = document.getElementById(input).selectedIndex;
        if(index > 0)
          valid = true;    
    }
    else if(input == 'miles' || input == 'value' || input == "carAge"){
        var val = document.getElementById(input).value;
        
        if((input == 'miles') || (input == 'value' && val.length > 2) || (input == 'carAge' && val.length > 0))
          valid = true;
    }
    else if(input == 'date'){
        var date = document.getElementById("date").value;
        if(date.length == 10){
            
            if(isValidDate() == true){
                valid = true;
                document.getElementById("dateError").style.display = "none";
            }
            else{
                 document.getElementById("date").style.borderColor = "red";
                document.getElementById("dateError").innerHTML = "Policy Date Invalid";   
                document.getElementById("dateError").style.display = "block";
            }
                
        }
    }
    else if(input == 'coverType'){
        index = document.getElementById("coverType").selectedIndex;
        if(index > 0){
            valid = true;
        }
        
    }
        
    
    
    if(valid){
       document.getElementById(input).style.borderColor = "green";  
    }
    else if(!valid){
           document.getElementById(input).style.borderColor = "red";  
        }
    
}

function carToCust(){
    
    document.getElementById("carDetails").style.display ="none";
    document.getElementById("car").src ="car.png";
     document.getElementById("carDash").src ="dash.png";
    
    document.getElementById("custDetails").style.display ="block";
    
}

function carToPolicy(){
    var make = document.getElementById("make").selectedIndex;
    var model = document.getElementById("model").selectedIndex;
    var fuel = document.getElementById("fuel").selectedIndex;
    var claims = document.getElementById("claims").selectedIndex;
    var age = parseInt(document.getElementById("carAge").value);
    var miles = parseInt(document.getElementById("miles").value);
    var value = parseFloat(document.getElementById("value").value);
    
    
    if(make > 0 && model > 0 && fuel > 0 && claims > 0 && age > 0 && miles > 0 && value > 99){   

            document.getElementById("carDetails").style.display ="none";
            document.getElementById("car").src ="carG.png";
            document.getElementById("carDash").src ="dashG.png";
            document.getElementById("policyDetails").style.display ="block";
        
    }
    else {
        
        
        if(make == 0){       
        document.getElementById("make").style.borderColor = "red";
        }
        
        if(model == 0){       
        document.getElementById("model").style.borderColor = "red";
        }
        
        if(fuel == 0){       
        document.getElementById("fuel").style.borderColor = "red";
        }
        
        if(claims == 0){       
        document.getElementById("claims").style.borderColor = "red";
        }
        
        if(isNaN(age)){       
        document.getElementById("carAge").style.borderColor = "red";
        }
        
        if(isNaN(miles)){       
        document.getElementById("miles").style.borderColor = "red";
            
        }
        
        if(value < 100 || isNaN(value)){       
        document.getElementById("value").style.borderColor = "red";
        }
        
        
        
        
    }
    
    
    
}

function policyToCar(){
    
    document.getElementById("policyDetails").style.display ="none";
    document.getElementById("clipboard").src ="clipboard.png";
     document.getElementById("clipboardDash").src ="dash.png";
    
    document.getElementById("carDetails").style.display ="block";
    
}

function policyToStatement(){
    
    
    document.getElementById("footer").style.display = "none";
    date = document.getElementById("date").value;
    index = document.getElementById("coverType").selectedIndex;
    
    if(isValidDate() && index > 0){
        document.getElementById("policyDetails").style.display ="none";
        document.getElementById("clipboard").src ="clipboardG.png";
        document.getElementById("clipboardDash").src ="dashG.png";
        document.getElementById("euro").src ="euroG.png";

        document.getElementById("statementDetails").style.display ="block";  
    }
    else{
        if(!isValidDate()){       
        document.getElementById("date").style.borderColor = "red";
                document.getElementById("dateError").innerHTML = "Policy Date Invalid";   
                document.getElementById("dateError").style.display = "block";
        }
        
        if(index == 0){       
        document.getElementById("coverType").style.borderColor = "red";
        }
        
    }
    
    
  
    
}

function statementToPolicy(){
    
    document.getElementById("statementDetails").style.display ="none";
    document.getElementById("euro").src ="euro.png";
    
    document.getElementById("policyDetails").style.display ="block";
    
}



function getModels(){
    
    var make = document.getElementById("make").value;
    
    document.getElementById("model").options.length = 0;
     
    placeholderText = new Option();
    placeholderText.text = "Select Model";
    placeholderText.selected = 'selected';
    placeholderText.disabled =  true;  
    placeholderText.style.color = 'lightgray';
     document.getElementById("model").options[0] = placeholderText;
      
     var models = new Array();
    
            switch (make) {
                case 'Toyota':                   
                        models[0] = "Yaris";
                        models[1] = "Starlet";
                        models[2] = "Corolla";
                        models[3] = "Avensis";                   
                    break;
                case 'Nissan':                    
                        models[0] = "Primera";
                        models[1] = "Micra";
                        models[2] = "Note";
                        models[3] = "Quashqui";                  
                     break;
                case 'Audi':
                        models[0] = "A3";
                        models[1] = "A4";
                        models[2] = "A5";
                        models[3] = "A6";               
                    break;
                case 'Ford':    
                        models[0] = "Fiesta";
                        models[1] = "Mondeo";
                        models[2] = "Focus";
                        models[3] = "Ranger"; 
                     break;
                case 'Renault':    
                        models[0] = "Megane";
                        models[1] = "Scenic";
                        models[2] = "Duster";
                        models[3] = "Clio"; 
                     break;
            }
    
     
                    for (var i = 0; i < models.length; ++i) {
                        carModel = new Option();
                        carModel.text = models[i];
                        carModel.value = models[i];
                        document.getElementById("model").options[i+1] = carModel;
                    }
        }
    


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = dd+'/'+mm+'/'+yyyy;
document.getElementById("date").setAttribute("placeholder", today);


function isValidDate(){
    date = document.getElementById("date").value;
    
    year = date.substring(6, 10);
    month = date.substring(3, 5);
    day = date.substring(0, 2);
    
    if(parseInt(day) <= 31 && parseInt(month) <=12){
        if(yyyy < year)
            return true;
        else if(yyyy == year){
            if(mm < month && month <= 12)
                return true;
            else if(mm == month){
                if(dd <= day)
                    return true;
                else
                    return false
            }
            else
                return false;     
        }
        else 
            return false;
    }
    else
          return false;    
    
}

function start(){
    time = setInterval('timeLeft()', 1000);
}

function end(){
    clearInterval(time);
}


var mins = 4;
var secs = 60;


function timeLeft(){   
        
        if(mins <= 3 && mins > -1 && secs > -2){
             
            if(secs >= 10){
                var time = "0" + mins + ":" + secs; 
            }
            else{
                time = "0" + mins + ":0" + secs;
            }
            document.getElementById("timer").value = time;
            
            
        }
        else if(mins == 4){
            document.getElementById("timer").value = "0" + mins + ":00";
        }
        else{
            end();
            alert("You have run out of time, please start again");
            refresh();
              
        }
    
        secs = secs -1;
    
        if(secs == -1 || mins == 4){
            mins = mins-1;
        }
    
        if(secs == -1){
                secs = 59;
            }
}


function refresh() {
    history.go(0);
}


    




