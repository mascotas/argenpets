define(['facebook'], 
  function(){
    FB.init({
      appId : '144406108991959',
    });
    
    FB.getLoginStatus(function(response) {
      console.log(response);
    });
  });