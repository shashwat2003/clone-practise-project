var isEmployeeActive = true;
function onClick(element){
    if ((element == 'employee') && (!isEmployeeActive)){
        isEmployeeActive = true;
        document.getElementById('hirer_b').classList.remove('active');
        document.getElementById('employee_b').classList.add('active');

        document.getElementsByClassName('employee')[0].classList.remove('hidden');
        document.getElementsByClassName('hirer')[0].classList.add('hidden');
        
    }
    else if((element == 'hirer') && (isEmployeeActive)){
        isEmployeeActive = false;
        document.getElementById('employee_b').classList.remove('active');
        document.getElementById('hirer_b').classList.add('active');

        document.getElementsByClassName('hirer')[0].classList.remove('hidden');
        document.getElementsByClassName('employee')[0].classList.add('hidden');


    }
}