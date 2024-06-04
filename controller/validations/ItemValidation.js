const CUS_ID_REGEX = /^(I00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{3,}$/;
const numbersOnlyRegex = /^[0-9]+$/;
const CUS_SALARY_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

var validationId;
var validationName;
var validationAddress;
var validationSalary;


$("#iSaveBtn").attr('disabled',true);
$("#ieditbtn").attr('disabled',true);

$("#iCode").keyup(function (e) {
    let value = $("#iCode").val();
    if (value.length == 0) {
        $("#iSaveBtn").attr('disabled',true);
        $("#iCode").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_ID_REGEX.test(value);
        if (res) {
            validationId =1;
            setBtn();
            $("#iCode").css('border', '2px solid green');
        } else {
            $("#iCode").css('border', '2px solid red');
        }
    }});

$("#iNameTxt").keyup(function (e) {
    let value = $("#iNameTxt").val();
    if (value.length == 0) {
        $("#iSaveBtn").attr('disabled',true);
        $("#iNameTxt").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_NAME_REGEX.test(value);
        if (res) {
            validationName=1;
            setBtn();
            $("#iNameTxt").css('border', '2px solid green');
        } else {
            $("#iNameTxt").css('border', '2px solid red');
        }
    }});

$("#iPrice").keyup(function (e) {
    let value = $("#iPrice").val();
    if (value.length == 0) {
        $("#iPrice").attr('disabled',true);
        $("#iPrice").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_SALARY_REGEX.test(value);
        if (res) {
            validationAddress=1;
            setBtn();
            $("#iPrice").css('border', '2px solid green');
        } else {
            $("#iPrice").css('border', '2px solid red');
        }
    }});

$("#iQTY").keyup(function (e) {
    let value = $("#iQTY").val();
    if (value.length == 0) {
        $("#iSaveBtn").attr('disabled',true);
        $("#iQTY").css('border', '1px solid #ced4da');
    } else {
        let res = numbersOnlyRegex.test(value);
        if (res) {
            validationSalary=1;
            setBtn();
            $("#iQTY").css('border', '2px solid green');
        } else {
            $("#iQTY").css('border', '2px solid red');
        }
    }});


function setBtn() {
    if (validationId==1 && validationName==1 && validationAddress==1 && validationSalary==1){
        $("#iSaveBtn").attr('disabled',false);
        $("#ieditbtn").attr('disabled',false);
    }
}
