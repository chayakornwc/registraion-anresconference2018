const $form = $('#signup-form');
var $passwordConfirmation = $('#signup-form').find('#passwordcf')
var $passwordValidation = $('#signup-form').find('#password');
var $email = $('#signup-form').find('#email');
var $attendas = $('.js-attendas').find('.js-list-item');
var preview = $('#preview');
let $selection =null; //attend as a
let $PType = null;
let _THB = 0;
let _USD = 0;
let currentCurrency = null;
let totalpayment = null;
$persentation_type = $('.presentation_types').find('.js-attender');
persentation_type = null
let stdCard = null;
let mouDoc = null;
let stdCardP = null;
let mouDocP = null;
let title = null;
let submission_type =null;
var gender = null
var payTYPESTRING ="";
const _gender = $('.gender').find('[name=gender]');
  _gender.click(function(){
    gender = $(this).val();
    return gender
  })

 $('.dialog-free').delegate('.js-submit', 'click', function(){
$('#signup-form').submit();
 }) 
$('.std-card').delegate('[type=file]', 'change', function(){
  var property = this.files[0];
  
  var fileData  =  new FormData();
  fileData.append('file', property)
  
   $.ajax({
    url:'http://anresconference2018.org/admin/registration/upload_student',
    type:'POST',
    data:fileData,
    contentType:false,
    processData:false,
    cache:false,
    success:function(response){
      stdCard = JSON.parse(response)
      stdCard = stdCard.name
    }
      
  })
    return stdCard
})
$('.mou-doc').delegate('[type=file]', 'change', function(){
  var property = this.files[0];
  
  var fileData  =  new FormData();
  fileData.append('file', property)
  
  $.ajax({
    url:'http://anresconference2018.org/admin/registration/upload_mou',
    type:'POST',
    data:fileData,
    contentType:false,
    processData:false,
    cache:false,
    success:function(response){
      mouDoc = JSON.parse(response)
      mouDoc = mouDoc.name
    }
      
  })
  return mouDoc;
})
  
