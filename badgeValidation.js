/**
 * Student ID: 20455936
 * Name: Michael Angeles
 * Campus:  Parramatta South
 * Tutor Name: Kieran Luken  
 * Class Day: Thursay
 * Class Time: 2pm
 */ 

var expDateEx = /^(0[1-9]|1[0-2])\/\d\d$/;                     //regex to accept mm/yyy format only                 
var threeDigitsEx = /^\d{3}$/;                                 //regex only three digits allowed to be inputted
var onlyCharactersEx = /^[a-zA-z\s]+$/;                        //regex only characters, space and hyphans                      
var charOnlyHyphSpace = /^[a-zA-z\s-]+$/;                      //regex  only caracter and space                    
var mobileRegEx = /^04\d\d-\d{3}-\d{3}$/;                      //regex only exects a mobile number starting with 04 and 04##-###-## format  
var oDateRexEx = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;  //regex to accept dd/mm/yyy format only
var onlyCharactersEx = /^[a-zA-z\s]+$/;                         //regex only accepts characters
var clubNoEx = /^[cC][a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}$/;           //reg only accept c##-### format                    
var postCodeEx = /^([2-7]\d\d\d|0[8-9]\d\d)$/;                  //regex only accepts vaild australian postcodes
var credCrdEx = /^\d{4}(\s?)\d{4}(\s?)\d{4}(\s?)\d{4}$/;        //regex only accepts 16 digits
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
var expiry = document.getElementById("Expiry");
var orderDate = document.getElementById("date");
var theForm = document.getElementById("myForm").elements;
var errors = document.getElementsByClassName("requiredError");
var gt = document.getElementsByClassName("gtotal");             //the group assigned to each prices of the the order details
var checkboxes = document.getElementsByName('pMethod');         //the goup of check boxes under the payment method heading
var notMand = document.getElementsByName('notMand');            //the group asigned to hidding entries 2 - 5
var g1 = document.getElementsByName("groupOne")                 //the group assigned to entry1



today = dd+'/'+ mm +'/'+yyyy;               //sets todays date


//the 2 codes below displays the todays date for the order date validatyion any year for the expiry validation
document.getElementById("testYear").innerHTML = today;
document.getElementById("currentYear").innerHTML = yyyy;



/**
* the following codes are will validate the specified user input when the user hits the submit button 
*/ 

