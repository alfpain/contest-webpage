function sendTheMail(){var e=$("#nameField").val(),a=$("#companyField").val(),n=$("#emailField").val(),o=$("#messageField").val();$("#nameField").val(""),$("#companyField").val(""),$("#emailField").val(""),$("#messageField").val("");var l="Name: "+e+"\nCompany: "+a+"\nMessage:\n\n"+o,i={message:{from_email:n,to:[{email:"tabarinisergio@gmail.com"}],subject:"New contact mail",text:l}};m.messages.send(i,function(e){console.log(JSON.stringify(e))},function(e){console.log(JSON.stringify(e))})}var m=new mandrill.Mandrill("2ZMRx5Wr9KOKm3hCKTfc4Q");$(document).ready(function(){$(function(){$("#nameField").popover({content:"Your name."}),$("#emailField").popover({content:"Your email."}),$("#companyField").popover({content:"Your company."}),$("#messageField").popover({content:"Your message."})})});