function ch_product() {

    document.getElementById('change_company').style.display = "block"
    
}

function ch_lang() {

    document.getElementById('change_language').style.display = "block";
    
}

function ch_out_data() {
    var lang = document.getElementById('change_language_select').value;
    document.getElementById('change_out_data').style.display = "block";
    if (lang == "Рус") {

        var obj = document.getElementById('out_data_rus');
        document.getElementById('out_data_eng').style.display = "none";
        document.getElementById('out_data_book').style.display = "none";
        document.getElementById('out_data_et').style.display = "none";
        obj.style.display = "block";

    }
    else if (lang == "Eng") {

        var obj = document.getElementById('out_data_eng');
        document.getElementById('out_data_rus').style.display = "none";
        document.getElementById('out_data_book').style.display = "none";
        document.getElementById('out_data_et').style.display = "none";
        obj.style.display = "block";

    }


}