preview.click(function(){
   let title = $('#title-select').val();
  let fname = $('#firstname').val();
  let lname = $('#lastname').val();
  let email = $('#email').val();
  let affiliation  =  $('#affiliation').val();
  let address = $('#address').val();
  let district = $('#district').val();
  let province = $('#province').val();
  let ZipCode = $('#pos_zip').val();
  let Country = $('#Region').val();
    
      if(title ==null || fname == null || lname ==null ||  affiliation == null || address == null ||   district ==null || province==null || ZipCode ==null || Country == null || email =="" || gender ==null ){
        switch(null || ""){
          case title :  
          swal({
          titile:"Something wentwrong !",
          text:"Please choose a title",
          icon:"warning"   
         });
         location.href = "#title-select";
         $('#title-select').focus();
           break; 
           case fname :  
          swal({
          titile:"Something wentwrong !",
          text:"Please Enter your Firstname",
          icon:"warning"   
         });
         location.href = "#firstname";
         $('#firstname').focus();
           break; 
           case lname :  
           swal({
           titile:"Something wentwrong !",
           text:"Please Enter your Lastname",
           icon:"warning"   
          });
          location.href = "#lasname";
          $('#lastname').focus();
             break; 
          case affiliation :  
             swal({
             titile:"Something wentwrong !",
             text:"Please Enter your affiliation",
             icon:"warning"   
            });
            location.href = "#affiliation";
            $('#affiliation').focus();
              break; 
              case address :  
              swal({
              titile:"Something wentwrong !",
              text:"Please Enter your address",
              icon:"warning"   
             });
             location.href = "#address";
             $('#address').focus();
               break; 
               case district :  
               swal({
               titile:"Something wentwrong !",
               text:"Please Enter your district",
               icon:"warning"   
              });
              location.href = "#district";
              $('#district').focus();
                break;
               case province:
               swal({
                titile:"Something wentwrong !",
                text:"Please Enter your Province",
                icon:"warning"   
               });
               location.href = "#province";
               $('#province').focus();
               break;  
                case ZipCode :  
                swal({
                titile:"Something wentwrong !",
                text:"Please Enter your Postal or ZipCode",
                icon:"warning"   
               });
               location.href = "#pos_zip";
               $('#pos_zip').focus();
                 break; 
                 case Country :  
                 swal({
                 titile:"Something wentwrong !",
                 text:"Please select you country",
                 icon:"warning"   
                });
                location.href = "#country";
                $('#country').focus();
                  break;
                  case email :  
                  swal({
                  titile:"Something wentwrong !",
                  text:"Please Enter your email",
                  icon:"warning"   
                 });
                 location.href = "#email";
                 $('#email').focus();
                 break;
                 case $selection:
                 swal({
                  titile:"Something wentwrong !",
                  text:"Please select your attend as ",
                  icon:"warning"   
                 });
                 location.href = ".presentation_types";
                 $('.presentation_types').focus();
                 break;
                 default:   swal({
                  titile:"Something wentwrong !",
                  text:"Please select your gender ",
                  icon:"warning"   
                 });  
                 break;
         
        }
       
      } else
      {
              if ($selection ==null){
                swal({
                  titile:"Something wentwrong !",
                  text:"Would your like attends as?",
                  icon:"warning"   
                 });
              }else
        if($selection =='International Student' || $selection=='International Student (ASEAN/MOU with KU)' || $selection=='International Delegate' ||$selection== 'International Delegate (ASEAN/MOU with KU)'){
            if($selection =="International Student" && stdCard ==null){
              swal({
                titile:"Something wentwrong !",
                text:"Please  upload you student card",
                icon:"warning"   
               });
             
            
            } else if($selection=='International Student (ASEAN/MOU with KU)' && stdCard ==null || $selection=='International Student (ASEAN/MOU with KU)' && mouDoc ==null){
              swal({
                titile:"Something wentwrong !",
                text:"Please  upload you student card and mou document",
                icon:"warning"   
               });
            } else if  ($selection =="International Delegate (ASEAN/MOU with KU)" && mouDoc ==null){
              swal({
                titile:"Something wentwrong !",
                text:"Please  upload you  mou document",
                icon:"warning"   
               });
            }
            else if (persentation_type == null) {
              swal({
                titile:"Something wentwrong !",
                text:"Please choose a presentation type",
                icon:"warning"   
               });
            } else if (persentation_type == "Oral presentation" && submission_type ==null || persentation_type == "Poster presentation" && submission_type ==nul){
              swal({
                titile:"Something wentwrong !",
                text:"Please choose a submisstion type",
                icon:"warning"   
               });
            }else if ($PType ==null){
              swal({
                titile:"Something wentwrong !",
                text:"Please choose a payment type",
                icon:"warning"   
               });
            }
            
            else {
             
                 
          currentCurrency = addInformation('USD');
          var d = new Date();
          var time = d.getTime();
          var jan = new Date (2018,1, 1)
              jan = jan.getTime();
          var feb = new Date(2018, 1, 28)
              feb = feb.getTime();
          var mar = new Date(2018, 2, 27)
              mar = mar.getTime();
          console.log('Time:'+time+'jan:'+jan+'mar:'+mar);
          switch($selection){
            case'International Student':
            switch(true){
              case time <jan:
                _USD = addInformation(320);
                _THB = addInformation(0);
               
                break;
              case time < feb :
              _USD = addInformation(370);
              _THB = addInformation(0);
             
              break;
              case time < mar :
              _USD = addInformation(370);
              _THB = addInformation(0);
              
               default: 
               swal({
                titile:"Sorry !",
                text:"Sorry This time registration was closed",
                icon:"warning"   
                });
                break;
            }
            break;
           case'International Student (ASEAN/MOU with KU)':
           switch(true){
            case time <jan:
              _USD = addInformation(270);
              _THB = addInformation(0);
             
              break;
            case time < feb :
            _USD = addInformation(320);
            _THB = addInformation(0);
           
            break;
            case time < mar :
            _USD = addInformation(370);
            _THB = addInformation(0);
            
             default: 
             swal({
              titile:"Sorry !",
              text:"Sorry This time registration was closed",
              icon:"warning"   
              });
              break;
            } // close switchcase true
            break;
            case'International Delegate':
            switch(true){
              case time <jan:
                _USD = addInformation(470);
                _THB = addInformation(0);
               
                break;
              case time < feb :
              _USD = addInformation(520);
              _THB = addInformation(0);
             
              break;
              case time < mar :
              _USD = addInformation(570);
              _THB = addInformation(0);
              
               default: 
               swal({
                titile:"Sorry !",
                text:"Sorry This time registration was closed",
                icon:"warning"   
                });
                break;
              } // close switchcase true
              break;
              case'International Delegate (ASEAN/MOU with KU)':
              switch(true){
                case time <jan:
                  _USD = addInformation(400);
                  _THB = addInformation(0);
                 
                  break;
                case time < feb :
                _USD = addInformation(450);
                _THB = addInformation(0);
             
                break;
                case time < mar :
                _USD = addInformation(500);
                _THB = addInformation(0);
                
                 default: 
                 swal({
                  titile:"Sorry !",
                  text:"Sorry This time registration was closed",
                  icon:"warning"   
                  });
                  break;
                } // close switchcase true
                break;
          }
                 // berfore submit
        switch(currentCurrency){
          case'THB':
          totalpayment = addInformation(_THB+' Bath');
          break;
          case'USD':
          totalpayment = addInformation(_USD+' USD');
          break;
        }
       
       $.when(
        $('.dialog-free').append(
          $('<div>', {class:'modal fade ', "tabindex":"-1", role:"dialog", "aria-labelledby":"LargeModalLabel", "aria-hidden":"true"}).append(
          $('<div>', {class:"modal-dialog modal-lg", role:"document"}).append(
            $('<div>', {class:"modal-content"}).append(
             $('<div>',{class:'modal-header'}).append(
               $('<span>', {class:'modal-title'}).text('Registration confirmation'),
               $('<button>',{type:'button', class:'close', "data-dismiss":"modal", "aria-label":'Close'}).append(
                 $('<span>', {"aria-hidden":"true"}).html('&times;')
               )

             ),
             $('<div>',{class:"modal-body"}).append(
              $('<ul>').append(
                $('<li>',{text:`Title `+title}),
                $('<li>',{text:'First Name '+fname}),
                $('<li>',{text:'Last Name '+lname}),
                $('<li>',{text:"Gender "+gender}),
                $('<li>',{text:"Affiliation "+affiliation}),
                $('<li>', {text:'Address '+address}),
                $('<li>', {text:'State / Province '+province}),
                $('<li>', {text:'Country / Region '+Country}),
                $('<li>', {text:'Postal '+ZipCode}),
                $('<li>', {text:'email '+email}),
                $('<li>', {text:'Attend as a '+$selection}),
                $('<li>', {text:'Presentation type '+persentation_type}),
               submission_type !=null ?  $('<li>', {text:'Submission type '+submission_type}) : '' ,
               stdCard !=null ? $('<li>', {text:'Student card '+stdCard}) : '' ,
                mouDoc !=null ? $('<li>', {text:'Mou Document '+mouDoc}) :'',
                $('<li>', {text:'Payment Type '+payTYPESTRING})
              )
           ),
           $('<div>',{class:"modal-footer"}).append(
             $('<button>', {type:"button", class:"btn btn-orange js-submit", text:"Confirm and payment"}),
             $('<button>', {type:"button", class:"btn ", "data-dismiss":"modal", text:"Close"})
           )
            )
          )
          )
        )
      ).then(
        $('.modal').modal('show')
      )
                
         }
        }
        else if ($selection == 'Thai Delegate' ||$selection == 'Thai Student'){
            if($selection == 'Thai Student' && stdCard==null){
              swal({
                titile:"Sorry !",
                text:"Please upload your student card",
                icon:"warning"   
                });
            }else if (persentation_type == null) {
              swal({
                titile:"Something wentwrong !",
                text:"Please choose a presentation type",
                icon:"warning"   
               });
            } else if (persentation_type == "Oral presentation" && submission_type ==null || persentation_type == "Poster presentation" && submission_type ==nul){
              swal({
                titile:"Something wentwrong !",
                text:"Please choose a submisstion type",
                icon:"warning"   
               });
            }else if ($PType ==null){
              swal({
                titile:"Something wentwrong !",
                text:"Please choose a payment type",
                icon:"warning"   
               });
            }else 
            {
                
         currentCurrency = addInformation('THB');       
          var d = new Date();
          var time = d.getTime();
          var jan = new Date (2018,1, 1)
              jan = jan.getTime();
          var feb = new Date(2018, 1, 28)
              feb = feb.getTime();
          var mar = new Date(2018, 2, 27)
              mar = mar.getTime();
        switch($selection){
          case 'Thai Delegate':
              switch(true){
                case time < jan:
                _USD = addInformation(0);
                _THB = addInformation(5500);
               
                break;
              case time < feb :
              _USD = addInformation(0);
              _THB = addInformation(6500);
            
              break;
              case time < mar :
              _USD = addInformation(0);
              _THB = addInformation(7500);
              
               default: 
               swal({
                titile:"Sorry !",
                text:"Sorry This time registration was closed",
                icon:"warning"   
                });
                break;
              }
              break;
          case 'Thai Student':
          switch(true){
            case time < jan:
            _USD = addInformation(0);
            _THB = addInformation(3500);
           
            break;
          case time < feb :
          _USD = addInformation(0);
          _THB = addInformation(4500);
         
          break;
          case time < mar :
          _USD = addInformation(0);
          _THB = addInformation(5500);
          
           default: 
           swal({
            titile:"Sorry !",
            text:"Sorry This time registration was closed",
            icon:"warning"   
            });
            break;
          }
          break;    

        }
        
              
        
        // berfore submit
        switch(currentCurrency){
          case'THB':
          totalpayment = addInformation(_THB+' Baht ');
          break;
          case'USD':
          totalpayment = addInformation(_USD+' USD');
          break;
        }
       
       $.when(
        $('.dialog-free').append(
          $('<div>', {class:'modal fade ', "tabindex":"-1", role:"dialog", "aria-labelledby":"LargeModalLabel", "aria-hidden":"true"}).append(
          $('<div>', {class:"modal-dialog modal-lg", role:"document"}).append(
            $('<div>', {class:"modal-content"}).append(
             $('<div>',{class:'modal-header'}).append(
               $('<span>', {class:'modal-title'}).text('Registration confirmation'),
               $('<button>',{type:'button', class:'close', "data-dismiss":"modal", "aria-label":'Close'}).append(
                 $('<span>', {"aria-hidden":"true"}).html('&times;')
               )

             ),
             $('<div>',{class:"modal-body"}).append(
              $('<ul>').append(
                $('<li>',{text:`Title `+title}),
                $('<li>',{text:'First Name '+fname}),
                $('<li>',{text:'Last Name '+lname}),
                $('<li>',{text:"Gender "+gender}),
                $('<li>',{text:"Affiliation "+affiliation}),
                $('<li>', {text:'Address '+address}),
                $('<li>', {text:'State / Province '+province}),
                $('<li>', {text:'Country / Region '+Country}),
                $('<li>', {text:'Postal '+ZipCode}),
                $('<li>', {text:'email '+email}),
                $('<li>', {text:'Attend as a '+$selection}),
                $('<li>', {text:'Presentation type '+persentation_type}),
               submission_type !=null ?  $('<li>', {text:'Submission type '+submission_type}) : '' ,
               stdCard !=null ? $('<li>', {text:'Student card '+stdCard}) : '' ,
                mouDoc !=null ? $('<li>', {text:'Mou Document '+mouDoc}) :'',
                $('<li>', {text:'Payment Type '+payTYPESTRING}),
                $('<li>', {text:'Total amount payable '+totalpayment})
              )
           ),
           $('<div>',{class:"modal-footer"}).append(
            $('<button>', {type:"button", class:"btn btn-orange js-submit", text:"Confirm and payment"}),
             $('<button>', {type:"button", class:"btn ", "data-dismiss":"modal", text:"Close"})
           )
            )
          )
          )
        )
      ).then(
        $('.modal').modal('show')
      )
    }
         }
      }
  
});

