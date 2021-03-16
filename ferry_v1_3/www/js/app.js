// Dom7
var $ = Dom7;
var CONFIG = "http://ferryglobal.com/FERRY/";

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});

$(".balance").each(function() { 
    alert("Your book is overdue"); 
});



$(function(){
  var $refreshButton = $('#refresh');
  var $results = $('#css_result');
  
  function refresh(){
    var css = $('style.cp-pen-styles').text();
    $results.html(css);
  }

  refresh();
  $refreshButton.click(refresh);
  
  // Select all the contents when clicked
  $results.click(function(){
    $(this).select();
  });
});

var my_user_sys_id =localStorage.getItem("user_sys_id");
var my_e_password = localStorage.getItem("e_pass");
var my_full_name =localStorage.getItem("c_name");
var c_phone = localStorage.getItem("c_phone");
var my_country = localStorage.getItem("c_country");

if(my_country == "USA"){

  var my_currency = "USD";

} else if(my_country == "United Kingdom"){

  var my_currency = "United Kingdom";

} else if(my_country == "Ghana"){

  var my_currency = "GHc";

} else if(my_country == "Nigeria"){

  var my_currency = "NGN";

} else if(my_country == "Russia"){

 var my_currency = "RUB";      
 
} 


var b_name =localStorage.getItem("b_name");
var b_phone = localStorage.getItem("b_phone");
var b_start_time =localStorage.getItem("b_start_time");
var b_end_time = localStorage.getItem("b_end_time");
var b_description = localStorage.getItem("b_description");
var b_ferry_address = localStorage.getItem("b_ferry_address");
var b_logo = localStorage.getItem("b_logo");

var my_app_version = "1.3";
var current_page = "login";
var my_addresses_last_sku = 0;
var searching_real = 0;
var my_search_last_sku = 0;
var my_addresseslinks_last_sku = 0;
var business_addresses_last_sku = 0;
var my_orders_last_sku = 0;
var setBusinessInfoToggle = 0;
var addShopItemToggle = 0;
var business_this_sku = 0;
var curr_address_ferry_city = "";
var curr_address_ferry_country = "";
var curr_address_ferry_name = "";
var curr_address_ferry_state = "";
var curr_ferry_address = "";
var curr_address_ownership_status = "";
var curr_address_phone = "";
var curr_address_users_name = "";
var curr_address_verified_status = "";
var curr_address_this_sku = "";
var curr_loc_name = "";
var business_closetime = "";
var business_starttime = "";
var business_closetime = "";
var business_starttime = "";
var business_time = "";
var business_logo = "";
var business_description = "";
var business_type = "";
var business_address_ferry_city = "";
var business_address_ferry_country = "";
var business_address_ferry_name = "";
var business_address_ferry_state = "";
var business_ferry_address = "";
var business_address_ownership_status = "";
var business_address_phone = "";
var business_name = "";
var business_address_verified_status = "";
var business_this_sku = "";
var business_loc_name = "";
var real_latitude = "";
var real_longitude = "";
var getting_address = 0;

var timer = null;

function checkLongPressStart(){
  timer = setTimeout( emptyCart, 2000 );
};

function checkLongPressEnd(){
  clearTimeout( timer );
};

function signMeOut(){

      my_user_sys_id = "";
      my_e_password = "";
      my_full_name = "";
      my_phone = "";

      localStorage.removeItem('user_sys_id');
      localStorage.removeItem('e_pass');
      localStorage.removeItem('c_name');
      localStorage.removeItem('c_phone');
      localStorage.removeItem('c_country');
      localStorage.removeItem('cartItems');
      localStorage.removeItem("b_name");
      localStorage.removeItem("b_phone");
      localStorage.removeItem("b_start_time");
      localStorage.removeItem("b_end_time");
      localStorage.removeItem("b_description");
      localStorage.removeItem("b_ferry_address");
      localStorage.removeItem("b_logo");

}

function checkIfSignedIn(){
    console.log("checking");
    var my_user_sys_id =localStorage.getItem("user_sys_id");
    var my_e_password =localStorage.getItem("e_pass");
    var my_full_name =localStorage.getItem("c_name");
    var my_phone =localStorage.getItem("c_phone");
    var my_country =localStorage.getItem("c_country");
    var my_app_version = "1.3";

    console.log("my_user_sys_id : " + my_user_sys_id);
    console.log("my_e_password : " + my_e_password);
    console.log("my_full_name : " + my_full_name);
    console.log("my_phone : " + my_phone);
    console.log("my_country : " + my_country);
    console.log("my_app_version : " + my_app_version);


    if(my_user_sys_id == null || my_app_version == null || my_country == null || my_e_password == null  || my_full_name == null  || my_phone == null){

          // AUTO SIGN-OUT
          signMeOut();

    } else {

      if(my_user_sys_id.trim() != "" && my_e_password.trim() != "" && my_app_version.trim() != "" && 
        my_phone.trim() != "" && my_full_name.trim() != ""  && my_country.trim() != "" ){

          $('#bodymain').append('<a id="success_signup" style="display : none;" href="/main/">success</a>');
          app.preloader.hide();
          current_page = "main";
          $('#success_signup').click();


      }

    }

}


function checkLogin() {

    var phone_value = document.getElementById("dis_username").value;
    var disPassword = document.getElementById("dis_password").value;
    var this_country_code = document.getElementById('my_country').value;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


    if(phone_value.trim() == "" || disPassword.trim() == "" ){

        var toastBottom = app.toast.create({
          text: 'All Fields Must Be Completed',
          closeTimeout: 2000,
        });
        toastBottom.open();

    } else if(this_country_code == ""){

        var toastBottom = app.toast.create({
          text: 'Choose your country',
          closeTimeout: 2000,
        });
        toastBottom.open();

    } else if(!phone_value.match(phoneno)){

        var toastnot = app.toast.create({
          text: 'Enter your phone number WITHOUT your country code',
          closeTimeout: 2000,
        })
        toastnot.open();

    } else if (phone_value.trim() != "" && disPassword.trim() != ""){

        if(phone_value.charAt(0) == "0"){
            phone_length = phone_value.length;
            phone_value = "+" + this_country_code + phone_value.slice(1, phone_length);
        }



       var url_real = CONFIG + "inc/android_login.php";
       var loginData = {
          "emailorphone" : phone_value,
          "my_app_version" : my_app_version,
          "password" : disPassword
      };

      console.log(loginData);

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){

            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
                return;
            }
              var loginResponse = JSON.parse(response);
            
              console.log(loginResponse);

              if(loginResponse["datareturned"][0]["status"] == "yes"){

                localStorage.setItem("user_sys_id", loginResponse["datareturned"][0]["user_sys_id"]);
                localStorage.setItem("e_pass", loginResponse["datareturned"][0]["key"]);
                localStorage.setItem("c_name", loginResponse["datareturned"][0]["i_full_name"]);
                localStorage.setItem("c_phone", loginResponse["datareturned"][0]["i_phone"]);
                localStorage.setItem("c_country", loginResponse["datareturned"][0]["i_country"]);
                $('#lgr').append('<a id="success_signup" style="display : none;" href="/main/">success</a>');
                
                my_user_sys_id = loginResponse["datareturned"][0]["user_sys_id"];
                my_e_password = loginResponse["datareturned"][0]["key"];
                my_full_name = loginResponse["datareturned"][0]["i_full_name"];
                c_phone = loginResponse["datareturned"][0]["i_phone"];
                my_country = loginResponse["datareturned"][0]["i_country"];
                current_page = "main";

                app.preloader.hide();
                $('#success_signup').click();


              } else {

                var this_message = loginResponse["datareturned"][0]["error"];
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();

              }
              app.preloader.hide();

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
          }
        });
        
    } else {

      alert("Something went awry");

    }


}