function validateForm(form) {

    let valid = true;   //assume the form is valid to start with


    if(valDate(orderDate) == false){
        return false                        //will stop the form from submitting
    }

    
    if (!regExpValidation("date", oDateRexEx, "dateError")) {
        valid = false;                      //will stop the form from submitting
    }
    
    if (!regExpValidation("ClubNo", clubNoEx, "clubError")) {
        valid = false;
    }

    if (!regExpValidation("clubName", onlyCharactersEx, "CNameError")) {
        valid = false;
    }

    if (!regExpValidation("fname", onlyCharactersEx, "fNameError")) {
        valid = false;
    }

    if (!regExpValidation("lname", onlyCharactersEx, "lNameError")) {
        valid = false;
    }

    if (!regExpValidation("contactPhone", mobileRegEx, "CPhoneError")) {
        valid = false;
    }

    if (!regExpValidation("streetAddress", onlyCharactersEx, "streetAddyError")) {
        valid = false;
    }

    if (!regExpValidation("suburbCity", onlyCharactersEx, "suburbError")) {
        valid = false;
    }

    if (!requiredFieldEmpty("State", "stateError")) {
        valid = false;
    }

    if (!regExpValidation("Postcode", postCodeEx, "postCodeError")) {
        valid = false;
    }

    if (!regExpValidation("Ofname", onlyCharactersEx, "fnameErrorOne")) {
        valid = false;
    }

    if (!regExpValidation("Olname", onlyCharactersEx, "fnameErrorOne")) {
        valid = false;
    }

    if (!requiredFieldEmpty("ranking", "fnameErrorOne")) {
        valid = false;
    }

    if (!requiredFieldEmpty("bOption", "fnameErrorOne")) {
        valid = false;
    }


    /**
     * will only validate the specific user input if the credit card box is checked on the form
     */
    if (creditCard.checked === true){

        
        if (!regExpValidation("creditCard1", credCrdEx, "creditCard1Error")) {
            valid= false;
        }

        if (!regExpValidation("CCV", threeDigitsEx, "CCVError")) {
            valid= false;
        }

        if (!regExpValidation("cardHoldersName", onlyCharactersEx, "chnError")) {
            valid= false;
        }

        if (valMonthYr(expiry) && !regExpValidation("Expiry", expDateEx, "expyError")) {
            valid = false;
        }
    }

    /**
     * will only validate the additional entry input if the entry1 checkbox is checked on the form
     */

    if(e1.checked == true){

        if (!regExpValidation("fname1", onlyCharactersEx, "fnameError2")) {
            valid = false;
        }
    
        if (!regExpValidation("lname1", onlyCharactersEx, "fnameError2")) {
            valid = false;
        }
    
        if (!requiredFieldEmpty("ranking1", "fnameError2")) {
            valid = false;
        }
    
        if (!requiredFieldEmpty("bOption1", "fnameError2")) {
            valid = false;
        }
    }

     /**
     * will only validate the additional entry input if the entry2 checkbox is checked on the form
     */
    if(e2.checked == true){

        if (!regExpValidation("fname2", onlyCharactersEx, "fnameError2")) {
            valid = false;
        }
    
        if (!regExpValidation("lname2", onlyCharactersEx, "fnameError2")) {
            valid = false;
        }
    
        if (!requiredFieldEmpty("ranking2", "fnameError2")) {
            valid = false;
        }
    
        if (!requiredFieldEmpty("bOption2", "fnameError2")) {
            valid = false;
        }
        
    }

     /**
     * will only validate the additional entry input if the entry3 checkbox is checked on the form
     */
    if(e3.checked == true){

        if (!regExpValidation("fname3", onlyCharactersEx, "fnameError2")) {
            valid = false;
        }
    
        if (!regExpValidation("lname3", onlyCharactersEx, "fnameError2")) {
            valid = false;
        }
    
        if (!requiredFieldEmpty("ranking3", "fnameError2")) {
            valid = false;
        }
    
        if (!requiredFieldEmpty("bOption3", "fnameError2")) {
            valid = false;
        }
        
    }

     /**
     * will only validate the additional entry input if the entry4 checkbox is checked on the form
     */

    if(e4.checked == true){

        if (!regExpValidation("fname4", onlyCharactersEx, "fnameError2")) {
            valid = false;
        }
    
        if (!regExpValidation("lname4", onlyCharactersEx, "fnameError2")) {
            valid = false;
        }
    
        if (!requiredFieldEmpty("ranking4", "fnameError2")) {
            valid = false;
        }
    
        if (!requiredFieldEmpty("bOption4", "fnameError2")) {
            valid = false;
        }
        
    }


     /**
     * will only validate the payment method checkboxes if all entry1 items are populatled
     * @param g1 - passes the class groupOne 
     */
    if(checkGroup(g1)==true){
        if(!valCheckBox(checkboxes)){
            valid = false
        }
    }

    return valid;

}

//  the following codes is written to validate the users input with the regex using onblur.

date.addEventListener("blur", function(){

    if (valDate(orderDate) && !regExpValidation("date", oDateRexEx, "dateError")) {
        valid = false;
    }
    
}) 

ClubNo.addEventListener("blur", function(){

    if (!regExpValidation("ClubNo", clubNoEx, "clubError")) {
        valid = false;
    }
                                                                                                                                            
})

clubName.addEventListener("blur", function(){

    if (!regExpValidation("clubName", onlyCharactersEx, "CNameError")) {
        valid = false;
    }
    
})

fname.addEventListener("blur", function(){

    if (!regExpValidation("fname", onlyCharactersEx, "fNameError")) {
        valid = false;
    }
    
})

lname.addEventListener("blur", function(){

    if (!regExpValidation("lname", onlyCharactersEx, "lNameError")) {
        valid = false;
    }
    
})