$('.dialog-free').delegate('.modal','hidden.bs.modal', function (e) {
  $('.dialog-free').empty();
})

$('.submission_type').delegate('[name=submission_types]', 'click', function(){
   submission_type = $(this).val();
   return submission_type
});
$persentation_type.click(function(){
  let $this = $(this).val();
  persentation_type = $this;

  const data = $('.submission_type');
    if($this =='Poster presentation' || $this =='Oral presentation'){
      data.empty();
      data.append(
        $('<span>',{text:" choose a submission types"}),
        $('<div>', {class:'linebox'}).append(
          $('<label>').append(
            $('<input>', {type:"radio", value:"Abstract", name:"submission_types", "id":"abstract", required:"required"}),' Abstract'
          ),
          $('<label>').append(
            $('<input>', {type:"radio",value:"Proceeding", name:"submission_types", "id":"proceeding", required:"required"}),' Proceeding'
          ),
          $('<label>').append(
            $('<input>', {type:"radio",value:"Full article", name:"submission_types", "id":"full_article", required:"required"}),' Full article'
          )
        )
      )
      
    }else{
      data.empty();
    }
    
    return persentation_type
});
  function studentUpload(){

  }
$attendas.click( function(){
 let $this = $(this).val();
 $selection = addInformation($this);
 $PType = addInformation(null);
  switch($selection){
    case 'Thai Student':
    $('.payment-type').empty(); 
    $('.std-card').empty();
    $('.mou-doc').empty();
  $('.std-card').append(
    $('<div>', {class:'form-group'}).append(
      $('<label>', {for:"Stdinput"}).text('Please upload your student card'),
      $('<input>', {type:"file", id:"Stdinput", name:"std-card", class:"form-control-file", "aria-describedby":"fileHelp"}),
      $('<small>', {id:"fileHelp", class:"form-text text-muted"}).text('Please upload only JPEG or JPG file(.jpg) and file size must not more than 2MB')
      )
    )
  $('.payment-type').append(
    $('<span>').text('Payment type*'),
    $('<div>', {class:"linebox"}).append(
      $('<label>').append(
        $('<input>', {type:"radio", value:1, name:"payment_type", required:"required"}),(' Bill payment ')
      ),
      $('<label>').append(
        $('<input>', {type:"radio", value:2, name:"payment_type", required:"required"}),
       (' Credit card')
      )
    )
  )


    break;
    case 'Thai Delegate':
    $('.payment-type').empty(); 
    $('.std-card').empty();
    $('.mou-doc').empty();
    $('.payment-type').append(
      $('<span>').text('Payment type*'),
      $('<div>', {class:"linebox"}).append(
        $('<label>').append(
          $('<input>', {type:"radio", value:"1", name:"payment_type", required:"required"}),(' Bill payment ')
        ),
        $('<label>').append(
          $('<input>', {type:"radio", value:"2", name:"payment_type", required:"required"}),
         (' Credit card')
        )
      )
    )
  
  
    break;
    case 'International Student':
    $('.payment-type').empty(); 
    $('.std-card').empty();
    $('.mou-doc').empty();
    $('.std-card').append(
      $('<div>', {class:'form-group'}).append(
        $('<label>', {for:"Stdinput"}).text('Please upload your student card'),
        $('<input>', {type:"file", id:"Stdinput", nfme:"std-card", class:"form-control-file", "aria-describedby":"fileHelp"}),
        $('<small>', {id:"fileHelp", class:"form-text text-muted"}).text('Please upload only JPEG or JPG file(.jpg) and file size must not more than 2MB')
          
        )
      )
      $('.payment-type').append(
        $('<span>').text('Payment type*'),
        $('<div>', {class:"linebox"}).append(
          $('<label>').append(
            $('<input>', {type:"radio", value:"2", name:"payment_type", required:"required"}),
           (' Credit card')
          )
        )
      )
    
    break;
    case 'International Student (ASEAN/MOU with KU)':
    $('.payment-type').empty(); 
    $('.std-card').empty();
    $('.mou-doc').empty();
    $('.std-card').append(
      $('<div>', {class:'form-group'}).append(
        $('<label>', {for:"Stdinput"}).text('Please upload your student card'),
        $('<input>', {type:"file", name:"std-card", id:"Stdinput", class:"form-control-file", "aria-describedby":"fileHelp"}),
        $('<small>', {id:"fileHelp", class:"form-text text-muted"}).text('Please upload only JPEG or JPG file(.jpg) and file size must not more than 2MB')
          
        )
      )
      $('.mou-doc').append(
        $('<div>', {class:'form-group'}).append(
          $('<label>', {for:"mou-input"}).text('Please upload your mou document'),
          $('<input>', {type:"file", name:"mou-doc", id:"mou-input", class:"form-control-file", "aria-describedby":"fileHelp"}),
          $('<small>', {id:"fileHelp", class:"form-text text-muted"}).text('Please upload only JPEG or JPG file(.jpg) and file size must not more than 2MB')
            
          )
        )
        $('.payment-type').append(
          $('<span>').text('Payment type*'),
          $('<div>', {class:"linebox"}).append(
            $('<label>').append(
              $('<input>', {type:"radio", value:"2", name:"payment_type", required:"required"}),
             (' Credit card')
            )
          )
        )
       
    break;
    case 'International Delegate':
    $('.std-card').empty();
    $('.mou-doc').empty();
    $('.payment-type').empty();
    $('.payment-type').append(
      $('<span>').text('Payment type*'),
      $('<div>', {class:"linebox"}).append(
        $('<label>').append(
          $('<input>', {type:"radio", value:"2", name:"payment_type", required:"required"}),
         (' Credit card')
        )
      )
    )
    break;
    case 'International Delegate (ASEAN/MOU with KU)':
    $('.std-card').empty();
    $('.mou-doc').empty();
    $('.payment-type').empty();
    $('.mou-doc').append(
      $('<div>', {class:'form-group'}).append(
        $('<label>', {for:"mou-input"}).text('Please upload your mou document'),
        $('<input>', {type:"file", name:"mou-doc", id:"mou-input", class:"form-control-file", "aria-describedby":"fileHelp"}),
        $('<small>', {id:"fileHelp", class:"form-text text-muted"}).text('Please upload only JPEG or JPG file(.jpg) and file size must not more than 2MB')
        )
      )
      $('.payment-type').append(
        $('<span>').text('Payment type*'),
        $('<div>', {class:"linebox"}).append(
          $('<label>').append(
            $('<input>', {type:"radio",  value:"2", name:"payment_type", required:"required"}),
           (' Credit card')
          )
        )
      )
      
    break;
  }
});