function checkSignup() {

    var firstname = document.getElementById("signup_fname").value;
    var lastname = "";
    var pottname = "4262";
    var sex = "Not Set";
    var dob = getTodaysDate();
    var referrer = document.getElementById("referrer_phone").value;
    var phone_value = document.getElementById("signup_email").value;
    var password = document.getElementById("signup_password").value;
    var repeat_password = document.getElementById("signup_password_repeat").value;
    var this_country_code = document.getElementById('my_country').value;
    if(this_country_code.trim() == "1"){
    
      var country = "USA";

    } else if(this_country_code.trim() == "44"){
    
      var country = "United Kingdom";

    } else if(this_country_code.trim() == "233"){
    
      var country = "Ghana";

    } else if(this_country_code.trim() == "234"){
    
      var country = "Nigeria";

    } else if(this_country_code.trim() == "7"){

     var country = "Russia";      
    } else {
      alert("Choose Your Country");
      return;
    }
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


    if(firstname.trim() == "" || pottname.trim() == ""
       || sex.trim() == "" || dob.trim() == "" || country.trim() == "" 
       || phone_value.trim() == "" || password.trim() == "" 
       || repeat_password.trim() == "" || this_country_code.trim() == ""){

        var toastBottom = app.toast.create({
          text: 'All Fields Must Be Completed',
          closeTimeout: 2000,
        });
        toastBottom.open();

    } else if(password != repeat_password){

        var toastBottom = app.toast.create({
          text: 'Passwords Do Not Match',
          closeTimeout: 2000,
        });
        toastBottom.open();

    } else if(!phone_value.match(phoneno)){

        var toastnot = app.toast.create({
          text: 'Enter your phone number WITHOUT your country code',
          closeTimeout: 2000,
        })
        toastnot.open();

    } else if (firstname.trim() != "" && pottname.trim() != ""
       &&  sex.trim() != ""  &&  dob.trim() != ""  &&  country.trim() != "" &&  phone_value.trim() != ""  
       &&  password.trim() != "" &&  repeat_password.trim() != ""  &&  this_country_code.trim() != ""
       && (password.trim() == repeat_password.trim())){

        if(phone_value.charAt(0) == "0"){
            phone_length = phone_value.length;
            phone_value = "+" + this_country_code + phone_value.slice(1, phone_length);
        }



       var url_real = CONFIG + "inc/android_signup.php";
       var loginData = {
          "firstname" : firstname,
          "lastname" : lastname,
          "pottname" : pottname,
          "sex" : sex,
          "dob" : dob,
          "referrer" : referrer,
          "country" : country,
          "emailorphone" : phone_value,
          "my_app_version" : my_app_version,
          "password" : password
      };

      console.log(loginData);


      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
                return;
            }
              var loginResponse = JSON.parse(response);
            
              console.log(loginResponse);

              if(loginResponse["datareturned"][0]["status"] == "yes"){

                localStorage.setItem("user_sys_id", loginResponse["datareturned"][0]["user_sys_id"]);
                localStorage.setItem("e_pass", loginResponse["datareturned"][0]["key"]);
                localStorage.setItem("c_name", loginResponse["datareturned"][0]["i_full_name"]);
                localStorage.setItem("c_phone", loginResponse["datareturned"][0]["i_phone"]);
                localStorage.setItem("c_country", loginResponse["datareturned"][0]["i_country"]);
                $('#next_step').append('<a id="success_signup" style="display : none;" href="/main/">success</a>');
                
                my_user_sys_id = loginResponse["datareturned"][0]["user_sys_id"];
                my_e_password = loginResponse["datareturned"][0]["key"];
                my_full_name = loginResponse["datareturned"][0]["i_full_name"];
                c_phone = loginResponse["datareturned"][0]["i_phone"];
                my_country = loginResponse["datareturned"][0]["i_country"];
                current_page = "main";

                app.preloader.hide();
                $('#success_signup').click();

              } else {

                var this_message = loginResponse["datareturned"][0]["error"];
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();

              }
              app.preloader.hide();

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
          }
        });
  
    } else {

      alert("Something went awry");

    }


}

function getTodaysDate(){

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(mm<10) {
      mm = '0'+mm
  } 

  today = mm + '/' + dd + '/' + yyyy;
  return today;
}

function sendMessage() {

    var disMessageText = document.getElementById("thismessage").value;



    if(disMessageText.trim() == ""){

        var toastBottom = app.toast.create({
          text: 'You message cannot be empty',
          closeTimeout: 2000,
        });
        toastBottom.open();

    } else if (disMessageText.trim() != ""){

      //alert("Validating...");
       var url_real = CONFIG + "inc/android_contact_fishpott.php";
         var loginData = {
            "myid" : my_user_sys_id,
            "mypass" : my_e_password,
            "my_app_version" : my_app_version,
            "info" : disMessageText
        };  

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
                var toastResponse = app.toast.create({
                  text: response,
                  closeTimeout: 2000,
                });
                toastResponse.open();
                document.getElementById("thismessage").value = "";
                app.preloader.hide();

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                var this_message = "Poor network connection. Try again later";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
              app.preloader.hide();
          }
        });
    } else {

      alert("Something went awry");

    }


}

 function readURL(input, id) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#' + id).attr('src', e.target.result);
          };

          reader.readAsDataURL(input.files[0]);
      } else {

          $('#' + id).attr('src', "img/default.png");

        
      }
  }

function setBusinessOldInfo(){

    if(b_name != null && b_name != undefined && 
      b_phone != null && b_phone != undefined
      ){

        document.getElementById("my_business_name").value = b_name;
        document.getElementById("my_business_ferry_address").value = b_ferry_address;
        document.getElementById("my_business_start_time").value = b_start_time;  
        document.getElementById("my_business_close_time").value = b_end_time;  
        document.getElementById("my_business_phone").value = b_phone;  
        document.getElementById("my_business_desc").value = b_description;  
        document.getElementById("blah").src = b_logo;  

        document.getElementById("my_business_name2").value = b_name;
        document.getElementById("my_business_ferry_address2").value = b_ferry_address;
        document.getElementById("my_business_start_time2").value = b_start_time;  
        document.getElementById("my_business_close_time2").value = b_end_time;  
        document.getElementById("my_business_phone2").value = b_phone;  
        document.getElementById("my_business_desc2").value = b_description;  
        document.getElementById("blah2").src = b_logo;  


    }

}

function emptyCart(){

    //alert("The paragraph was double-clicked");
    var cart_span_1 = document.getElementById("cart_item_count_1");
    if(cart_span_1 != null && cart_span_1 != undefined){

      cart_span_1.innerHTML = "0";

    }
    var cart_span_2 = document.getElementById("cart_item_count_2");
    if(cart_span_2 != null && cart_span_2 != undefined){

      cart_span_2.innerHTML = "0";

    }
      localStorage.removeItem('cartItems');
    var this_message = "Cart Is Now Empty";
    var toastError = app.toast.create({
      text: this_message,
      closeTimeout: 2000,
    });
    toastError.open();

}

function addToCart(x){

       var this_id = x.getAttribute("data-this_id");
       var item_sku = x.getAttribute("data-sku");
       var this_item_name = x.getAttribute("data-item_name");
       var this_item_currency = x.getAttribute("data-this_item_currency");
       var this_item_price = x.getAttribute("data-this_item_price");
       var this_item_pic = x.getAttribute("data-this_item_pic");
       var this_item_description = x.getAttribute("data-description");

       var item_num = document.getElementById("item_number_"+this_id).value;

       item_num_real = parseInt(item_num);

       if(item_num.trim() == "" || item_num <= 0){
            var this_message = "Please type the number of this item you want in your cart";
            var toastError = app.toast.create({
              text: this_message,
              closeTimeout: 2000,
            });
            toastError.open();
            return;
       }
            var ThisCartItem = {

                "item_sku" : item_sku,
                "item_num" : item_num_real,
                "this_item_name" : this_item_name,
                "this_item_currency" : this_item_currency,
                "this_item_price" : this_item_price,
                "this_item_pic" : this_item_pic,
                "this_item_description" : this_item_description

              };  

        console.log(ThisCartItem);

        var cartItems = localStorage.getItem("cartItems");

        if(cartItems == null){
            cartItems = [];
            cartItems[0] = ThisCartItem;
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            
            var this_message = "Added To Cart. Long press On Cart Icon To Remove Items";
            var toastError = app.toast.create({
              text: this_message,
              closeTimeout: 2000,
            });
            toastError.open();
            var cart_span_1 = document.getElementById("cart_item_count_1");
            if(cart_span_1 != null && cart_span_1 != undefined){
            
              cart_span_1.innerHTML = "1";

            }
            var cart_span_2 = document.getElementById("cart_item_count_2");
            if(cart_span_2 != null && cart_span_2 != undefined){
            
              cart_span_2.innerHTML = "1";

            }


        } else {

            cartItems = JSON.parse(cartItems);
            var total_cartitems_num = Object.keys(cartItems).length;

            for(i=0; i < total_cartitems_num; i++){

              if(cartItems[i]["item_sku"] == item_sku){
                var already_added = 1;
                break;
              } else {
                var already_added = 0;
              }

            }

            console.log("already_added : " + already_added);
            console.log("total_cartitems_num : " + total_cartitems_num);
            console.log(cartItems);

            if(already_added == 0){

                cartItems[total_cartitems_num] = ThisCartItem;
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                var this_message = "Added To Cart. Long press the Cart Icon To Remove Items";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                new_total_cartitems_num = total_cartitems_num + 1;
                var cart_span_1 = document.getElementById("cart_item_count_1");
                if(cart_span_1 != null && cart_span_1 != undefined){
                
                  cart_span_1.innerHTML = new_total_cartitems_num;

                }
                var cart_span_2 = document.getElementById("cart_item_count_2");
                if(cart_span_2 != null && cart_span_2 != undefined){
                
                  cart_span_2.innerHTML = new_total_cartitems_num;

                }


            } else {

              var this_message = "Item Exists In Cart. Double Click On Cart To Remove Items";
              var toastError = app.toast.create({
                text: this_message,
                closeTimeout: 5000,
              });
              toastError.open();
            }



        }
 document.getElementById("item_number_"+this_id).value = "";

}