contactPhone.addEventListener("blur", function(){

    if (!regExpValidation("contactPhone", mobileRegEx, "CPhoneError")) {
        valid = false;
    }
    
})

contactPhone.addEventListener("blur", function(){

    if (!regExpValidation("contactPhone", mobileRegEx, "CPhoneError")) {
        valid = false;
    }
    
})

streetAddress.addEventListener("blur", function(){

    if (!regExpValidation("streetAddress", onlyCharactersEx, "streetAddyError")) {
        valid = false;
    }
    
})

streetAddress.addEventListener("blur", function(){

    if (!regExpValidation("streetAddress", onlyCharactersEx, "streetAddyError")) {
        valid = false;
    }
    
})

suburbCity.addEventListener("blur", function(){

    if (!regExpValidation("suburbCity", onlyCharactersEx, "suburbError")) {
        valid = false;
    }
    
})

Postcode.addEventListener("blur", function(){

    if (!regExpValidation("Postcode", postCodeEx, "postCodeError")) {
        valid = false;
    }
    
})

Ofname.addEventListener("blur", function(){

    if (!regExpValidation("Ofname", onlyCharactersEx, "fnameErrorOne")) {
        valid = false;
    }
    
})

Olname.addEventListener("blur", function(){

    if (!regExpValidation("Olname", onlyCharactersEx, "fnameErrorOne")) {
        valid = false;
    }
    
})

cNumber.addEventListener("blur", function(){

    if (!requiredFieldEmpty("cNumber", "missingNumber")) {
        valid = false;
    }
    
})

State.addEventListener("blur", function(){

    if (!requiredFieldEmpty("State", "stateError")) {
        valid = false;
    }
    
})

ranking.addEventListener("blur", function(){

    if (!requiredFieldEmpty("ranking", "fnameErrorOne")) {
        valid = false;
    }
    
})

bOption.addEventListener("blur", function(){

    if (!requiredFieldEmpty("bOption", "fnameErrorOne")) {
        valid = false;
    }
    
})

/**
 * the following code validates the users input to a date that is not greater than today date.
 * 
 *  The below code was inspired from :https://youtu.be/s8khzv7yyw8.
 *
 * @param {*} element - each number entered for the date
 * @returns - true if the validation rules are met and false otherwise
 */
function valDate(element){

    //start of code
    let str = element.value;            // stores the users input into the str variable
    let parts = str.split('/');         // splits/separtes each component from str by a / 
    let userDates = new Date( parseInt(parts[2]), parseInt(parts[1]) -1, parseInt(parts[0])); //converts strings into numbers
    let tomorrowsDate = new Date(864000 + Date.now());      //stores tomorrows date into the to tomorrowsDate variable
    let milli = Date.parse(tomorrowsDate);    //converts the date into numbners
    let milli2 = Date.parse(userDates);        //converts the date into numbners
    
    //if the users date is greater than today's date an error message will appear.
    if(milli2 >= milli){

        document.getElementById("dateError").style.display = "inline-block";
        return false;
    
    }else{

        document.getElementById("dateError").style.display = "none";     
        return true;
    }

    //end of code.
    
}

/**
 * used to validate the expiry for the credit card.
 * this code is similar to the above code.  the only difference that it doesnt not take the day into consideration 
 * only month and yr.
 * @param {*} element - passes the expiry element 
 * @returns false if the user enter a mm/yy that is in the past. 
 */

function valMonthYr(element){

    let str = element.value;
    let parts = str.split('/');
    let useMonthYr = new Date( 2000 + parseInt(parts[1]), parseInt(parts[0]), 0); 
    let currMonthYr = new Date (yyyy, mm, 0);
    let msec = Date.parse(useMonthYr);
    let msec1 = Date.parse(currMonthYr);

    if(msec < msec1){

        document.getElementById("expyError").style.display = "inline-block";
        return false;
    
    }else{

        document.getElementById("expyError").style.display = "none";     
        return true;
    }
}

