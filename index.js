/*Attendance*/
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.add').addEventListener('click', function() {
      document.querySelector('.popup-container').style.display = 'block';
    });
  
    document.querySelector('.cancel').addEventListener('click', function() {
      document.querySelector('.popup-container').style.display = 'none';
    });
    document.querySelector('.add_wr').addEventListener('click', function() {
      document.querySelector('.popup-container').style.display = 'none';
    });
  
    /*let today = document.getElementById("today");
    let crtdte = new Date();
    let day = `${crtdte.getDate() < 10 ? "0" : ""}${crtdte.getDate()}`;
    let month = `${(crtdte.getMonth() + 1) < 10 ? "0" : ""}${crtdte.getMonth()+1}`;
    let yr = crtdte.getFullYear();
    console.log(month)
    today.textContent =`${day}/${month}/${yr}`;*/

    const mark = document.querySelector('.work_but');

    mark.addEventListener('click',function(){
      let male = parseInt(document.getElementById('male').value);
      let fmale = parseInt(document.getElementById('female').value);
      let cont = parseInt(document.getElementById('contract').value);
      /*console.log(male);
      console.log(fmale);
      console.log(cont);*/
      if(isNaN(male)){
        male=0;
      }
      if(isNaN(fmale)){
        fmale=0;
      }
      if(isNaN(cont)){
        cont=0;
      }
      /*console.log(male);
      console.log(fmale);
      console.log(cont);*/
      const ct_t = male + fmale+ cont;
      const ct_p = male + fmale+ cont;
      const tot = document.querySelector('.count table tbody tr .tot');
      tot.textContent=ct_t;
      const prs = document.querySelector('.count table tbody tr .prs');
      prs.textContent=ct_p;
      const abs = document.querySelector('.count table tbody tr .abs');
      abs.textContent="0";

      document.querySelector('.workers form').reset();
    });

    const present = document.getElementById('present');
    const absent = document.getElementById('absent');
    
    present.addEventListener('click',function(){
      document.getElementById('present').style.display = 'none';
      document.getElementById('absent').style.display = 'none';
      const dis = document.getElementById('dis');
      dis.textContent="Present"
    });

    absent.addEventListener('click',function(){
      document.getElementById('present').style.display = 'none';
      document.getElementById('absent').style.display = 'none';
      const dis = document.getElementById('dis');
      dis.textContent="absent"
    });
  });
  
  /*Master Node*/
  document.addEventListener('DOMContentLoaded', function () {
    const ven = document.querySelector('.ven');
    const wor = document.querySelector('.wor');
    const cli = document.querySelector('.cli');
    const pro = document.querySelector('.pro');
  
    ven.addEventListener('click', function(){
      window.location.href = "ven_f.html";
    });
    wor.addEventListener('click', function(){
      window.location.href = "lab_f.html";
    });
    cli.addEventListener('click', function(){
      window.location.href = "cli_f.html";
    });
    pro.addEventListener('click', function(){
      window.location.href = "prod_f.html";
    }); 
  });

  /*Client Form*/
  document.addEventListener('DOMContentLoaded', function () {
    const save = document.querySelector('.cli_s');
    const clear = document.querySelector('.cli_c');
  
    save.addEventListener('click',function(){
      window.history.back();
    });

    clear.addEventListener('click', function () {
      document.getElementById('form_c').reset();
  });
  });
  
  /*Product Form*/
  document.addEventListener('DOMContentLoaded', function () {
    const save = document.querySelector('.pro_s');
    const clear = document.querySelector('.pro_c');
  
    save.addEventListener('click',function(){
      window.history.back();
    });

    clear.addEventListener('click', function () {
      document.getElementById('form_p').reset();
  });
  });
  
  /*Labour Form*/
  document.addEventListener('DOMContentLoaded', function () {
    const save = document.querySelector('.lab_s');
    const clear = document.querySelector('.lab_c');

    save.addEventListener('click',function(){
      window.history.back();
    });

    clear.addEventListener('click', function () {
      document.getElementById('form_l').reset();
  });
  });
  
  /*Vendour Form*/
  document.addEventListener('DOMContentLoaded', function () {
    const save = document.querySelector('.ven_s');
    const clear = document.querySelector('.ven_c');
  
    save.addEventListener('click',function(){
      window.history.back();
    });

    clear.addEventListener('click', function () {
        document.getElementById('form_v').reset();
    });
  });

  /*Vendour Management*/
  document.addEventListener('DOMContentLoaded', function () {
    const pent = document.querySelector('.pent');
    const pout = document.querySelector('.pout');
  
    pent.addEventListener('click', function(){
      window.location.href = "pentrym.html";
    });
    pout.addEventListener('click', function(){
      window.location.href = "pordm.html";
    });
  });

  