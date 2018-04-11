function ch_group_tvp() {

    var tvp = document.getElementById("tvp").value
    
    if (0) {
        return "et";
    }
    else if (tvp == 'Этикетка' || tvp == 'Кольеретка' || tvp == 'Контрэтикетка' || tvp == 'Комплект этикетки' || tvp == 'Полоска водки' || tvp == 'Этикетка флат' || tvp == 'Этикетка мороженное' || tvp == 'Этикетка-книжка сф.' || tvp == 'Этикетка-книжка скр.') {
        return "et";
    }
    else if (tvp == "Книга ТП") {
        return "book";
    }
} //определяет твп книга или этикетка

function ch_product() {

    document.getElementById('change_company').style.display = "block";
    
} //после выбора продукции показывает 2 пункт

function ch_lang() {

    document.getElementById('change_language').style.display = "block";
    
} //после выбора компании показывает 3 пункт

function show_out_data() {
    document.getElementById('change_out_data').style.display = "block";
}
function ch_out_data() {
    var lang = document.getElementById('change_language_select').value;
    var company = document.getElementById('change_company_select').value
    if (ch_group_tvp() == "et" && campany == "Формат") {
       var obj = document.getElementById('out_data_et_format');
        document.getElementById('out_data_eng_format').style.display = "none";
        document.getElementById('out_data_book_format').style.display = "none";
        document.getElementById('out_data_rus_format').style.display = "none";
        obj.style.display = "block"; 
    }
    else if (ch_group_tvp() == "book" && campany == "Формат") {
       var obj = document.getElementById('out_data_book');
        document.getElementById('out_data_eng_format').style.display = "none";
        document.getElementById('out_data_et_format').style.display = "none";
        document.getElementById('out_data_rus_format').style.display = "none";
        obj.style.display = "block";
    }
    else if (lang == "Рус" && campany == "Формат") {

        var obj = document.getElementById('out_data_rus');
        document.getElementById('out_data_eng_format').style.display = "none";
        document.getElementById('out_data_book_format').style.display = "none";
        document.getElementById('out_data_et_format').style.display = "none";
        obj.style.display = "block";

    }
    else if (lang == "Eng" && campany == "Формат") {

        var obj = document.getElementById('out_data_eng_format');
        document.getElementById('out_data_rus_format').style.display = "none";
        document.getElementById('out_data_book_format').style.display = "none";
        document.getElementById('out_data_et_format').style.display = "none";
        obj.style.display = "block";

    }
    
    else if (ch_group_tvp() == "et" && campany == "Формат") {

        var obj = document.getElementById('out_data_et_alfa');
        document.getElementById('out_data_rus_alfa').style.display = "none";
        document.getElementById('out_data_eng_alfa').style.display = "none";
        obj.style.display = "block";

    }
    else if (lang == "Рус" && campany == "Формат") {

        var obj = document.getElementById('out_data_rus_alfa');
        document.getElementById('out_data_et_alfa').style.display = "none";
        document.getElementById('out_data_eng_alfa').style.display = "none";
        obj.style.display = "block";

    }
    else if (lang == "Eng" && campany == "Формат") {

        var obj = document.getElementById('out_data_eng_alfa');
        document.getElementById('out_data_et_alfa').style.display = "none";
        document.getElementById('out_data_rus_alfa').style.display = "none";
        obj.style.display = "block";

    }


}

function ch_position(Id) {

    document.getElementById('change_place').style.display = "block";
    for (i = 1; i < 9; i++) {
        document.getElementById("f"+i).style.outline = "None"
    }
    document.getElementById(Id).style.outline = "2px solid #356"
    
}