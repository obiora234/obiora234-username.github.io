function sendMail(e){
 e.preventDefault();
 const n=document.getElementById("name").value.trim(), m=document.getElementById("message").value.trim(),
 em=document.getElementById("email").value.trim(), i=document.getElementById("interest").value;
 const subject=encodeURIComponent("NANDO enquiry — "+i);
 const body=encodeURIComponent(`Name/Organisation: ${n}\nEmail: ${em}\nInterest: ${i}\n\n${m}`);
 location.href=`mailto:info@nando-medical.com?subject=${subject}&body=${body}`;
}