function delThisMenuItem(x){
       var item_sku = x.getAttribute("data-sku");
       var this_id = x.getAttribute("data-this_id");

       var url_real = CONFIG + "inc/android_use_version_del_shop_item.php";
       var loginData = {

          "myid" : my_user_sys_id,
          "mypass" : my_e_password,
          "item_sku" : item_sku,
          "my_app_version" : my_app_version

        };  

      console.log(loginData);

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
            console.log(response);
            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
                return;
            }
            var itemsResponse = JSON.parse(response);

            if(itemsResponse["status"] == 1){
              //x.click();
                document.getElementById(this_id).style.display = "none";
                var this_message = itemsResponse["msg"];
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();

            } else {

                var this_message = itemsResponse["msg"];
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
            }

              app.preloader.hide();
          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
      
                app.preloader.hide();
          }
        });

}

function showMenuItemInfo(id_suffix){

       var url_real = CONFIG + "inc/android_use_version_get_shop_items.php";
       var loginData = {

          "myid" : my_user_sys_id,
          "mypass" : my_e_password,
          "mycountry" : my_country,
          "my_app_version" : my_app_version

        };  

      console.log(loginData);

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
            console.log(response);
            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
                return;
            }
            var itemsResponse = JSON.parse(response);

            console.log(itemsResponse);

            var total_items_num = Object.keys(itemsResponse["hits"]).length;

            console.log("hits total_orders_num : " + total_items_num);

            document.getElementById("menu_list" + id_suffix).innerHTML = "";
            if(total_items_num <= 0){


                var this_message = "No shop items available";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();


            } else {

                for (var i = 0; i < total_items_num; i++) {

                        var this_id = Math.floor((Math.random() * 999999) + 100000) + itemsResponse["hits"][i]["sku"];
                        var this_item_name = itemsResponse["hits"][i]["item_name"];
                        var this_item_price = itemsResponse["hits"][i]["item_price"];
                        var this_item_description = itemsResponse["hits"][i]["item_description"];
                        var this_item_pic = itemsResponse["hits"][i]["item_pic"];
                        var this_sku = itemsResponse["hits"][i]["sku"];

                        $('#menu_list' + id_suffix).append($('<li id ="' + this_id + '" class="swipeout"><div class="swipeout-content"><a href="#" class="item-link item-content"><div class="item-media"><img src="' + this_item_pic + '" width="80"/></div><div class="item-inner"><div class="item-title-row"><div class="item-title">' + this_item_name + '</div><div class="item-after">' + this_item_price + '</div></div><div class="item-text">' + this_item_description + '</div></div></a><div class="swipeout-actions-right"><a data-sku = "' + this_sku + '" data-this_id = "' + this_id + '" onclick="delThisMenuItem(this)" href="#" class="color-red" @click="mark">Delete</a></div></div></li>')); 

                } // END OF MY ORDERS FOR LOOP

            }


              app.preloader.hide();

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
          }
        });
}

function showMenuItemsBuyableInfo(id_suffix){

       var url_real = CONFIG + "inc/android_use_version_get_shop_items_buyable.php";
       var loginData = {

          "myid" : my_user_sys_id,
          "mypass" : my_e_password,
          "business_this_sku" : business_this_sku,
          "my_currency" : my_currency,
          "my_app_version" : my_app_version

        };  

        console.log(loginData);

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
            console.log(response);
            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
                return;
            }
            var itemsResponse = JSON.parse(response);

            console.log(itemsResponse);

            var total_items_num = Object.keys(itemsResponse["hits"]).length;

            console.log("hits total_orders_num : " + total_items_num);

            document.getElementById("menu_list" + id_suffix).innerHTML = "";
            if(total_items_num <= 0){

                var this_message = "No items to show";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();


            } else {

                for (var i = 0; i < total_items_num; i++) {

                        var this_id = Math.floor((Math.random() * 999999) + 100000) + itemsResponse["hits"][i]["sku"];
                        var this_item_name = itemsResponse["hits"][i]["item_name"];
                        var this_item_price = itemsResponse["hits"][i]["item_price_num"];
                        var this_item_currency = itemsResponse["hits"][i]["item_currency"];
                        var this_item_description = itemsResponse["hits"][i]["item_description"];
                        var this_item_pic = itemsResponse["hits"][i]["item_pic"];
                        var this_sku = itemsResponse["hits"][i]["sku"];
                        var this_item_price = this_item_price + " " + this_item_currency;

                        $('#menu_list' + id_suffix).append($('<li id ="' + this_id + '" class="swipeout"><div class="swipeout-content"><a href="#" class="item-link item-content"><div class="item-media"><img src="' + this_item_pic + '" width="80"/></div><div class="item-inner"><div class="item-title-row"><div class="item-title">' + this_item_name + '</div><div class="item-after">' + this_item_price + '</div></div><div class="item-text">' + this_item_description + '</div></div></a><div class="swipeout-actions-right"><a href="#" class="color-orange" @click="mark"> <span  data-this_item_pic="' + this_item_pic + '" data-this_id="' + this_id + '" data-this_item_currency="' + this_item_currency + '" data-this_item_price="' + this_item_price + '"   data-description="' + this_item_description + '" data-item_name = "' + this_item_name + '" data-sku = "' + this_sku + '" onclick="addToCart(this)">Add To Cart </span> <input id="item_number_' + this_id + '" type="number" min="1" max="10000" placeholder="Item Number"></a></div></div></li>')); 

                } // END OF MY ORDERS FOR LOOP

            }

              app.preloader.hide();

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
          }
        });
}


function setBusinessInfo(id_suffix) {

  if(setBusinessInfoToggle == 0){

    setBusinessInfoToggle = 1;

    var my_business_name = document.getElementById("my_business_name" + id_suffix).value;
    var my_business_type = document.getElementById("my_business_type" + id_suffix).value;
    var my_business_ferry_address = document.getElementById("my_business_ferry_address" + id_suffix).value.toLowerCase();
    var my_business_start_time = document.getElementById("my_business_start_time" + id_suffix).value;  
    var my_business_close_time = document.getElementById("my_business_close_time" + id_suffix).value;  
    var my_business_phone = document.getElementById("my_business_phone" + id_suffix).value;  
    var my_business_desc = document.getElementById("my_business_desc" + id_suffix).value;  
    var disEmpPic = document.getElementById("imgInp" + id_suffix).value;

    var ferry_ini = my_business_ferry_address.substring(0, 5);

    if(my_business_name.trim() == "" || my_business_type.trim() == "" || my_business_ferry_address.trim() == "" || 
       my_business_start_time.trim() == "" || my_business_close_time.trim() == ""|| 
       my_business_phone.trim() == "" || my_business_desc.trim() == "" ){

    
          setBusinessInfoToggle = 0;

          var toastBottom = app.toast.create({
          text: 'All Fields Must Be Completed',
          closeTimeout: 2000,
          });
          toastBottom.open();

    } else if(ferry_ini != "ferry"){
    
          setBusinessInfoToggle = 0;

          var toastBottom = app.toast.create({
          text: 'Enter A ferry Address. Ferry Addresses start with "ferry"',
          closeTimeout: 2000,
          });
          toastBottom.open();


    } else if(my_business_name.trim() != "" && my_business_type.trim() != "" &&  my_business_ferry_address.trim() != "" &&  
       my_business_start_time.trim()  != "" &&  my_business_close_time.trim() != "" &&  
       my_business_phone.trim() != "" &&  my_business_desc.trim() != "" ){

      app.preloader.show();

      var formData = new FormData();
      formData.append('myid', my_user_sys_id);
      formData.append('mypass', my_e_password);
      formData.append('my_app_version', my_app_version);
      formData.append('my_business_name', my_business_name);
      formData.append('my_business_type', my_business_type);
      formData.append('my_business_ferry_address', my_business_ferry_address);
      formData.append('my_business_start_time', my_business_start_time);
      formData.append('my_business_close_time', my_business_close_time);
      formData.append('my_business_phone', my_business_phone);
      formData.append('my_business_desc', my_business_desc);
      formData.append('my_country', my_country);
      formData.append('check_human', "");

      console.log(formData);
      // Attach file
      if(disEmpPic.trim() != ""){
        var file_id = '#imgInp' + id_suffix;
        formData.append('fileToUpload', $(file_id)[0].files[0]); 
      }

      console.log(file_id);

       var url_real = CONFIG + "inc/android_use_version_set_business_info.php";

      app.request({
          url: url_real,
          type: "POST",
          data: formData,
          mimeTypes:"multipart/form-data",
          contentType: false,
          cache: false,
          processData: false,
          success: function(response){
              //console.log(response);
            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
                return;
            }
              app.preloader.hide();
              setBusinessInfoToggle = 0;
              var addResponse = JSON.parse(response);
              if(addResponse["status"] == 1){

                localStorage.setItem("b_name", addResponse["b_name"]);
                localStorage.setItem("b_phone", addResponse["b_phone"]);
                localStorage.setItem("b_start_time", addResponse["b_start_time"]);
                localStorage.setItem("b_end_time", addResponse["b_end_time"]);
                localStorage.setItem("b_description", addResponse["b_description"]);
                localStorage.setItem("b_ferry_address", addResponse["b_ferry_address"]);
                localStorage.setItem("b_logo", addResponse["b_logo"]);

                b_name = addResponse["b_name"];
                b_phone = addResponse["b_phone"];
                b_start_time = addResponse["b_start_time"];
                b_end_time = addResponse["b_end_time"];
                b_description = addResponse["b_description"];
                b_ferry_address = addResponse["b_ferry_address"];
                b_logo = addResponse["b_logo"];


                // ALERT EMPLOYEE ADDED
                toastalert = addResponse["msg"];
                var toastBottom = app.toast.create({
                  text: toastalert,
                  closeTimeout: 2000,
                });

                toastBottom.open();

              } else {


                toastalert = addResponse["msg"];
                var toastBottom = app.toast.create({
                  text: toastalert,
                  closeTimeout: 2000,
                });

                toastBottom.open();

            }

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {
    
              setBusinessInfoToggle = 0;
              toastalert = addResponse["msg"];
              var toastBottom = app.toast.create({
                text: toastalert,
                closeTimeout: 2000,
              });

              toastBottom.open();

              app.preloader.hide();

          }
        });

    } else {

      app.preloader.hide();
      setBusinessInfoToggle = 0;
      toastalert = "Something went awry";
      var toastBottom = app.toast.create({
        text: toastalert,
        closeTimeout: 2000,
      });

      toastBottom.open();

    }

  }

}

