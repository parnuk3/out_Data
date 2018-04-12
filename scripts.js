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
    else if (tvp == "Брошюра КБС" || tvp == "Брошюра КШС" || tvp == "Брошюра скр." || tvp == "Брошюра пруж") {
        return "broshure";
    }
    else if (tvp == "Еженедельник" || tvp == "Ежедневник" || tvp == "Удостов л." || tvp == "Удостов ТП" || tvp == "Удостов ТП с блоком" || tvp == "Диплом ТП" || tvp == "Диплом ТП комплект") {
        return "ezd";
    }
    else if (tvp == 'Грамота' || tvp == 'Карта листовая' || tvp == 'Карта сфальцованная' || tvp == 'Афиша' || tvp == 'Набор открыток' || tvp == 'ЦБ Бланк' || tvp == 'Газета сф.' || tvp == 'Газета скр.' || tvp == 'Календарь плакат' || tvp == 'КПриложение к диплому ТП' || tvp == 'Титул к диплому ТП') {
        return "sheet";
    }
    else if (tvp == 'Пакет для семян') {
        return "pack_sem";
    }
    else if (tvp == 'Пакет с ручками лента' || tvp == 'Пакет с ручками шнур') {
        return "pack";
    }
    else if (tvp == 'Календарь ЕК1' || tvp == 'Календарь ЕК2' || tvp == 'Календарь ЕК3') {
        return "ek";
    }
    else if (tvp == 'Коробка трехточка' || tvp == 'Лоток с телескопическим бортом' || tvp == 'Коробка Туба' || tvp == 'Лоток с прямоугольным бортом' || tvp == 'Коробка для сыпучих продуктов' || tvp == 'Коробка с дном собираемым вручную' || tvp == 'Моноблок' || tvp == 'Шоу-бокс' || tvp == 'Упаковка плоская') {
        return "box";
    }
    else if (tvp == 'Календарь перек. настольный' || tvp == 'Календарь Домик') {
        return "kld_dom";
    }
    else {
        return "error";
    }
} //определяет группу твп

function reboot(){
    location.reload(true);
} //обновить страницу

function ch_product() {

    if (ch_group_tvp() == "error"){
        document.getElementById('error').innerHTML = "Для выбранной продукции нет варианта"
        document.getElementById('change_company').style.display = "none";
        document.getElementById('change_out_data').style.display = "none";
        document.getElementById('change_place').style.display = "none";
        
    }
    else{
        document.getElementById('error').innerHTML = ""
        document.getElementById('change_company').style.display = "block";
    }
    
    
} //после выбора продукции показывает 2 пункт

function ch_lang() {

    document.getElementById('change_language').style.display = "block";
    
} //после выбора компании показывает 3 пункт

function show_out_data() {
    document.getElementById('change_out_data').style.display = "block";
}
function hide_out_data() {
    var a = ['out_data_et_format', 'out_data_eng_format', 'out_data_book_format', 'out_data_rus_format', 'out_data_et_alfa', 'out_data_rus_alfa', 'out_data_eng_alfa'];
    for (var i=0; i<7; i++){
        document.getElementById(a[i]).style.display = "none";
    }
}

function ch_out_data() {
    var lang = document.getElementById('change_language_select').value;
    var company = document.getElementById('change_company_select').value;
    if (company == "Format") {
        if (ch_group_tvp() == "et") {
            hide_out_data();
            document.getElementById("out_data_et_format").style.display = "block"; 
        } else if (ch_group_tvp() == "book") {
            hide_out_data();
            document.getElementById("out_data_book_format").style.display = "block";
        } else if (lang == "Рус") {
            hide_out_data();
            document.getElementById('out_data_rus_format').style.display = "block";
        } else if (lang == "Eng") {
            hide_out_data();
            document.getElementById('out_data_eng_format').style.display = "block";
        }
    } else if (company == "Alfa") {
        if (ch_group_tvp() == "et") {
            hide_out_data();
            document.getElementById("out_data_et_alfa").style.display = "block";
        } else if (lang == "Рус") {
            hide_out_data();
            document.getElementById("out_data_rus_alfa").style.display = "block";
        } else if (lang == "Eng") {
            hide_out_data();
            document.getElementById('out_data_eng_alfa').style.display = "block";
        }
    } else {
        hide_out_data();
        hide_position();
        document.getElementById("diagram").style.background = "none";
        document.getElementById("diagram_out_data").style.background = "none";
        document.getElementById("diagram_out_data").style.outline = "none";
        document.getElementById("legend").style.display = "none";
        document.getElementById("pos_data_res").innerHTML = "";
        document.getElementById("type_data_res").innerHTML = "";
        document.getElementById("change_out_data").style.display = "none";
        document.getElementById("change_place").style.display = "none";
        document.getElementById("change_language").style.display = "none";
    }
    if (lang != "Рус" && lang != "Eng") {

        hide_out_data();
        hide_position();
        document.getElementById("diagram").style.background = "none";
        document.getElementById("diagram_out_data").style.background = "none";
        document.getElementById("diagram_out_data").style.outline = "none";
        document.getElementById("legend").style.display = "none";
        document.getElementById("pos_data_res").innerHTML = "";
        document.getElementById("change_out_data").style.display = "none";
        document.getElementById("change_place").style.display = "none";
    }

}

