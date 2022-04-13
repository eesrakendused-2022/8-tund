let d = new Date();
let year = d.getFullYear();
$("#year").keyup(function (){
    let inputYear = $(this).val();
    if(inputYear.length >= 4){
        if(inputYear > year){
            inputYear = year;
        }
        if(inputYear < year-110){
            inputYear = year-110;
        }
        $("#year").val(inputYear);
    }
});