function addShopItem(id_suffix) {

  if(addShopItemToggle == 0){

    addShopItemToggle = 1;

    var menu_item_name = document.getElementById("menu_item_name" + id_suffix).value;
    var menu_item_price = document.getElementById("menu_item_price" + id_suffix).value;
    var menu_item_description = document.getElementById("menu_item_description" + id_suffix).value;

    var disEmpPic = document.getElementById("imgInp3").value;

    if(menu_item_name.trim() == "" || menu_item_price.trim() == "" || 
      menu_item_description.trim() == ""){

    
          addShopItemToggle = 0;

          var toastBottom = app.toast.create({
          text: 'All Fields Must Be Completed',
          closeTimeout: 2000,
          });
          toastBottom.open();

    }else if(menu_item_name.trim() != "" && menu_item_price.trim() != "" && 
              menu_item_description.trim() != "" ){

      app.preloader.show();

      var formData = new FormData();
      formData.append('myid', my_user_sys_id);
      formData.append('mypass', my_e_password);
      formData.append('my_app_version', my_app_version);
      formData.append('menu_item_name', menu_item_name);
      formData.append('menu_item_price', menu_item_price);
      formData.append('menu_item_description', menu_item_description);
      formData.append('my_currency', my_currency);
      formData.append('check_human', "");

      // Attach file
      if(disEmpPic.trim() != ""){
        formData.append('fileToUpload', $('#imgInp')[0].files[0]); 
      }

       var url_real = CONFIG + "inc/android_use_version_add_menu_item.php";

      app.request({
          url: url_real,
          type: "POST",
          data: formData,
          mimeTypes:"multipart/form-data",
          contentType: false,
          cache: false,
          processData: false,
          success: function(response){
              console.log(response);
            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
                return;
            }
              app.preloader.hide();
              addShopItemToggle = 0;
              var addResponse = JSON.parse(response);
              if(addResponse["status"] == 1){

                document.getElementById("menu_item_name" + id_suffix).value = "";
                document.getElementById("menu_item_price" + id_suffix).value = "";
                document.getElementById("menu_item_description" + id_suffix).value = "";
                document.getElementById("imgInp" + id_suffix).src = "";
                document.getElementById("blah3").src = "img/default.png";

                // ALERT EMPLOYEE ADDED
                toastalert = addResponse["msg"];
                var toastBottom = app.toast.create({
                  text: toastalert,
                  closeTimeout: 2000,
                });

                toastBottom.open();

              } else {


                toastalert = addResponse["msg"];
                var toastBottom = app.toast.create({
                  text: toastalert,
                  closeTimeout: 2000,
                });

                toastBottom.open();

            }

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {
    
              addShopItemToggle = 0;
              toastalert = addResponse["msg"];
              var toastBottom = app.toast.create({
                text: toastalert,
                closeTimeout: 2000,
              });

              toastBottom.open();

              app.preloader.hide();

          }
        });

    } else {

      app.preloader.hide();
      addShopItemToggle = 0;
      toastalert = "Something went awry";
      var toastBottom = app.toast.create({
        text: toastalert,
        closeTimeout: 2000,
      });

      toastBottom.open();

    }

  }

}


function showProfilePage(){

  current_page = "profile";
  document.getElementById("page_profile_my_name").innerHTML = my_full_name;
  document.getElementById("page_profile_my_phone").innerHTML = c_phone;
  document.getElementById("page_profile_my_country").innerHTML = my_country;
  document.getElementById("page_profile_my_appversion").innerHTML = my_app_version;
}

function setOrderInfo(x){

  this_order_type = x.getAttribute("data-this_adetor_del_type");
  this_order_item_desc = x.getAttribute("data-this_item_description");
  this_order_pickup = x.getAttribute("data-this_pickup_loc_name");
  this_order_destination = x.getAttribute("data-destination_loc_name");
  this_order_receiver_name = x.getAttribute("data-this_receiver_name");
  this_order_receiver_phone = x.getAttribute("data-this_receiver_phone");
  this_order_status = x.getAttribute("data-this_delivery_status_text");
  this_order_charge = x.getAttribute("data-this_adetor_charge");
  this_order_id = x.getAttribute("data-this_adetor_id");
  y = document.getElementById("order_id_copy_btn");
  y.setAttribute("data-copytext", this_order_id);

  document.getElementById("this_order_type").innerHTML = this_order_type;
  document.getElementById("this_order_item_desc").innerHTML = this_order_item_desc;
  document.getElementById("this_order_pickup").innerHTML = this_order_pickup;
  document.getElementById("this_order_destination").innerHTML = this_order_destination;
  document.getElementById("this_order_receiver_name").innerHTML = this_order_receiver_name;
  document.getElementById("this_order_receiver_phone").innerHTML = this_order_receiver_phone;
  document.getElementById("this_order_status").innerHTML = this_order_status;
  document.getElementById("this_order_charge").innerHTML = this_order_charge;
  document.getElementById("this_order_id").innerHTML = this_order_id;

}

