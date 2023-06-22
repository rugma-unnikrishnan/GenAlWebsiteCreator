$(document).ready(function(){
    $.getJSON("data.json", function(data){
        console.log(data)
        $('.company').html(data.company);
        $('.title').html(data.title);
        $('.subtitle').html(data.subtitle);
        $('.aboutus1').html(data.aboutus[0].title); 
        $('.aboutus2').html(data.aboutus[0].subtitle); 
        $('.aboutus3').html(data.aboutus [1][0].heading1); 
        $('.aboutus4').html(data.aboutus [1][0].subheading1);
        $('.aboutus5').html(data.aboutus[1][1].heading2); 
        $('.aboutus6').html(data.aboutus[1][2].heading3);
        $('.aboutus7').html(data.aboutus[1][3].heading4);
        $('.aboutus8').html(data.aboutus [1][1].subheading2); 
        $('.aboutus9').html(data.aboutus [1] [2].subheading3);
        $('.aboutus10').html(data.aboutus [1] [3].subheading4);
        $('.servicesTitle').html(data.services[0].title);
        $('.service1').html(data.services [1][0].heading1); 
        $('.des1').html(data.services [1][0].subheading1);
        $('.service3').html(data.services [1][1].heading2);
        $('.service4').html(data.services [1][2].heading3);
        $('.service2').html(data.services[1][3].heading4); 
        $('.service6').html(data.services [1][4].heading5);
        $('.service7').html(data.services [1][5].heading6);
        $('.des2').html(data.services[1][1].subheading2);
        $('.des3').html(data.services[1][2].subheading3);
        $('.des4').html(data.services [1] [3].subheading4);
        $('.des5').html(data.services [1][4].subheading5);
        $('.des6').html(data.services [1][5].subheading6);
    });
})