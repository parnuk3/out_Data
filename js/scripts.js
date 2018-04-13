
//global variables

var pos_data_res = "";
var type_data_res = "";

function ch_group_tvp() {

    var tvp = document.getElementById("tvp").value
    var et_group = ['Этикетка', 'Кольеретка', 'Контрэтикетка', 'Комплект этикетки', 'Полоска водки', 'Этикетка флат', 'Этикетка мороженное', 'Этикетка-книжка сф.', 'Этикетка-книжка скр.'];
    var broshure_group = ["Брошюра КБС", "Брошюра КШС", "Брошюра скр.", "Брошюра пруж"];
    var book_group = ["Книга ТП"];
    var ezd_group = ["Еженедельник", "Ежедневник", "Удостов л.", "Удостов ТП", "Удостов ТП с блоком", "Диплом ТП", "Диплом ТП комплект"];
    var sheet_group = ['Грамота','Карта листовая', 'Карта сфальцованная', 'Афиша', 'Набор открыток', 'ЦБ Бланк', 'Газета сф.', 'Газета скр.', 'Календарь плакат', 'КПриложение к диплому ТП', 'Титул к диплому ТП'];
    var pack_sem_group = ['Пакет для семян'];
    var pack_group = ['Пакет с ручками лента', 'Пакет с ручками шнур'];
    var ek_group = ['Календарь ЕК1', 'Календарь ЕК2', 'Календарь ЕК3'];
    var box_group = ['Коробка трехточка', 'Лоток с телескопическим бортом', 'Коробка Туба', 'Лоток с прямоугольным бортом', 'Коробка для сыпучих продуктов', 'Коробка с дном собираемым вручную', 'Моноблок', 'Шоу-бокс', 'Упаковка плоская'];
    var kld_dom_group = ['Календарь перек. настольный', 'Календарь Домик'];
    
    function inGroup(string) {
      return string == tvp;
    }
    drop_diagram();
    document.getElementById("type_data_res").innerHTML = "";
    if (et_group.some(inGroup)) {
        return "et";
    }
    else if (book_group.some(inGroup)) {
        return "book";
    }
    else if (broshure_group.some(inGroup)) {
        return "broshure";
    }
    else if (ezd_group.some(inGroup)) {
        return "ezd";
    }
    else if (sheet_group.some(inGroup)) {
        return "sheet";
    }
    else if (pack_sem_group.some(inGroup)) {
        return "pack_sem";
    }
    else if (pack_group.some(inGroup)) {
        return "pack";
    }
    else if (ek_group.some(inGroup)) {
        return "ek";
    }
    else if (box_group.some(inGroup)) {
        return "box";
    }
    else if (kld_dom_group.some(inGroup)) {
        return "kld_dom";
    }
    else {
        return "error";
    }
} //определяет группу твп
function reboot(){
    location.reload(true);
} //обновить страницу

function drop(){
        hide_out_data();
        hide_position();
        drop_diagram();
        document.getElementById("change_out_data").style.display = "none";
        document.getElementById("change_place").style.display = "none";
}
function drop_diagram(){
        document.getElementById("diagram").style.background = "none";
        document.getElementById("diagram_out_data").style.background = "none";
        document.getElementById("diagram_out_data").style.outline = "none";
        document.getElementById("legend").style.display = "none";
        document.getElementById("pos_data_res").innerHTML = "";
}

function ch_product() {

    if (ch_group_tvp() == "error"){
        document.getElementById('error').innerHTML = "Для выбранной продукции нет варианта"
        document.getElementById('change_company').style.display = "none";
        document.getElementById("type_data_res").innerHTML = "";
        document.getElementById("change_language").style.display = "none";
        drop();
    }
    else{
        document.getElementById('error').innerHTML = ""
        document.getElementById('change_company').style.display = "block";
    }
    
    
} //после выбора продукции показывает 2 пункт, если для выбранной продукции не определены выходные данные, то выдает ошибку
function ch_lang() {

    document.getElementById('change_language').style.display = "block";
    
} //после выбора компании показывает 3 пункт
function show_out_data() {
    document.getElementById('change_out_data').style.display = "block";
} //отображает блок с выходными данными
function hide_out_data() {
    var a = ['out_data_et_format', 'out_data_eng_format', 'out_data_book_format', 'out_data_rus_format', 'out_data_et_alfa', 'out_data_rus_alfa', 'out_data_eng_alfa'];
    for (var i=0; i<7; i++){
        document.getElementById(a[i]).style.display = "none";
    }
} //скрывает все элементы выходных данных
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
    } else { //если не выбрана компания, то возвращаемся к шагу 2
        drop();
        document.getElementById("type_data_res").innerHTML = "";
        document.getElementById("change_language").style.display = "none";
    }
    if (lang != "Рус" && lang != "Eng") {  //если не выбран язык, то возвращаемся к шагу 3
        drop();
    }

}
function show_position() { //отображает блок с вариантами расположения
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
    pos_data_res = a;
}
function draw_diagram_out_data(a){
    document.getElementById("diagram_out_data").style.background = "url('img/"+a+".jpg')";
    document.getElementById("diagram_out_data").style.backgroundSize = "contain";
    document.getElementById("diagram_out_data").style.backgroundRepeat = "no-repeat";
    document.getElementById("diagram_out_data").style.backgroundPosition = "right";
    document.getElementById("diagram_out_data").style.outline = "1px solid #ccc"
    document.getElementById("legend").style.display = "block";
    document.getElementById("type_data_res").innerHTML = a;
    type_data_res = a;
}
function print_pdf(){
    if(type_data_res == ""){
        alert("Необходимо выбрать тип выходных данных")
    }
    else if(pos_data_res == ""){
        alert("Необходимо выбрать расположение выходных данных")
    }
    else {
    var docInfo = {
    info: {
        title: 'Выходные данные',
        author: "Менеджер",
        subject: '',
        keywords: ''
    },
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins:[506, 597, 0, 0],
    
    header:[
        {
            text:'',
            alignment:'center',
        }
    ],
    
    footer:[
        {
            text:'',
            alignment:'center',
        }
    ],
    content: [
        {
            text:  type_data_res + "        " + pos_data_res,
            fontSize: 12
        }
    ]
}

pdfMake.createPdf(docInfo).download('name.pdf');
    }
} //Генерация PDF