function showAddressesPage(){
  if(searching_real == 1){
    return;
  }
  current_page = "addresses";

       var url_real = CONFIG + "inc/android_use_version_get_addresses.php";
       var loginData = {

          "myid" : my_user_sys_id,
          "mypass" : my_e_password,
          "mycountry" : my_country,
          "my_app_version" : my_app_version,
          "my_addresses_last_sku" : my_addresses_last_sku,
          "my_addresseslinks_last_sku" : my_addresseslinks_last_sku,
          "business_addresses_last_sku" : business_addresses_last_sku

        };  

      console.log(loginData);

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
            //console.log(response);
            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
                return;
            }
            var addressesResponse = JSON.parse(response);
            console.log(addressesResponse);

            var total_addresses_num = Object.keys(addressesResponse["hits"]).length;

            console.log("hits total_addresses_num : " + total_addresses_num);

            document.getElementById("business_addresses").innerHTML = "";
            if(total_addresses_num <= 0){



            } else {

                for (var i = 0; i < total_addresses_num; i++) {

                        var this_id = Math.floor((Math.random() * 999999) + 100000) + addressesResponse["hits"][i]["sku"];
                        var this_address_ferry_city = addressesResponse["hits"][i]["address_ferry_city"];
                        var this_address_ferry_country = addressesResponse["hits"][i]["address_ferry_country"];
                        var this_address_ferry_name = addressesResponse["hits"][i]["address_ferry_name"];
                        var this_address_ferry_state = addressesResponse["hits"][i]["address_ferry_state"];
                        var this_ferry_address = addressesResponse["hits"][i]["address_id"];
                        var this_address_ownership_status = addressesResponse["hits"][i]["address_ownership_status"];
                        var this_address_phone = addressesResponse["hits"][i]["address_phone"];
                        var this_address_users_name = addressesResponse["hits"][i]["address_users_name"];
                        var this_address_verified_status = addressesResponse["hits"][i]["address_verified_status"];
                        var this_sku = addressesResponse["hits"][i]["sku"];

                    $('#my_true_addresses').append($('<li><a  onclick="showAddressInfo(this);" id="' + this_id + '"  data-this_address_ferry_city = "' + this_address_ferry_city + '" data-this_address_ferry_country = "' + this_address_ferry_country + '" data-this_address_ferry_name = "' + this_address_ferry_name + '" data-this_address_ferry_state = "' + this_address_ferry_state + '" data-this_ferry_address = "' + this_ferry_address + '" data-this_address_ownership_status = "' + this_address_ownership_status + '" data-this_address_phone = "' + this_address_phone + '" data-this_address_users_name = "' + this_address_users_name + '" data-this_address_verified_status = "' + this_address_verified_status + '" data-this_sku = "' + this_sku + '" href="#" class="item-link item-content popup-open"  data-popup=".address"><div class="item-media"><img src="img/ferr.png" style="border-radius: 50%;" width="44"/></div><div class="item-inner"><div class="item-title-row"><div class="item-title" style = "font-weight : bolder">' + this_address_users_name + '</div></div><div class="item-subtitle">' + this_ferry_address + '</div></div></a></li>')); 
 
 

                } // END OF MY ADDRESSES FOR LOOP

            }

            var total_addresses_num = Object.keys(addressesResponse["links"]).length;

            console.log("links total_addresses_num : " + total_addresses_num);

            if(total_addresses_num <= 0){



            } else {

                for (var i = 0; i < total_addresses_num; i++) {

                      var this_address_ownership_status = addressesResponse["links"][i]["address_ownership_status"];
                      
                      if(this_address_ownership_status == "2"){

                        var this_id = Math.floor((Math.random() * 999999) + 100000) + addressesResponse["links"][i]["sku"];
                        var this_address_ferry_city = addressesResponse["links"][i]["address_ferry_city"];
                        var this_address_ferry_country = addressesResponse["links"][i]["address_ferry_country"];
                        var this_address_ferry_name = addressesResponse["links"][i]["address_ferry_name"];
                        var this_address_ferry_state = addressesResponse["links"][i]["address_ferry_state"];
                        var this_ferry_address = addressesResponse["links"][i]["address_id"];

                        var this_address_phone = addressesResponse["links"][i]["address_phone"];
                        var this_address_users_name = addressesResponse["links"][i]["address_users_name"];
                        var this_address_verified_status = addressesResponse["links"][i]["address_verified_status"];
                        var this_sku = addressesResponse["links"][i]["sku"];
                      
                        $('#my_true_addresses').append($('<li><a onclick="showAddressInfo(this);" data id="' + this_id + '"  data-this_address_ferry_city = "' + this_address_ferry_city + '" data-this_address_ferry_country = "' + this_address_ferry_country + '" data-this_address_ferry_name = "' + this_address_ferry_name + '" data-this_address_ferry_state = "' + this_address_ferry_state + '" data-this_ferry_address = "' + this_ferry_address + '" data-this_address_ownership_status = "' + this_address_ownership_status + '" data-this_address_phone = "' + this_address_phone + '" data-this_address_users_name = "' + this_address_users_name + '" data-this_address_verified_status = "' + this_address_verified_status + '" data-this_sku = "' + this_sku + '" href="#" class="item-link item-content popup-open"  data-popup=".address"><div class="item-media"><img src="img/ferr.png" style="border-radius: 50%;" width="44"/></div><div class="item-inner"><div class="item-title-row"><div class="item-title" style = "font-weight : bolder">' + this_address_users_name + '</div></div><div class="item-subtitle">' + this_ferry_address + '</div></div></a></li>')); 

                      
                      } else if(this_address_ownership_status == "3"){

                        var this_id = Math.floor((Math.random() * 999999) + 100000) + addressesResponse["links"][i]["sku"];
                        var this_address_business_logo = addressesResponse["links"][i]["business_logo"];
                        var this_address_business_starttime = addressesResponse["links"][i]["business_starttime"];
                        var this_address_business_closetime = addressesResponse["links"][i]["business_closetime"];
                        var this_address_business_type = addressesResponse["links"][i]["business_type"];
                        var this_address_ferry_city = addressesResponse["links"][i]["address_ferry_city"];
                        var this_address_ferry_country = addressesResponse["links"][i]["address_ferry_country"];
                        var this_address_ferry_name = addressesResponse["links"][i]["address_ferry_name"];
                        var this_address_ferry_state = addressesResponse["links"][i]["address_ferry_state"];
                        var this_ferry_address = addressesResponse["links"][i]["business_ferry_address"];
                        var this_address_ownership_status = addressesResponse["links"][i]["address_ownership_status"];
                        var this_address_phone = addressesResponse["links"][i]["business_phone"];
                        var this_business_name = addressesResponse["links"][i]["business_name"];
                        var this_address_verified_status = addressesResponse["links"][i]["address_verified_status"];
                        var this_business_description = addressesResponse["links"][i]["business_description"];
                        var this_sku = addressesResponse["links"][i]["sku"];

                        $('#my_true_addresses').prepend($('<li><a data-mine = "1" onclick="showBusinessInfo(this);" data-this_business_description="' + this_business_description + '"  id="' + this_id + '" data-business_closetime="' + this_address_business_closetime + '" data-business_starttime="' + this_address_business_starttime + '" data-business_logo="' + this_address_business_logo + '" data-business_type="' + this_address_business_type + '"  data-this_address_ferry_city = "' + this_address_ferry_city + '" data-this_address_ferry_country = "' + this_address_ferry_country + '" data-this_address_ferry_name = "' + this_address_ferry_name + '" data-this_address_ferry_state = "' + this_address_ferry_state + '" data-this_ferry_address = "' + this_ferry_address + '" data-this_address_ownership_status = "' + this_address_ownership_status + '" data-this_address_phone = "' + this_address_phone + '" data-this_business_name = "' + this_business_name + '" data-this_address_verified_status = "' + this_address_verified_status + '" data-this_sku = "' + this_sku + '" href="#" class="item-link item-content popup-open"  data-popup=".biz"><div class="item-media"><img src="' + this_address_business_logo + '" style="border-radius: 50%;" width="44"/></div><div class="item-inner"><div class="item-title-row"><div class="item-title" style = "font-weight : bolder">' + this_business_name + '</div></div><div class="item-subtitle">' + this_ferry_address + '</div></div></a></li>')); 

                      }
   
   

                } // END OF MY LINK- ADDRESSES FOR LOOP

            }

            var total_addresses_num = Object.keys(addressesResponse["businesses"]).length;

            console.log("business total_addresses_num : " + total_addresses_num);

            if(total_addresses_num <= 0){



            } else {
                document.getElementById("business_addresses").innerHTML = "";
                for (var i = 0; i < total_addresses_num; i++) {

                        var this_id = Math.floor((Math.random() * 999999) + 100000) + addressesResponse["businesses"][i]["sku"];
                        var this_address_business_logo = addressesResponse["businesses"][i]["business_logo"];
                        var this_address_business_starttime = addressesResponse["businesses"][i]["business_starttime"];
                        var this_address_business_closetime = addressesResponse["businesses"][i]["business_closetime"];
                        var this_address_business_type = addressesResponse["businesses"][i]["business_type"];
                        var this_address_ferry_city = addressesResponse["businesses"][i]["address_ferry_city"];
                        var this_address_ferry_country = addressesResponse["businesses"][i]["address_ferry_country"];
                        var this_address_ferry_name = addressesResponse["businesses"][i]["address_ferry_name"];
                        var this_address_ferry_state = addressesResponse["businesses"][i]["address_ferry_state"];
                        var this_ferry_address = addressesResponse["businesses"][i]["business_ferry_address"];
                        var this_address_ownership_status = addressesResponse["businesses"][i]["address_ownership_status"];
                        var this_address_phone = addressesResponse["businesses"][i]["business_phone"];
                        var this_business_name = addressesResponse["businesses"][i]["business_name"];
                        var this_address_verified_status = addressesResponse["businesses"][i]["address_verified_status"];
                        var this_business_description = addressesResponse["businesses"][i]["business_description"];
                        var this_sku = addressesResponse["businesses"][i]["sku"];

                    $('#business_addresses').append($('<li><a  data-mine = "0" onclick="showBusinessInfo(this);" data-this_business_description="' + this_business_description + '"  id="' + this_id + '" data-business_closetime="' + this_address_business_closetime + '" data-business_starttime="' + this_address_business_starttime + '" data-business_logo="' + this_address_business_logo + '" data-business_type="' + this_address_business_type + '"  data-this_address_ferry_city = "' + this_address_ferry_city + '" data-this_address_ferry_country = "' + this_address_ferry_country + '" data-this_address_ferry_name = "' + this_address_ferry_name + '" data-this_address_ferry_state = "' + this_address_ferry_state + '" data-this_ferry_address = "' + this_ferry_address + '" data-this_address_ownership_status = "' + this_address_ownership_status + '" data-this_address_phone = "' + this_address_phone + '" data-this_business_name = "' + this_business_name + '" data-this_address_verified_status = "' + this_address_verified_status + '" data-this_sku = "' + this_sku + '" href="#" class="item-link item-content popup-open"  data-popup=".biz"><div class="item-media"><img src="' + this_address_business_logo + '" style="border-radius: 50%;" width="44"/></div><div class="item-inner"><div class="item-title-row"><div class="item-title" style = "font-weight : bolder">' + this_business_name + '</div></div><div class="item-subtitle">' + this_ferry_address + '</div></div></a></li>')); 
 
 

                } // END OF BUSINESS ADDRESSES FOR LOOP

            }


            var total_addresses_num = Object.keys(addressesResponse["popular"]).length;
            console.log(addressesResponse["popular"]);
            console.log("popular total_addresses_num : " + total_addresses_num);

            if(total_addresses_num <= 0){



            } else {
                document.getElementById("popular_rows").innerHTML = "";
                for (var i = total_addresses_num -1; i >= 0; i--) {
                        console.log(i);
                        console.log("business_logo : " + addressesResponse["popular"][i]["business_logo"]);
                        var this_id = Math.floor((Math.random() * 999999) + 100000) + addressesResponse["popular"][i]["sku"];
                        var this_address_business_logo = addressesResponse["popular"][i]["business_logo"];
                        var this_address_business_starttime = addressesResponse["popular"][i]["business_starttime"];
                        var this_address_business_closetime = addressesResponse["popular"][i]["business_closetime"];
                        var this_address_business_type = addressesResponse["popular"][i]["business_type"];
                        var this_address_ferry_city = addressesResponse["popular"][i]["address_ferry_city"];
                        var this_address_ferry_country = addressesResponse["popular"][i]["address_ferry_country"];
                        var this_address_ferry_name = addressesResponse["popular"][i]["business_name"];
                        var this_address_ferry_state = addressesResponse["popular"][i]["address_ferry_state"];
                        var this_ferry_address = addressesResponse["popular"][i]["business_ferry_address"];
                        var this_address_ownership_status = addressesResponse["popular"][i]["address_ownership_status"];
                        var this_address_phone = addressesResponse["popular"][i]["business_phone"];
                        var this_business_name = addressesResponse["popular"][i]["business_name"];
                        var this_business_description = addressesResponse["popular"][i]["business_description"];
                        var this_address_verified_status = addressesResponse["popular"][i]["address_verified_status"];
                        var this_sku = addressesResponse["popular"][i]["sku"];

                    $('#popular_rows').append($('<div  data-mine = "0" onclick="showBusinessInfo(this);" id="' + this_id + '" data-this_business_description="' + this_business_description + '"  data-business_closetime="' + this_address_business_closetime + '" data-business_starttime="' + this_address_business_starttime + '" data-business_logo="' + this_address_business_logo + '" data-business_type="' + this_address_business_type + '"  data-this_address_ferry_city = "' + this_address_ferry_city + '" data-this_address_ferry_country = "' + this_address_ferry_country + '" data-this_address_ferry_name = "' + this_address_ferry_name + '" data-this_address_ferry_state = "' + this_address_ferry_state + '" data-this_ferry_address = "' + this_ferry_address + '" data-this_address_ownership_status = "' + this_address_ownership_status + '" data-this_address_phone = "' + this_address_phone + '" data-this_business_name = "' + this_business_name + '" data-this_address_verified_status = "' + this_address_verified_status + '" data-this_sku = "' + this_sku + '"  class="col item-link item-content popup-open"  data-popup=".biz"><img src="' + this_address_business_logo + '" width="100%" style="border-radius: 50%;"></div>')); 
 
 

                } // END OF BUSINESS ADDRESSES FOR LOOP

            }

              app.preloader.hide();

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
          }
        });
}