/**
 * 
 * @param {*} item - passes the element to be validated
 * @param {*} regEx  - passed the specified reg expression code.
 * @param {*} msg - passes the error messages assigned to specific validations
 * @returns return false if validation rules are not met.
 */

function regExpValidation(item, regEx, msg) {

    if (!regEx.test(document.getElementById(item).value)) {

        document.getElementById(msg).style.display = "inline-block";
        document.getElementById(item).style.border = "1px red dashed"
        return false;
    }
    document.getElementById(msg).style.display = "none";
    document.getElementById(item).style.border = "1px solid grey"
    return true;

}

/**
 * this codes is used to determine if a txt box has a null value
 * 
 * @param {*} ident - passes the element to be validated
 * @param {*} msg - passes the error messages assigned to specific validations
 * @returns 
 */

function requiredFieldEmpty(ident, msg) {

    if (!document.getElementById(ident).value.length) {  
                                       //form is not valid
        document.getElementById(msg).style.display = "inline-block";  
        document.getElementById(ident).style.border = "1px red dashed"                  //show the error message
        return false;
    }else{

    document.getElementById(msg).style.display = "none"; 
    document.getElementById(ident).style.border = "1px solid grey"                          //hide the error message                                                                                     //set the border back to normal
    return true;
    }
}

/**
 * this codes is used with the user clicks on an checkbox or a textbox
 * 
 * @param {*} element - passes the element to be validated.
 * @returns true or false
 */

function enableButton(element) {

    var counter = 0;
    var postTotal = 0;
    var grandTotal = 0;
    var crdtTotal = 0;
    var subTotal = 0;
    var ccTotal = 0;
    var priceBoxes = document.getElementsByName('postage')
    var p1 = parseFloat(document.getElementById("price1").value);  // **************************************************//
    var p2 = parseFloat(document.getElementById("price2").value);  //                                                   //
    var p3 = parseFloat(document.getElementById("price3").value);  //stores the price of each entry from the order details
    var p4 = parseFloat(document.getElementById("price4").value);  //                                                   //
    var p5 = parseFloat(document.getElementById("price5").value);  //***************************************************//
   
    
    /**
     * This code enables only 1 check box to be selected.
     * 
     * The below code was inspired from :https://stackoverflow.com/questions/9709209/html-select-only-one-checkbox-in-a-group.
     * Solution 3.
     * 
     */

    //start of code
    checkboxes.forEach((item) => {
        if (item !== element) item.checked = false
    }) //end of code

    //used to revert the text form the payment method check boxes back to black after an error
    for(let i = 0; i < checkboxes.length; i++){
        checkboxes[i].style.color = "black"        
    }

    //hides the error msg
    document.getElementById("pMUnchecked").style.display = "none"

    /**
     * the following codes is uses to check how many orders the cusomter has made and to determin the postage price.
     * this is achieved with implementing a counter. 
     * 
     * it also converts NaN values into a zero
    */
    if (isNaN(p1)){
        p1 = 0;
        counter++
    }
    if (isNaN(p2)){
        p2 = 0;
        counter++
    }
    if (isNaN(p3)){
        p3 = 0;
        counter++
    }
    
    if (isNaN(p4)){
        p4 = 0;
        counter++
    }
    if (isNaN(p5)){
        p5 = 0;
        counter++
    }
    /**
     * if the counter equals 0 - it means the user has inputed 5 badge orders. 
     */
    if(counter === 0){

        postTotal = 8.00 

    }else{

        postTotal = 4.00
    }
    
    //the below codes passes the values to the elements

    //start
    subTotal = parseFloat(p1) + parseFloat(p2) + parseFloat(p3) + parseFloat(p4) + parseFloat(p5);
    grandTotal = parseFloat(p1) + parseFloat(p2) + parseFloat(p3) + parseFloat(p4) + parseFloat(p5) + parseFloat(postTotal);
    crdtTotal = grandTotal * 1.025;
    ccTotal = (grandTotal/100) * 2.5
    
    document.getElementById("Postage").value = (postTotal).toFixed(2);
    document.getElementById("subTotal").value = (subTotal).toFixed(2);
    document.getElementById("gtotal").value = (grandTotal).toFixed(2);


    if (element.checked && element == creditCard) {
        
        document.getElementById("disabled").style.display = "inline-block";
        document.getElementById("amount").value = (crdtTotal).toFixed(2);
        document.getElementById("gtotal").value = (crdtTotal).toFixed(2);
        document.getElementById("Postage").value = (postTotal).toFixed(2);
        document.getElementById("subTotal").value = (subTotal).toFixed(2);
        document.getElementById("cCFee").value = (ccTotal).toFixed(2);
        document.getElementById("txthighlight").style.color = "red";
        document.getElementById("myBtn").disabled = "true";
    //finish

    // the nex block of codes are only active once the asisgned element has been clicked.

    //start
    creditCard1.addEventListener("blur", function(){

    if (!regExpValidation("creditCard1", credCrdEx, "creditCard1Error")) {
        valid = false;
        }

    })

    CCV.addEventListener("blur", function(){

        if (!regExpValidation("CCV", threeDigitsEx, "CCVError")) {
            valid = false;
        }
    
    })

    cardHoldersName.addEventListener("blur", function(){

        if (!regExpValidation("cardHoldersName", onlyCharactersEx, "chnError")) {
            valid = false;
        }
    
    })

    Expiry.addEventListener("blur", function(){

        if (valMonthYr(expiry) && !regExpValidation("Expiry", expDateEx, "expyError")) {
            valid = false;
        }
    
    })

    //finish

        
    }
    else {
        
        document.getElementById("txthighlight").style.color = "black";
        document.getElementById("cCFee").value = (0.00).toFixed(2);
        document.getElementById("disabled").style.display = "none";
        document.getElementById("myBtn").disabled = "false";
        
    }
    //finish
    
    return true;
}
/**
 * this codes is used to display the price of each badge in the price box
 * 
 * @param {*} element - points the specified element
 * @param {*} item - passes the price element
 */
