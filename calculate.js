function calculateSGPA() {
    const ada = parseFloat(document.getElementById('ada').value);
    const dms = parseFloat(document.getElementById('dms').value);
    const dbms = parseFloat(document.getElementById('dbms').value);
    const ai = parseFloat(document.getElementById('ai').value);
    const biology = parseFloat(document.getElementById('biology').value);
    const uhv = parseFloat(document.getElementById('uhv').value);
    const adalab = parseFloat(document.getElementById('adalab').value);
    const julialab = parseFloat(document.getElementById('julialab').value);
    totalcredits=(3*getGrade(ada))+(3*getGrade(dms))+(4*getGrade(dbms))+(4*getGrade(ai))+(2*getGrade(biology))+getGrade(uhv)+getGrade(adalab)+getGrade(julialab)
    SGPA=(totalcredits/190)*10;
    document.getElementById('result').innerText=SGPA.toFixed(2);
}
function getGrade(marks){
    if(marks>=90)
        return 10;
    else if(marks>=80 && marks<90)
        return 9;
    else if(marks>=70 && marks<80)
        return 8;
    else if(marks>=60 && marks<70)
        return 7;
    else if(marks>=50 && marks<60)
        return 6;
    else if(marks>=40 && marks<50)
        return 5;
    else if(marks>=30 && marks<40)
        return 4;
    else if(marks>=20 && marks<30)
        return 3;
    else if(marks>=10 && marks<20)
        return 2;
    else if(marks>=0 && marks<10)
        return 1;
    else
        return 0;
}
function resetFields() {
    document.getElementById('ada').value = '';
    document.getElementById('dms').value = '';
    document.getElementById('dbms').value = '';
    document.getElementById('ai').value = '';
    document.getElementById('biology').value = '';
    document.getElementById('uhv').value = '';
    document.getElementById('adalab').value = '';
    document.getElementById('julialab').value = '';
    document.getElementById('result').innerText = '0';
}