function showAddressesForSearch(){

    var search_txt = document.getElementById('search_form_input').value;

    console.log("2- search_txt : " + search_txt);


    if(search_txt.trim() != ""){

    searching_real = 1;

    if(current_page != "addresses"){
        $("#services_menu").removeClass("tab-link-active");
        $("#tracking_menu").removeClass("tab-link-active");
        $("#orders_menu").removeClass("tab-link-active");
        $("#profile_menu").removeClass("tab-link-active");
        $("#addressses_menu").addClass("tab-link-active");
        $('#addressses_menu').click();
    }
      current_page = "addresses";

       var url_real = CONFIG + "inc/android_use_version_search_addresses.php";
       var loginData = {

          "myid" : my_user_sys_id,
          "mypass" : my_e_password,
          "mycountry" : my_country,
          "my_app_version" : my_app_version,
          "search_txt" : search_txt,
          "my_search_last_sku" : my_search_last_sku

        };  

      console.log(loginData);

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
            searching_real = 0;
            console.log(response);
            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
                return;
            }

            var addressesResponse = JSON.parse(response);

            var total_addresses_num = Object.keys(addressesResponse["links"]).length;

            console.log("links total_addresses_num : " + total_addresses_num);

            document.getElementById("business_addresses").innerHTML = "";
            document.getElementById("my_true_addresses").innerHTML = "";

            if(total_addresses_num <= 0){

                var this_message = "No Search Results";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();


            } else {

                for (var i = 0; i < total_addresses_num; i++) {

                      var this_address_ownership_status = addressesResponse["links"][i]["address_ownership_status"];
                      
                      if(this_address_ownership_status == "2"){

                        var this_id = Math.floor((Math.random() * 999999) + 100000) + addressesResponse["links"][i]["sku"];
                        var this_address_ferry_city = addressesResponse["links"][i]["address_ferry_city"];
                        var this_address_ferry_country = addressesResponse["links"][i]["address_ferry_country"];
                        var this_address_ferry_name = addressesResponse["links"][i]["address_ferry_name"];
                        var this_address_ferry_state = addressesResponse["links"][i]["address_ferry_state"];
                        var this_ferry_address = addressesResponse["links"][i]["address_id"];

                        var this_address_phone = addressesResponse["links"][i]["address_phone"];
                        var this_address_users_name = addressesResponse["links"][i]["address_users_name"];
                        var this_address_verified_status = addressesResponse["links"][i]["address_verified_status"];
                        var this_sku = addressesResponse["links"][i]["sku"];
                      
                        $('#my_true_addresses').append($('<li><a onclick="showAddressInfo(this);" data id="' + this_id + '"  data-this_address_ferry_city = "' + this_address_ferry_city + '" data-this_address_ferry_country = "' + this_address_ferry_country + '" data-this_address_ferry_name = "' + this_address_ferry_name + '" data-this_address_ferry_state = "' + this_address_ferry_state + '" data-this_ferry_address = "' + this_ferry_address + '" data-this_address_ownership_status = "' + this_address_ownership_status + '" data-this_address_phone = "' + this_address_phone + '" data-this_address_users_name = "' + this_address_users_name + '" data-this_address_verified_status = "' + this_address_verified_status + '" data-this_sku = "' + this_sku + '" href="#" class="item-link item-content popup-open"  data-popup=".address"><div class="item-media"><img src="img/ferr.png" style="border-radius: 50%;" width="44"/></div><div class="item-inner"><div class="item-title-row"><div class="item-title" style = "font-weight : bolder">' + this_address_users_name + '</div></div><div class="item-subtitle">' + this_ferry_address + '</div></div></a></li>')); 

                      
                      } else if(this_address_ownership_status == "3"){

                        var this_id = Math.floor((Math.random() * 999999) + 100000) + addressesResponse["links"][i]["sku"];
                        var this_address_business_logo = addressesResponse["links"][i]["business_logo"];
                        var this_address_business_starttime = addressesResponse["links"][i]["business_starttime"];
                        var this_address_business_closetime = addressesResponse["links"][i]["business_closetime"];
                        var this_address_business_type = addressesResponse["links"][i]["business_type"];
                        var this_address_ferry_city = addressesResponse["links"][i]["address_ferry_city"];
                        var this_address_ferry_country = addressesResponse["links"][i]["address_ferry_country"];
                        var this_address_ferry_name = addressesResponse["links"][i]["address_ferry_name"];
                        var this_address_ferry_state = addressesResponse["links"][i]["address_ferry_state"];
                        var this_ferry_address = addressesResponse["links"][i]["business_ferry_address"];
                        var this_address_ownership_status = addressesResponse["links"][i]["address_ownership_status"];
                        var this_address_phone = addressesResponse["links"][i]["business_phone"];
                        var this_business_name = addressesResponse["links"][i]["business_name"];
                        var this_address_verified_status = addressesResponse["links"][i]["address_verified_status"];
                        var this_business_description = addressesResponse["links"][i]["business_description"];
                        var this_sku = addressesResponse["links"][i]["sku"];

                        $('#my_true_addresses').prepend($('<li><a data-mine = "1" onclick="showBusinessInfo(this);" data-this_business_description="' + this_business_description + '"  id="' + this_id + '" data-business_closetime="' + this_address_business_closetime + '" data-business_starttime="' + this_address_business_starttime + '" data-business_logo="' + this_address_business_logo + '" data-business_type="' + this_address_business_type + '"  data-this_address_ferry_city = "' + this_address_ferry_city + '" data-this_address_ferry_country = "' + this_address_ferry_country + '" data-this_address_ferry_name = "' + this_address_ferry_name + '" data-this_address_ferry_state = "' + this_address_ferry_state + '" data-this_ferry_address = "' + this_ferry_address + '" data-this_address_ownership_status = "' + this_address_ownership_status + '" data-this_address_phone = "' + this_address_phone + '" data-this_business_name = "' + this_business_name + '" data-this_address_verified_status = "' + this_address_verified_status + '" data-this_sku = "' + this_sku + '" href="#" class="item-link item-content popup-open"  data-popup=".biz"><div class="item-media"><img src="' + this_address_business_logo + '" style="border-radius: 50%;" width="44"/></div><div class="item-inner"><div class="item-title-row"><div class="item-title" style = "font-weight : bolder">' + this_business_name + '</div></div><div class="item-subtitle">' + this_ferry_address + '</div></div></a></li>')); 

                      }
   
   

                } // END OF MY LINK- ADDRESSES SEARCH FOR LOOP

            }

              app.preloader.hide();

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {
              searching_real = 0;

                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
          }
        });

    } else {

      var this_message = "search keyword cannot be empty";
      var toastError = app.toast.create({
        text: this_message,
        closeTimeout: 2000,
      });
      toastError.open();
    }


}