function showPrice(element, item) {
    
    var g1 = document.getElementsByName("groupOne")
    var x = document.getElementById(item)
    var checkboxes = document.getElementsByName('pMethod');
    var options = element.selectedOptions;
    var total = 0;
    
    total = parseFloat(options[0].value).toFixed(2);
    
    if(isNaN(total)){
        total = (0).toFixed(2);   // will convert nan string to a number
    }

    document.getElementById(item).value = total;
    
    //this codes ensure that the user at least enters the first enty
    if(item === "price1"){
    checkGroup(g1);
    }

    
    //this code unselects the payment method on change. 
    checkboxes.forEach(element => {
        element.checked = false
        element.disabled = false
    })

    //enables the "add additional entries button"
    var x = document.getElementById("myBtn");
    x.disabled = false;

}

/**
 * this codes validate the that each text box from entry1 has been populated. if not, the additional entry button and 
 * payment method checkboxes are diabled.
 * 
 * 
 * @param {} group - group all entry1 elements
 * @returns true or false.
 */

function checkGroup(group){
    let counter = 0;
    let valid = true
    let counter1 = 0;
    for (let i = 0; i < group.length; i++) {
        counter++

        if (group[i].value.length == 0){
            counter1++;
            let index = counter - 1;

            group[index].style.border = "1px red dashed"
            document.getElementById("fnameErrorOne").style.display = "inline-block";  
        }  
    }

    // if the counter is larger than 0 - it indicates to the program that a text box is required to be filled in (has a null value). 
    if(counter1 > 0){
        return false
    }else{
        return true;
    }
}

/**
 * this code will display the addition entries the user can input. Initally these are hidden from the user to minimise input
 * inconsistencies.
 * 
 * @param {*} element -passes the a specific element.
 */

function displayAddEntries(element){
    
    var g1 = document.getElementsByName("groupOne")

    if(checkGroup(g1) == true){

        element.style.display = "none"
        document.getElementById("addList").style.display = "none";
        document.getElementById("additionInfo").style.display = "inline-block";
       
        this.hidden = false

        notMand.forEach(element => {
            element.hidden = false
        })
    }
    
}