function addInformation(values){
  return values
}
$('#phonenumber').on('keyup, change', function(){
  var phone = $('#phonenumber').val();
  phonenumberValidation(phone);
})
  $passwordValidation.on('keyup, change', function(){
    var res = $('.password').find('#res');
    var password = $('#password').val();
    res.html(passwordValidation(password));
    passwordConfirmation(password);
  })

$passwordConfirmation.on('keyup, change', function(){
    var password = $('#password').val();
    passwordConfirmation(password);
})
$email.on('keyup, change', function(){
  
  var email =  $(this).val();
  var result = $('.lf-field.email').find('.res');
if(isValidEmailAddress(email)){
    result.removeClass('Invalid');
    result.addClass('Done');
  //  result.html('');
}else{
  result.removeClass('Done');
  result.addClass('Invalid');
  //result.html('กรุณาป้อนข้อมูลให้ถูกต้องตามรูปแบบ เช่น example.lpru.th');
}
  if(email==''){
  result.removeClass('Invalid Done');
  }
})
function passwordConfirmation(password){
  var passwordcf = $('#passwordcf').val();
  if(passwordcf==""){
    return false
  }
    if(password == passwordcf){
        var result = $('.lf-field.password-cf').find('.res');
      result.removeClass('Invalid');
      result.addClass('Done');
    }else{
    var result = $('.lf-field.password-cf').find('.res');
      result.removeClass('Done');
      result.addClass('Invalid');
  //    var invalid = $("#passwordcf").find('.Invalid');
    }
}
$('.payment-type').delegate('[name=payment_type]', 'click', function(){

  $PType = addInformation($(this).val());
  switch ($PType){
    case "1":  payTYPESTRING ="Bill payment";
    return payTYPESTRING
    break;
    case "2" : payTYPESTRING = "Credit card";
    return payTYPESTRING
    break;
  }
  
});
function phonenumberValidation(phone){
var res = $('.phone-number').find('.res');
  if(phone=="") {
    res.removeClass('Done Invalid');
    return false
}
    if (phone.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/) && phone.length < 13) {
        res.removeClass('Invalid');
        res.addClass('Done');
    }
    else {
        res.removeClass('Done');
      res.addClass('Invalid');
    }

  }