function getLocalTime(start_int_num, closing_int_num){

  if(start_int_num < 12){

    var local_start = start_int_num  + " AM";

  } else if(start_int_num == 12){

    var local_start = start_int_num  + " PM";
    
  } else {

    start_int_num = start_int_num - 12;
    var local_start = start_int_num  + " PM";
    
  }

  if(closing_int_num < 12){

    var local_close = closing_int_num  + " AM";

  } else if(closing_int_num == 12){

    var local_close = closing_int_num  + " PM";
    
  } else {

    closing_int_num = closing_int_num - 12;
    var local_close = closing_int_num  + " PM";
    
  }

  var local_time = local_start + " - " + local_close;
  return local_time;
}

function copyToClipboard(x) {
    
    var this_message = "Copied";
    text = x.getAttribute("data-copytext");
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        this_message = "Copied";
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            this_message = "Copied";
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            //console.warn("Copy to clipboard failed.", ex);
            this_message = "Copy to clipboard failed";
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
    var toastError = app.toast.create({
      text: this_message,
      closeTimeout: 2000,
    });
    toastError.open();
}

function showAddressInfo(x){


  curr_address_ferry_city = x.getAttribute("data-this_address_ferry_city");
  curr_address_ferry_country = x.getAttribute("data-this_address_ferry_country");
  curr_address_ferry_name = x.getAttribute("data-this_address_ferry_name");
  curr_address_ferry_state = x.getAttribute("data-this_address_ferry_state");
  curr_ferry_address = x.getAttribute("data-this_ferry_address");
  curr_address_ownership_status = x.getAttribute("data-this_address_ownership_status");
  curr_address_phone = x.getAttribute("data-this_address_phone");
  curr_address_users_name = x.getAttribute("data-this_address_users_name");
  curr_address_verified_status = x.getAttribute("data-this_address_verified_status");
  curr_address_this_sku = x.getAttribute("data-this_sku");

    y = document.getElementById("phone_number_copy_btn");
    y.setAttribute("data-copytext", curr_address_phone);

    y = document.getElementById("ferry_address_copy_btn");
    y.setAttribute("data-copytext", curr_ferry_address);

    console.warn("curr_address_verified_status");
    console.warn(curr_address_verified_status);

  if(curr_address_verified_status == "1" || curr_address_verified_status == 1 ){
    //document.getElementById("verify_btn").style.display = "none";
  } else {
    //document.getElementById("verify_btn").style.display = "";
  }

  if(curr_address_phone == ""){
    document.getElementById("phone_number_copy_btn").style.display = "none";
  } else {
    document.getElementById("phone_number_copy_btn").style.display = "";
  }

  if(curr_address_ferry_name.trim() == ""){
    curr_loc_name = "Please contact Ferry to verify this address to have the exact location specified";
  } else {
    curr_loc_name = curr_ferry_address + " - " + curr_address_ferry_name + ", " + curr_address_ferry_city + ", " + curr_address_ferry_state +  ", " + curr_address_ferry_country;
  }

  document.getElementById("ferry_address_name").innerHTML = curr_address_users_name;
  document.getElementById("ferry_address_address").innerHTML = curr_ferry_address;
  document.getElementById("ferry_address_phone").innerHTML = curr_address_phone;
  document.getElementById("ferry_address_loc").innerHTML = curr_loc_name;



}

function showBusinessInfo(x){

  $("#bness_info_1_tab_2").removeClass("tab-link-active");
  $("#bness_info_1_tab_1").addClass("tab-link-active");
  $('#bness_info_1_tab_1').click();

  my_address = x.getAttribute("data-mine");
  if(my_address == "1"){
    document.getElementById("link_address").style.display = "none";
  } else {
    document.getElementById("link_address").style.display = "";
  }
  business_closetime = x.getAttribute("data-business_closetime");
  business_starttime = x.getAttribute("data-business_starttime");

  business_closetime = parseInt(business_closetime);
  business_starttime = parseInt(business_starttime);

  business_time = getLocalTime(business_starttime, business_closetime);

  business_logo = x.getAttribute("data-business_logo");
  business_description = x.getAttribute("data-this_business_description");
  business_type = x.getAttribute("data-business_type");
  business_address_ferry_city = x.getAttribute("data-this_address_ferry_city");
  business_address_ferry_country = x.getAttribute("data-this_address_ferry_country");
  business_address_ferry_name = x.getAttribute("data-this_address_ferry_name");
  business_address_ferry_state = x.getAttribute("data-this_address_ferry_state");
  business_ferry_address = x.getAttribute("data-this_ferry_address");
  business_address_ownership_status = x.getAttribute("data-this_address_ownership_status");
  business_address_phone = x.getAttribute("data-this_address_phone");
  business_name = x.getAttribute("data-this_business_name");
  business_address_verified_status = x.getAttribute("data-this_address_verified_status");
  business_this_sku = x.getAttribute("data-this_sku");

  y = document.getElementById("bness_phone_number_copy_btn");
  y.setAttribute("data-copytext", business_address_phone);

  z = document.getElementById("bness_ferry_address_copy_btn");
  z.setAttribute("data-copytext", business_ferry_address);


  business_loc_name = business_ferry_address + " - " + business_address_ferry_name + ", " + business_address_ferry_city + ", " + business_address_ferry_state +  ", " + business_address_ferry_country;

  document.getElementById("shop_name").innerHTML = business_name;
  document.getElementById("shop_type").innerHTML = business_type;
  document.getElementById("shop_ferry_address").innerHTML = business_ferry_address;
  document.getElementById("shop_open_close_time").innerHTML = business_time;
  document.getElementById("shop_phone").innerHTML = business_address_phone;
  document.getElementById("shop_location_name").innerHTML = business_loc_name;
  document.getElementById("shop_about").innerHTML = business_description;
  document.getElementById("shop_logo").src = business_logo;

}
function showOrdersPage(){

      current_page = "orders";
       var url_real = CONFIG + "inc/android_use_version_get_orders.php";
       var loginData = {

          "myid" : my_user_sys_id,
          "mypass" : my_e_password,
          "mycountry" : my_country,
          "my_app_version" : my_app_version,
          "my_orders_last_sku" : my_orders_last_sku

        };  

      console.log(loginData);

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
            //console.log(response);
            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
                return;
            }
            var ordersResponse = JSON.parse(response);

            console.log(ordersResponse);

            var total_orders_num = Object.keys(ordersResponse["hits"]).length;

            console.log("hits total_orders_num : " + total_orders_num);

            if(total_orders_num <= 0){



            } else {
            document.getElementById("my_orders").innerHTML = "";

                for (var i = 0; i < total_orders_num; i++) {

                  //if(i == total_orders_num-1){
                    //my_orders_last_sku = i;
                    //console.log("my_orders_last_sku : " + my_orders_last_sku);
                  //}

                        var this_id = Math.floor((Math.random() * 999999) + 100000) + ordersResponse["hits"][i]["sku"];
                        var this_adetor_del_type = ordersResponse["hits"][i]["adetor_del_type"];
                        var this_adetor_id = ordersResponse["hits"][i]["adetor_id"];
                        var this_receiver_name = ordersResponse["hits"][i]["receiver_name"];
                        var this_item_description = ordersResponse["hits"][i]["item_description"];
                        var this_receiver_phone = ordersResponse["hits"][i]["adetor_receiver_phone"];
                        var this_pickup_loc_name = ordersResponse["hits"][i]["pickup_loc_name_real"];
                        var destination_loc_name = ordersResponse["hits"][i]["destination_loc_name_real"];
                        var this_delivery_status_text = ordersResponse["hits"][i]["delivery_status_text"];
                        var this_delivery_status_code = ordersResponse["hits"][i]["delivery_status_code"];
                        var this_adetor_charge = ordersResponse["hits"][i]["adetor_charge"];
                        var this_date_time = ordersResponse["hits"][i]["date_time"];
                        var this_sku = ordersResponse["hits"][i]["sku"];

                        if(this_delivery_status_code == "1"){
                          this_delivery_status_color = "green";
                        } else if(this_delivery_status_code == "2"){
                          this_delivery_status_color = "blue";
                        } else {
                          this_delivery_status_color = "red";
                        }

                          order_title = this_item_description.slice(0,50);

                    $('#my_orders').append($('<li><a onclick="setOrderInfo(this);" id = "' + this_id + '" data-this_adetor_charge = "' + this_adetor_charge + '" data-datetime = "' + this_date_time + '" data-this_adetor_del_type = "' + this_adetor_del_type + ' " data-this_adetor_id = "' + this_adetor_id + ' " data-this_receiver_name = "' + this_receiver_name + ' " data-this_item_description = "' + this_item_description + ' " data-this_receiver_phone = "' + this_receiver_phone + ' " data-this_pickup_loc_name = "' + this_pickup_loc_name + ' " data-destination_loc_name = "' + destination_loc_name + ' " data-this_delivery_status_text = "' + this_delivery_status_text + ' " data-this_delivery_status_code = "' + this_delivery_status_code + ' " data-this_sku = "' + this_sku + ' " href="#" class="item-link item-content popup-open"  data-popup=".orders"><div class="item-inner"><div class="item-title-row"><div class="item-title">' + order_title +  '</div></div><div class="item-subtitle">' + this_date_time + ' | <span style="color: ' + this_delivery_status_color + '; font-weight : bolder">' + this_delivery_status_text + '</span></div></div></a></li>')); 

                } // END OF MY ORDERS FOR LOOP

            }


              app.preloader.hide();

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
          }
        });
}