/**
 * the next block of codes will enables the user to add addition entries when the assiged check box is checked.
 * these codes will also set the values to null if check boxes are unchecked.
 * 
 * @param {} element - specified elements.
 */

function additionalEntries(element){
    
    /**
     * Each set of entries are grouped. a group consists of fname, lastname, officer ranking and badge option 
     * 
     * the code repeats for each group.
     */
    var firstG = document.getElementsByClassName("firstGroup")
    var secondG = document.getElementsByClassName("secondGroup")
    var thirdG = document.getElementsByClassName("thirdGroup")
    var forthG = document.getElementsByClassName("forthGroup")
    var ae1 = document.getElementById("e1")                         //**************************************** */
    var ae2 = document.getElementById("e2")                         //these are the check boxes for each entry                                                                   
    var ae3 = document.getElementById("e3")                         //
    var ae4 = document.getElementById("e4")                         //**************************************** */

    //enables the user to input entry
    if(element == ae1){

        for(let i= 0; i < firstG.length; i++ ){
            firstG[i].disabled = false
        }
    }

    //disables entry is checkbox is unchecked.
    if(ae1.checked == false){

        for(let i= 0; i < firstG.length; i++ ){

            document.getElementById("fnameError2").style.display = "none"
            firstG[i].style.border = "1px solid grey"
            firstG[i].value = "";
            firstG[i].disabled = true;
            document.getElementById("price2").value = (0).toFixed(2);
            checkboxes.forEach((item) => {
                if (item !== element) item.checked = false
            })

        }   
    }

    if (element == ae2){

        for(let i= 0; i < secondG.length; i++ ){
            secondG[i].disabled = false
        }
    }

    if(ae2.checked == false){

        for(let i= 0; i < secondG.length; i++ ){

            document.getElementById("fnameError2").style.display = "none"
            secondG[i].style.border = "1px solid grey"
            secondG[i].value = "";
            secondG[i].disabled = true
            document.getElementById("price3").value = (0).toFixed(2);

        }   
    }

    if (element == ae3){

        for(let i= 0; i < thirdG.length; i++ ){
            thirdG[i].disabled = false
        }
    }

    if(ae3.checked == false){

        for(let i= 0; i < thirdG.length; i++ ){
           
            document.getElementById("fnameError2").style.display = "none"
            thirdG[i].style.border = "1px solid grey"
            thirdG[i].value = "";
            thirdG[i].disabled = true
            document.getElementById("price3").value = (0).toFixed(2);
            checkboxes.forEach((item) => {
                if (item !== element) item.checked = false
            })

        }   
    }

    if (element == ae4){

        for(let i= 0; i < forthG.length; i++ ){
            forthG[i].disabled = false
        }
    }

    if(ae4.checked == false){

        for(let i= 0; i < forthG.length; i++ ){

            document.getElementById("fnameError2").style.display = "none"
            forthG[i].style.border = "1px solid grey"
            forthG[i].value = "";
            forthG[i].disabled = true
            document.getElementById("price3").value = (0).toFixed(2);
            checkboxes.forEach((item) => {
                if (item !== element) item.checked = false
            })
        }   
    }  
}

/**
 * this block of codes ensures that one checkbox for the payment method checkboxes are is checked.
 * 
 * @param {*} item -passes specified element
 * @returns true or false
 */

function valCheckBox(item){

    var counter1 = 0;

    //this first for loop provides a counter for validation. it check how many checkboxes have been checked.
    for(let i = 0; i < item.length; i++){

        if(item[i].checked == false){
            
            counter1++;
        }
    }

    /**
     * if the counter == 0 - it indicated that no check boxes are checked. 
     * 
     *  i had to include == 8 as checkbos labels were included in the group. Grouping the labels was used to highlight errors  
     */
    if(counter1 == 4 || counter1 == 8 ){
        document.getElementById("pMUnchecked").style.display = "inline-block"
        
        for(let i = 0; i < item.length; i++){
            item[i].style.color = "red"        
        }
        return false;
    }else{

        document.getElementById("pMUnchecked").style.display = "none"
        return true;
    }

    counter1 = 0;

}













    