function show_position() {
    document.getElementById('change_place').style.display = "block";
}
function select_out_data(Id) {
    
    for (var i = 1; i < 12; i++) {
        document.getElementById("f"+i).style.outline = "None"
    }
    for (var i = 1; i < 5; i++) {
        document.getElementById("a"+i).style.outline = "None"
    }
    
    document.getElementById(Id).style.outline = "3px solid #356"
    
}

function ch_position(){
    if (ch_group_tvp() == "broshure"){
        hide_position();
        document.getElementById("broshure").style.display = "block";
    }
    else if (ch_group_tvp() == "ezd"){
        hide_position();
        document.getElementById("ezd").style.display = "block";
    }
    else if (ch_group_tvp() == "book"){
        hide_position();
        document.getElementById("books").style.display = "block";
    }
    else if (ch_group_tvp() == "sheet"){
        hide_position();
        document.getElementById("sheet").style.display = "block";
    }
    else if (ch_group_tvp() == "pack"){
        hide_position();
        document.getElementById("pack").style.display = "block";
    }
    else if (ch_group_tvp() == "pack_sem"){
        hide_position();
        document.getElementById("pack_sem").style.display = "block";
    }
    else if (ch_group_tvp() == "ek"){
        hide_position();
        document.getElementById("ek").style.display = "block";
    }
    else if (ch_group_tvp() == "box"){
        hide_position();
        document.getElementById("box").style.display = "block";
    }
    else if (ch_group_tvp() == "kld_dom"){
        hide_position();
        document.getElementById("kln_dom").style.display = "block";
    }
    else if (ch_group_tvp() == "et"){
        hide_position();
        document.getElementById("et").style.display = "block";
    }
}
function hide_position(){
    var a = ['broshure', 'ezd', 'books', 'sheet', 'pack', 'pack_sem', 'ek', 'box', 'kln_dom', 'et'];
    for (var i=0; i<10; i++){
        document.getElementById(a[i]).style.display = "none";
    }
}
function done(Id) {
    var a = ['_1a', '_1b', '_1c', '_1d', '_11a', '_11b', '_11c', '_11d', '_2a', '_2b', '_2c', '_12a', '_12b', '_12c', '_3a', '_13a', '_4a', '_4b', '_4c', '_5a', '_5b', '_6a', '_6b', '_6c', '_7a', '_7b', '_7c', '_8a', '_8b', '_8c', '_9a', '_9b', '_10a', '_10b']
    for (var i = 0; i < 34; i++) {
        document.getElementById(a[i]).style.outline = "None"
    }
    draw_diagram();
    document.getElementById(Id).style.outline = "3px solid #356"
    
}
function draw_diagram(a){
    document.getElementById("diagram").style.background = "url('img/out_data/" + a + ".jpg')";
    document.getElementById("diagram").style.backgroundSize = "contain";
    document.getElementById("diagram").style.backgroundRepeat = "no-repeat";
    document.getElementById("diagram").style.backgroundPosition = "center";
    document.getElementById("pos_data_res").innerHTML = a;
}
function draw_diagram_out_data(a){
    document.getElementById("diagram_out_data").style.background = "url('img/"+a+".jpg')";
    document.getElementById("diagram_out_data").style.backgroundSize = "contain";
    document.getElementById("diagram_out_data").style.backgroundRepeat = "no-repeat";
    document.getElementById("diagram_out_data").style.backgroundPosition = "right";
    document.getElementById("diagram_out_data").style.outline = "1px solid #ccc"
    document.getElementById("legend").style.display = "block";
    document.getElementById("type_data_res").innerHTML = a;
}