function getFerryAddress(){

    if(getting_address == 0){

      getting_address = 1;
      var this_address_name = document.getElementById("this_address_name").value;
      var this_address_phone = document.getElementById("this_address_phone").value;



      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      if(this_address_name.trim() == ""){

          getting_address = 0;

            var toastnot = app.toast.create({
              text: 'Complete Address Name Field',
              closeTimeout: 2000,
            })
            toastnot.open();
            return;

      }


     if(!this_address_phone.match(phoneno)){
        
          getting_address = 0;

            var toastnot = app.toast.create({
              text: 'Enter your phone number WITHOUT your country code',
              closeTimeout: 2000,
            })
            toastnot.open();
            return;
      } 

      if(my_country.trim() == "USA"){

        var this_country_code = "1";

      } else if(my_country.trim() == "United Kingdom"){

        var this_country_code = "44";

      } else if(my_country.trim() == "Ghana"){

        var this_country_code = "233";

      } else if(my_country.trim() == "Nigeria"){

        var this_country_code = "234";

      } else if(my_country.trim() == "Russia"){

       var this_country_code = "7";      

      } else {

        
        getting_address = 0;

        var toastnot = app.toast.create({
          text: 'Something went awry. Restart App and try again',
          closeTimeout: 2000,
        })
        toastnot.open();
        return;

      }

      if(this_address_phone.charAt(0) == "0"){
          phone_length = this_address_phone.length;
          this_address_phone = "+" + this_country_code + this_address_phone.slice(1, phone_length);
      }


       var url_real = CONFIG + "inc/android_get_address.php";
       var loginData = {

          "myid" : my_user_sys_id,
          "mypass" : my_e_password,
          "lat" : real_latitude,
          "lng" : real_longitude,
          "this_add_name" : this_address_name,
          "this_add_phone" : this_address_phone,
          "my_app_version" : my_app_version

        };  

      console.log(loginData);

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
          getting_address = 0;

            console.log(response);

            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
                return;
            }

            var real_response = response.toLowerCase();

            var ferry_ini = real_response.substring(0, 5);

            if(ferry_ini == "ferry"){

                document.getElementById("address_picked_title").innerHTML = real_response;
                document.getElementById("this_address_name").value = "";
                document.getElementById("this_address_phone").value = "";


                var this_message = "Address Added As - " + real_response;
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();


            } else {

                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();



            }
              app.preloader.hide();

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {
              getting_address = 0;

                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                app.preloader.hide();
          }
        });


    }


}

function getLocation() {

    console.log("picking location");
    real_latitude = "";
    real_longitude = "";

    var x = document.getElementById("address_picked_title");

     x.innerHTML = "Please wait, Ferry is picking this location...<br> Make sure your location services is on and Ferry has the location permission";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Process failed. Please TURN ON YOUR LOCATION SERVICES, give Ferry App the location permission and restart the app after.";
    }
}

function showPosition(position) {

    var x = document.getElementById("address_picked_title");
    x.innerHTML = "<span style = 'color : green;'>Your Location has been picked. Please fill the spaced and save to get your ferry address</span>"

    real_latitude = position.coords.latitude;
    real_longitude = position.coords.longitude;

    console.log("real_latitude : " + real_latitude);
    console.log("real_longitude : " + real_longitude);

    //x.innerHTML = "Latitude: " + position.coords.latitude + 
    //"<br>Longitude: " + position.coords.longitude; 
    //Your Location has been picked please fill the spaced and save to get your ferry address for this location
}

      function initMap() {

        setTimeout(realInitMap, 3000);
      }

      function realInitMap(){

        var markerArray = [];

        // Instantiate a directions service.
        var directionsService = new google.maps.DirectionsService;

        // Create a map and center it on Manhattan.
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 5.6787533, lng: -0.1784217}
        });

        // Create a renderer for directions and bind it to the map.
        var directionsDisplay = new google.maps.DirectionsRenderer({map: map});

        // Instantiate an info window to hold step text.
        var stepDisplay = new google.maps.InfoWindow;

        // Display the route between the initial start and end selections.
        calculateAndDisplayRoute(
            directionsDisplay, directionsService, markerArray, stepDisplay, map);
        // Listen to change events from the start and end lists.
        var onChangeHandler = function() {
          calculateAndDisplayRoute(
              directionsDisplay, directionsService, markerArray, stepDisplay, map);
        };
        document.getElementById('start').addEventListener('change', onChangeHandler);
        document.getElementById('end').addEventListener('change', onChangeHandler);


      }

      function calculateAndDisplayRoute(directionsDisplay, directionsService,
          markerArray, stepDisplay, map) {
        // First, remove any existing markers from the map.
        for (var i = 0; i < markerArray.length; i++) {
          markerArray[i].setMap(null);
        }

        // Retrieve the start and end locations and create a DirectionsRequest using
        // WALKING directions.
        directionsService.route({
          origin: "5.6787533,-0.1784217",
          destination: "5.6143797 ,-0.2178714",
          travelMode: 'WALKING'
        }, function(response, status) {
          // Route the directions and pass the response to a function to create
          // markers for each step.
          if (status === 'OK') {
            document.getElementById('warnings-panel').innerHTML ='<b>' + response.routes[0].warnings + '</b>';
            directionsDisplay.setDirections(response);
            showSteps(response, markerArray, stepDisplay, map);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

      function showSteps(directionResult, markerArray, stepDisplay, map) {
        // For each step, place a marker, and add the text to the marker's infowindow.
        // Also attach the marker to an array so we can keep track of it and remove it
        // when calculating new routes.
        var myRoute = directionResult.routes[0].legs[0];
        for (var i = 0; i < myRoute.steps.length; i++) {
          var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
          marker.setMap(map);
          marker.setPosition(myRoute.steps[i].start_location);
          attachInstructionText(
              stepDisplay, marker, myRoute.steps[i].instructions, map);
        }
      }

      function attachInstructionText(stepDisplay, marker, text, map) {
        google.maps.event.addListener(marker, 'click', function() {
          // Open an info window when the marker is clicked on, containing the text
          // of the step.
          stepDisplay.setContent(text);
          stepDisplay.open(map, marker);
        });
      }



/*********************************************************************************************************************************

                                                                  FUNCTIONS END 

 /******************************************************************************************************************************/

checkIfSignedIn();
      var cartItems = localStorage.getItem("cartItems");

setTimeout(function() {

      if(cartItems != null && cartItems != ""){


          cartItems = JSON.parse(cartItems);

          var total_cartitems_num = Object.keys(cartItems).length;


          var cart_span_1 = document.getElementById("cart_item_count_1");
          if(cart_span_1 != null && cart_span_1 != undefined){
            cart_span_1.innerHTML = total_cartitems_num;

          }
          var cart_span_2 = document.getElementById("cart_item_count_2");
          if(cart_span_2 != null && cart_span_2 != undefined){
            cart_span_2.innerHTML = total_cartitems_num;

          }

      }


}, 10000);

signMeOut();