function passwordValidation(password){
  var strength = 0;
  var result = $('.lf-field.password').find('#res');
  if(password=='')return false
  if (password.length < 6 ){
    result.removeAttr('Class')
    result.addClass('error')
    return'รหัสผ่านสั้น กรุณาลองอีกครั้ง'
  }
  if (password.length >7) strength +=1
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
  if (password.match(/([a-zA-Z])/)&&password.match(/([0-9])/))strength +=1
  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength +=1
  if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/))strength +=1
  console.log(strength);

  switch (strength) {
    case 1:
      result.removeAttr('Class')
      result.addClass('weak')
      return'รหัสผ่านนี้คาดเดาง่าย'
      break;
    case 2 :
      result.removeAttr('Class')
      result.addClass('good')
    return'รหัสผ่านคาดนี้เดาค่อนข้างยาก'
    break;
    case 3:
    result.removeAttr('Class')
    result.addClass('strong')
    return'รหัสผ่านนี้ปลอดภัย'
      break;
  }
}

// Checking before sending data
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};
$('#signup-form').on('submit', function (e){
  
  e.preventDefault();
  var title = $('#title-select').val();
  let fname = $('#firstname').val();
  let lname = $('#lastname').val();
  let affiliation = $('#affiliation').val();

  let email = $('#email').val();
  let address = $('#address').val();
  let district = $('#district').val();
  let province = $('#province').val();
  let ZipCode = $('#pos_zip').val();
  let Country =$('#Region').val();

    if (title=="" || title== null ){
      $('.modal').modal('hide');
      swal({
        titile:"Something wentwrong !",
        text:"Please check infomation and try agian",
        icon:"warning"   
      })
    }
  $.ajax({
   type:"POST",
   url:"./admin/registration/save",
   data: {
    title:title,
    firstname:fname,
    lastname:lname,
    gender:gender,
    affiliation:affiliation,
    address:address,
    district:district,
    province:province,
    postal:ZipCode,
    region:Country,
    email:email,
    attend_type:$selection,
    presentation_type:persentation_type,
    submission_type:submission_type,
    payment_type:$PType,
    mou_doc:mouDoc,
    stu_card:stdCard,
  },
   success:function(response) {
    swal("Success!", "you information update!", "success");
  }
 
 })
    $('#PSource').val(3);
    $('#PSourceID').val(234);
    $('#PDescription').val('ANRES 2018 International Conference of Agriculture and Natural Resources, Hotel Windsor Suites & Convention Bangkok Thailand');
    $('#PType').val($PType);
    $('#TotAmntTHB').val(5500);
    $('#TotAmntUSD').val(0);
    $('#Email').val(email);
    $('#Name').val(fname+" "+lname);
    $('#Address').val(address);
    $('#District').val(district);
    $('#Province').val(province);
    $('#ZipCode').val(ZipCode);
    $('#Country').val(Country);
    $('#ItemDetail').val('Submitted fee for KJSS;1;80;2800|Accepted fee for ANRES;1;100;3500');
    $('#RetURL').val('https://anresconference2018.org/admin/registration/comfirm_payment');
// $('#form1').submit();


})
