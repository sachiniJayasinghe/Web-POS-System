const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{5,}$/;
const CUS_SALARY_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{4,}$/;

var validationId;
var validationName;
var validationNumber;
var validationAddress;


$("#cSavebtn").attr('disabled',true);
$("#ceditBtn").attr('disabled',true);

$("#cIdTxt").keyup(function (e) {
    let value = $("#cIdTxt").val();
    if (value.length == 0) {
        $("#cSavebtn").attr('disabled',true);
        $("#cIdTxt").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_ID_REGEX.test(value);
        if (res) {
             validationId =1;
            setBtn();
            $("#cIdTxt").css('border', '2px solid green');
        } else {
            $("#cIdTxt").css('border', '2px solid red');
        }
    }});

$("#cNameTxt").keyup(function (e) {
    let value = $("#cNameTxt").val();
    if (value.length == 0) {
        $("#cSavebtn").attr('disabled',true);
        $("#cNameTxt").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_NAME_REGEX.test(value);
        if (res) {
            validationName=1;
            setBtn();
            $("#cNameTxt").css('border', '2px solid green');
        } else {
            $("#cNameTxt").css('border', '2px solid red');
        }
    }});

    $("#cNoTxt").keyup(function (e) {
        let value = $("#cNoTxt").val();
        if (value.length == 0) {
            $("#cSavebtn").attr('disabled',true);
            $("#cNoTxt").css('border', '1px solid #ced4da');
        } else {
            let res = CUS_SALARY_REGEX.test(value);
            if (res) {
                validationNumber=1;
                setBtn();
                $("#cNoTxt").css('border', '2px solid green');
            } else {
                $("#cNoTxt").css('border', '2px solid red');
            }
        }});
    

$("#cAddressTxt").keyup(function (e) {
    let value = $("#cAddressTxt").val();
    if (value.length == 0) {
        $("#cSavebtn").attr('disabled',true);
        $("#cAddressTxt").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_ADDRESS_REGEX.test(value);
        if (res) {
            validationAddress=1;
            setBtn();
            $("#cAddressTxt").css('border', '2px solid green');
        } else {
            $("#cAddressTxt").css('border', '2px solid red');
        }
    }});



function setBtn() {
    if (validationId==1 && validationName==1 && validationNumber==1 && validationAddress==1 ){
        $("#cSavebtn").attr('disabled',false);
        $("#ceditBtn").attr('disabled',false);
    }
}
