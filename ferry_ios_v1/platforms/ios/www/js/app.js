
/****************************************************************************************************

                      SETTING UP FRAMEWORK 7 CORDOVA PROJECT
                      (THEME, CONFIG)

****************************************************************************************************/
/*
// Dom7
var $ = Dom7;

var isCordova = !!window.cordova;

// Setting Theme
var theme = 'ios';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Initialising App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  input:{
    scrollIntoViewOnFocus : true,
  },
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
      app.dialog.alert('');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
 view: {
    pushState: true,
  }
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
*/


// Dom7
var $ = Dom7;

var isCordova = !!window.cordova;

// Theme
var theme = 'ios';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  input:{
    scrollIntoViewOnFocus : true,
    scrollIntoViewCentered: true,
  },
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
 view: {
    pushState: true,
  }
});

var searchbar = app.searchbar.create({ /* parameters */ });

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


// Init Framework7 App
if (isCordova) {

    $(document).on('deviceready', app.init);
    console.log("cordova READY");

} else {
    console.log("cordova FAILED");
    app.init();
}



/****************************************************************************************************
                            
                            ------- GLOBAL VARIABLES -----------
                            SETTING UP VARIABLES NEEDED VARIABLES

****************************************************************************************************/

var CONFIG = "http://ferryglobal.com/FERRY/";
//SETTING THE USER'S CREDENTIALS
var my_user_sys_id =localStorage.getItem("user_sys_id");
var my_e_password = localStorage.getItem("e_pass");
var my_full_name =localStorage.getItem("c_name");
var c_phone = localStorage.getItem("c_phone");
var my_country = localStorage.getItem("c_country");

if(my_country == "USA"){

  var my_currency = "USD";

} else if(my_country == "United Kingdom"){

  var my_currency = "GBP";

} else if(my_country == "Ghana"){

  var my_currency = "GHc";

} else if(my_country == "Nigeria"){

  var my_currency = "NGN";

} else if(my_country == "Russia"){

 var my_currency = "RUB";      
 
} 

// USER'S BUSINESS INFORMATION

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
var map_ready = 0;
var origin_latlng = "5.6143797,-0.2178714";
var destination_latlng = "5.6143797,-0.2178714";


/****************************************************************************************************

                            DELIVERY VARIBALES

****************************************************************************************************/

var del_option = "";
var real_del_type = "";
var slydepay_token = "";
var slydepay_order_id = "";
var slydepay_redirect_url = "";
var del_country = "";
var del_currency = "";
var makingPayment = 0;
var final_charge_cedis = 0;
var final_subscription_distance = 0
var final_subscription_duration = 0

var ld_current_stage = "";
var ld_pickups = 1;
var ld_destinations = 1;
var ld_receivers = 1;
var ld_final_item_description = "";
var ld_final_item_weight = "";
var ld_final_pickup_coordinates = "";
var ld_final_pickup_names = "";
var ld_final_pickup_locs_number = "";
var ld_final_destination_names = "";
var ld_final_destination_coordinates = "";
var ld_final_destination_locs_number = "";
var ld_final_receivers = "";
var ld_final_receivers_number = "";
var ld_final_distance = "";
var ld_final_charge_num = "";
var ld_final_charge_num_str = "";


///// BUY FOR ME DELIVERY VARIABLES START //////////////
var buy_for_me_shop_name = "";
var buy_for_me_items = "";
var buy_for_me_total_price = "";

///// BUY FOR ME DELIVERY VARIABLES END //////////////

/////// GAS FILL-UP VARIABLES START ////////////////

var gas_refill_cylinder_size = "";
var gas_refill_cylinder_name = "";
var gas_refill_cylinder_weight = "";

/////// GAS FILL-UP VARIABLES END ////////////////

/////// JUNIOR-FERRY VARIABLES START ////////////////

var campus_prices = [];

/////// JUNIOR-FERRY VARIABLES END ////////////////




/****************************************************************************************************
                            
            - WHEN YOU CHOOSE ANY DELIVERY OPTION, THIS FUNCTION SETS THE CURRENT STATE OF A DELIVERY,
              AND GIVES THE INTERFACE THE RIGHT LOOK FOR THE USER

****************************************************************************************************/


function setCurrentState(option){

  // IF A USER IS DOING A LOCAL DELIVERY
  // CHANGE THE INTERFACE INCLUDING THE FORM TO A LOCAL DELIVERY FORM
  if(option == "local_delivery"){

    ld_current_stage = "pickups";
    console.log(ld_current_stage);
    del_option = "local_delivery";
    document.getElementById("local_order_pickups").style.display = "";
    document.getElementById("local_order_destinations").style.display = "none";
    document.getElementById("gas_refill_fields").style.display = "none";
    document.getElementById("del_type_text").innerHTML = "Local Delivery";
    document.getElementById("buy_for_me_fields").style.display = "none";
    document.getElementById("item_info_field").style.display = "";
    document.getElementById("pickup_location_title").innerHTML = "PickUp Location";
    document.getElementById("finish_slydepay_payment_btns").style.display = "none";
    document.getElementById("pay_buttons").style.display = "";


  // IF A USER IS DOING AN INTER-REGIONAL DELIVERY
  // CHANGE THE INTERFACE INCLUDING THE FORM TO AN INTER-REGIONAL DELIVERY FORM
  } else if(option == "inter_regional"){

    ld_current_stage = "pickups";
    console.log(ld_current_stage);
    del_option = "inter_regional";
    document.getElementById("local_order_pickups").style.display = "";
    document.getElementById("local_order_destinations").style.display = "none";
    document.getElementById("gas_refill_fields").style.display = "none";
    document.getElementById("pickup_location_title").innerHTML = "PickUp Location";
    document.getElementById("del_type_text").innerHTML = "Inter-Regional Delivery";
    document.getElementById("buy_for_me_fields").style.display = "none";
    document.getElementById("item_info_field").style.display = "";
    document.getElementById("finish_slydepay_payment_btns").style.display = "none";
    document.getElementById("pay_buttons").style.display = "";

  // IF A USER IS DOING AN INTER-REGIONAL DELIVERY
  // CHANGE THE INTERFACE INCLUDING THE FORM TO AN INTER-REGIONAL DELIVERY FORM
  } else if(option == "international"){

    ld_current_stage = "pickups";
    console.log(ld_current_stage);
    del_option = "international";
    document.getElementById("local_order_pickups").style.display = "";
    document.getElementById("local_order_destinations").style.display = "none";
    document.getElementById("gas_refill_fields").style.display = "none";
    document.getElementById("pickup_location_title").innerHTML = "PickUp Location";
    document.getElementById("del_type_text").innerHTML = "International Delivery";
    document.getElementById("buy_for_me_fields").style.display = "none"
    document.getElementById("finish_slydepay_payment_btns").style.display = "none";
    document.getElementById("pay_buttons").style.display = "";;
    document.getElementById("item_info_field").style.display = "";

  // IF A USER IS DOING A BUY-FOR-ME DELIVERY
  // CHANGE THE INTERFACE TO SHOW THE APPROPRIATE FORM
  } else if(option == "buy_for_me"){

    ld_current_stage = "pickups";
    console.log(ld_current_stage);
    del_option = "buy_for_me";
    document.getElementById("local_order_pickups").style.display = "";
    document.getElementById("local_order_destinations").style.display = "none";
    document.getElementById("gas_refill_fields").style.display = "none";
    document.getElementById("item_info_field").style.display = "none";
    document.getElementById("pickup_location_title").innerHTML = "Shop Location";
    document.getElementById("del_type_text").innerHTML = "Buy-For-Me";
    document.getElementById("buy_for_me_fields").style.display = "";
    document.getElementById("finish_slydepay_payment_btns").style.display = "none";
    document.getElementById("pay_buttons").style.display = "";

  // IF A USER IS DOING A GAS-FILL-UP
  // CHANGE THE INTERFACE TO SHOW THE APPROPRIATE FORM
  } else if(option == "gas_fillup"){

    ld_current_stage = "pickups";
    console.log(ld_current_stage);
    del_option = "gas_fillup";
    document.getElementById("local_order_pickups").style.display = "";
    document.getElementById("local_order_destinations").style.display = "none";
    document.getElementById("item_info_field").style.display = "none";
    document.getElementById("pickup_location_title").innerHTML = "Cylinder PickUp Location";
    document.getElementById("del_type_text").innerHTML = "Gas-Refill";
    document.getElementById("buy_for_me_fields").style.display = "none";
    document.getElementById("gas_refill_fields").style.display = "";
    document.getElementById("finish_slydepay_payment_btns").style.display = "none";
    document.getElementById("pay_buttons").style.display = "";

  // IF A USER IS GOING TO BUY A SUBSCRIPTION
  // CHANGE THE INTERFACE TO SHOW THE APPROPRIATE FORM
  } else if(option == "buy_subscription"){

    del_option = "buy_subscription";

  // IF A USER IS GOING TO BUY FROM A HOSTED SHOP ON FERRY
  // CHANGE THE INTERFACE TO SHOW THE APPROPRIATE FORM
  } else if(option == "cart_checkout"){

    ld_current_stage = "destinations";
    console.log(ld_current_stage);
    del_option = "cart_checkout";
    document.getElementById("local_order_pickups").style.display = "none";
    document.getElementById("item_info_field").style.display = "none";
    document.getElementById("pickup_location_title").innerHTML = "Shop Location";
    document.getElementById("del_type_text").innerHTML = "Shops Sale CheckOut";
    document.getElementById("buy_for_me_fields").style.display = "none";
    document.getElementById("gas_refill_fields").style.display = "none";
    document.getElementById("local_order_destinations").style.display = "";
    document.getElementById("finish_slydepay_payment_btns").style.display = "none";
    document.getElementById("pay_buttons").style.display = "";

  } else {

    var this_message = "Something went awry. Restart App and try again";
    var toastError = app.toast.create({
      text: this_message,
      closeTimeout: 2000,
    });
    toastError.open();


  }

}

/****************************************************************************************************
                            
            - THIS FUNCTION LETS YOU ADD MORE PICKUP AND DESTINATION LOCATIONS AND RECEIVERS
              WHEN DOING A LOCAL DELIVERY

****************************************************************************************************/


function addMoreInputs(){

  // CHECK IF IT'S A LOCAL DELIVERY
  if(del_option == "local_delivery"){

    // IF USER IS ON THE PICKUP PAGE, ADD MORE INPUTS FOR MORE PICKUPS
    if(ld_current_stage == "pickups"){

      ld_pickups = ld_pickups + 1;
      var this_id = "pickup_" + ld_pickups;
      $('#local_all_pickups').append('<li class="item-content item-input"><div class="item-media"><i class="icon f7-icons ios-only">compass</i><i class="icon material-icons md-only" style="display: inline;">location_on</i></div><div class="item-inner"><div class="item-title item-label">PickUp Location ' + ld_pickups + '</div><div class="item-input-wrap"><input id="' + this_id + '" type="text" placeholder="eg. ferry9666 or Adenta Accra"><span class="input-clear-button"></span></div></div></li>');

    // IF USER IS ON THE DESTINATION PAGE, ADD MORE INPUTS FOR MORE DESTINATIONS
    } else if(ld_current_stage == "destinations"){

      ld_destinations = ld_destinations + 1;
      var this_id = "destination_" + ld_destinations;
      $('#local_all_destinations').append('<li class="item-content item-input"><div class="item-media"><i class="icon f7-icons ios-only">compass</i><i class="icon material-icons md-only" style="display: inline;">location_on</i></div><div class="item-inner"><div class="item-title item-label">Destination Location ' + ld_destinations + '</div><div class="item-input-wrap"><input id="' + this_id + '" type="text" placeholder="eg. ferry9666 or Adenta Accra"><span class="input-clear-button"></span></div></div></li>');

    // IF USER IS ON THE RECEIVER PAGE, ADDING MORE INPUTS FOR USER TO ENTER MORE RECEIVERS
    } else if(ld_current_stage == "receivers"){

      ld_receivers = ld_receivers + 1;
      var this_id_name = "receiver_name_" + ld_receivers;
      var this_id_phone = "receiver_phone_" + ld_receivers;
      $('#local_all_receivers').append('<li class="item-content item-input"><div class="item-inner"><div class="item-title item-floating-label">Receiver / Pickup-Host Name ( ' + ld_receivers + ' )</div><div class="item-input-wrap"><input id="' + this_id_name + '" type="text" placeholder="eg. John Doe (H) OR Jane Doe(R)"><span class="input-clear-button"></span></div></div></li><li class="item-content item-input"><div class="item-inner"><div class="item-title item-floating-label">Receiver/Pickup-Host Phone ( ' + ld_receivers + ' )</div><div class="item-input-wrap"><input id="' + this_id_phone + '" type="tel" placeholder="Phone Number"><span class="input-clear-button"></span></div></div></li>');

    } else {

        app.dialog.alert("Something went wrong. Please restart the app and try again", "Alert");


    }
    
/****************************************************************************************************
                            
            - IF IT'S NOT A LOCAL DELIVERY, TELL THE USER IT'S NOT ALLOWED

****************************************************************************************************/
    } else if(del_option == "international"){
      
        app.dialog.alert("Not Allowed For International Deliveries", "Alert");

    }  else if(del_option == "inter_regional"){
      
        app.dialog.alert("Not Allowed For Inter-Regional Deliveries", "Alert");

    }  else if(del_option == "buy_for_me"){
      
        app.dialog.alert("Not Allowed For Buy-For-Me", "Alert");

    } else if(del_option == "gas_fillup"){
      
        app.dialog.alert("Not Allowed For Gas-Refill", "Alert");

    } else if(del_option == "cart_checkout"){
      
        app.dialog.alert("Not Allowed For Shops-Sale Checkout", "Alert");

    } else {
      
            var this_message = "Something went awry. Please restart the app and try again";
            var toastError = app.toast.create({
              text: this_message,
              closeTimeout: 2000,
            });
            toastError.open();

    }


}



/****************************************************************************************************

                      FUNCTION TO OPEN SLYDEPAY IN AN IN-APP BROWSER
                      - AND IT'S CALLBACKS

****************************************************************************************************/


function gotoSlydePay(x) {

    url = x.href;

    var this_message = "Starting Slydepay";
    var toastError = app.toast.create({
      text: this_message,
      closeTimeout: 2000,
    });
    toastError.open();
 
    var target = "_blank";
 
    var options = "location=yes,hidden=yes";
 
    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);
 
    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
 
    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
 
    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
 
}


function loadStartCallBack() {

    var this_message = "Slydepay Loading...";
    var toastError = app.toast.create({
      text: this_message,
      closeTimeout: 2000,
    });
    toastError.open();

}

function loadStopCallBack() {
 
    if (inAppBrowserRef != undefined) {
 
        inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;" });

        //console.log("browser stopped");
 
        var this_message = "Slydepay Load Failed. Restart Process";
        var toastError = app.toast.create({
          text: this_message,
          closeTimeout: 2000,
        });
        toastError.open();
 
        inAppBrowserRef.show();
    }
 
}

function loadErrorCallBack(params) {
 
    $('#status-message').text("");
 
    var scriptErrorMesssage =
       "alert('Sorry we cannot open that page. Message from the server is : "
       + params.message + "');"
 
    inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);
 
    inAppBrowserRef.close();
 
    inAppBrowserRef = undefined;
 
}
 
function executeScriptCallBack(params) {
 
    if (params[0] == null) {
 
        $('#status-message').text(
           "Sorry we couldn't open that page. Message from the server is : '"
           + params.message + "'");
    }
 
}

/****************************************************************************************************
                            
        - THIS FUNCTION LETS YOU CHECK THE VALUE YOU GET WHEN YOU ARE BUYING A SUBSCRIPTION

****************************************************************************************************/


function checkSubscriptionValue(){

      //SETTING DATA TO BE SENT TO SERVER
      var loginData = {
        "myid" : my_user_sys_id,
        "mypass" : my_e_password,
        "my_country" : my_country,
        "my_currency" : my_currency,
        "my_app_version" : my_app_version
      };  

      //CHECK IF THE CURRENT OPTION IS BUY_SUBSCRIPTION

      if(del_option == "buy_subscription"){

        preferred_amt = document.getElementById("preferred_amt").value.toString();
        subscription_duration = document.getElementById("subscription_duration").value;

        if(preferred_amt.trim() == "" || subscription_duration.trim() == ""){
            var this_message = "Complete all fields";
            var toastError = app.toast.create({
              text: this_message,
              closeTimeout: 2000,
            });
            toastError.open();
            return;

/****************************************************************************************************
                            
            - CHECK USER'S CURRENCY AND MATCH THE SUBSCRIPTION AMOUNT TO THE SET LIMITS

****************************************************************************************************/
        } else if(parseInt(preferred_amt) < 20 && my_currency.trim() == "GHc"){
              var the_msg = "Subscription must be 20 " + my_currency + " or more";
              app.dialog.alert(the_msg, "Alert");
              return;
        } else if(parseInt(preferred_amt) < 20 && my_currency.trim() == "USD"){
              var the_msg = "Subscription must be 20 " + my_currency + " or more";
              app.dialog.alert(the_msg, "Alert");
              return;
        } else if(parseInt(preferred_amt) < 1600 && my_currency.trim() == "NGN"){
              var the_msg = "Subscription must be 1600 " + my_currency + " or more";
              app.dialog.alert(the_msg, "Alert");
              return;
        } else if(parseInt(preferred_amt) < 300 && my_currency.trim() == "RUB"){
              var the_msg = "Subscription must be 300 " + my_currency + " or more";
              app.dialog.alert(the_msg, "Alert");
              return;
        }

        loginData["preferred_amt"] = preferred_amt;
        loginData["subscription_duration"] = subscription_duration;


      } else {

        var this_message = "Something went awry. Try again";
        var toastError = app.toast.create({
          text: this_message,
          closeTimeout: 2000,
        });
        toastError.open();
        return;

      }

/****************************************************************************************************
                            
            - GETTING THE VALUE OF THE SUBSCRIPTION FROM THE SERVER

****************************************************************************************************/
      
      //THIS IS THE SERVER-SIDE FILE WE ARE GOING TO MAKE THE REQUEST TO
      var url_real = CONFIG + "inc/android_use_version_check_subscription_value.php";

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){

            app.preloader.hide();
            console.log(response);
            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                return;
            }

            var itemsResponse = JSON.parse(response);

/****************************************************************************************************
                            
            - CHECK THE RESPONSE AND INFORM THE USER

****************************************************************************************************/


            if(itemsResponse["status"] == 1){

              final_charge_cedis = itemsResponse["final_charge_cedis"];
              final_subscription_distance = itemsResponse["subs_km"];
              final_subscription_duration = itemsResponse["subscription_duration"];

              document.getElementById("subscription_value").innerHTML = itemsResponse["msg"];
              document.getElementById("form_subscription").style.display = "none";
              document.getElementById("final_charge_subscription").style.display = "";

            } else {

              var this_message = itemsResponse["msg"];
              app.dialog.alert(this_message, "Alert");

            }

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


}

/****************************************************************************************************
                            
            - SAVING A SUBSCRIPTION AFTER PAYMENT ON SLYDEPAY

****************************************************************************************************/


function saveSubscriptionPurchase(this_slydepay_confirmed_status){

      //THIS IS THE SERVER-SIDE FILE WE ARE GOING TO MAKE THE REQUEST TO
      var url_real = CONFIG + "inc/android_use_version_save_subscription_payment.php";

      //SETTING DATA TO BE SENT TO SERVER
      var loginData = {
        "myid" : my_user_sys_id,
        "mypass" : my_e_password,
        "my_currency" : my_currency,
        "final_charge_cedis" : final_charge_cedis,
        "final_subscription_distance" : final_subscription_distance,
        "final_subscription_duration" : final_subscription_duration,
        "slydepay_order_id" : slydepay_order_id,
        "slydepay_confirm_status" : this_slydepay_confirmed_status,
        "my_app_version" : my_app_version
      };  

/****************************************************************************************************
                            
            - CHECKING DATA TO BE SENT TO THE SERVER FOR CORRECTNESS

****************************************************************************************************/


    if(parseInt(final_subscription_distance) < 0 || final_subscription_distance.toString().trim() == ""){

        var this_message = "Something went awry. Restart Process";
        var toastError = app.toast.create({
          text: this_message,
          closeTimeout: 2000,
        });
        toastError.open();
      return;
    }

    if(slydepay_order_id.trim() == ""){

        var this_message = "Something went awry. Restart Process";
        var toastError = app.toast.create({
          text: this_message,
          closeTimeout: 2000,
        });
        toastError.open();
      return;
    }

    if(parseInt(final_subscription_duration) < 0 || final_subscription_duration.toString().trim() == ""){

        var this_message = "Something went awry. Restart Process";
        var toastError = app.toast.create({
          text: this_message,
          closeTimeout: 2000,
        });
        toastError.open();
      return;
    }

      var this_message = "Saving Payment information";
      var toastError = app.toast.create({
        text: this_message,
        closeTimeout: 2000,
      });
      toastError.open();

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){

            app.preloader.hide();

            // IF THERE IS NO RESPONSE, TELL THE USER
            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                return;
            }

            // IF THERE IS A RESPONSE, INFORM THE USER ACCORDINGLY
            var itemsResponse = JSON.parse(response);
            if(itemsResponse["status"] == 1){
              var msg = itemsResponse["msg"];
              $('#clos_subs_popup_btn').click();
              app.dialog.alert(msg, "Payment Successful");
              //restoreSubcriptionForm();
            } else {

              var msg = itemsResponse["msg"];
              app.dialog.alert(msg, "Failed Order Payment Confirmation");
            }

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                var this_message = "Poor network connection. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();

                app.preloader.hide();
          }
        });


}

/****************************************************************************************************
                            
            - GETTING THE PRICE OF A DELIVERY

****************************************************************************************************/

function getPrice(){

      // SETTING THE DATA TO BE SENT TO THE SERVER 
      var loginData = {
        "myid" : my_user_sys_id,
        "mypass" : my_e_password,
        "my_country" : my_country,
        "my_currency" : my_currency,
        "buy_for_me_total_price_convert_2_cedis" : buy_for_me_total_price,
        "my_app_version" : my_app_version
      };  



/****************************************************************************************************
                            
            - GETTING MORE NEEDED DATA TO BE SENT TO THE SERVER BASED ON THE TYPE OF DELIVERY

****************************************************************************************************/

      // IF USER IS BUYING AN ITEM FROM A SHOP
      // I GET THE ITEMS SKEW AND THE QUANTITY THE USER IS BUYING
      if(del_option == "cart_checkout"){

        var cartItems = localStorage.getItem("cartItems");

        if(cartItems == null){

          app.dialog.alert("You have no items in your cart. You can type the ferry address of any shop in the search field, click on the desired shop that shows in the search results and add their items to your cart", "Cart Alert");
          return;

        } else {

            cartItems = JSON.parse(cartItems);
            var failed_items_num = 0;
            var total_cartitems_num = Object.keys(cartItems).length;
            var cart_item_skus = "";
            var cart_item_quantities = "";
            var cart_items_description = "";
            var picks = 1;
            for(i=0; i < total_cartitems_num; i++){

              if(cartItems[i]["item_sku"] != ""){
                cart_item_skus = cart_item_skus + " " + cartItems[i]["item_sku"];
                cart_item_quantities = cart_item_quantities + " " + cartItems[i]["item_num"].toString();
                cart_items_description = cart_items_description + " (" + picks + ")" + cartItems[i]["this_item_name"] + " - " + cartItems[i]["item_num"] + " pieces" + " - " + cartItems[i]["this_item_price"] + " for one";
                picks = picks + 1;
              } else {
                failed_items_num = failed_items_num + 1;
              }

            }

            if(failed_items_num > 0){

              if(failed_items_num >= total_cartitems_num){
                  var fail_msg = "All items in your cart failed to load. Please restart app and add items to your cart again";
                  app.dialog.alert(fail_msg, "Cart Alert");
                  return;
              } else {
                var fail_msg = failed_items_num.toString() + " items in your cart failed to load. Please restart app and add items to your cart again";
                  app.dialog.alert(fail_msg, "Cart Alert");
              }

            }




        ld_final_pickup_names = cart_item_quantities;
        ld_final_pickup_coordinates = cart_item_skus;
        ld_final_pickup_locs_number = 1;
        ld_final_item_description = cart_items_description.trim();

        }


      }

/****************************************************************************************************
                            
            - CHECKING THAT ALL VITAL DATA IS AVAILABLE

****************************************************************************************************/

    if((del_option == "local_delivery" || del_option == "inter_regional"  ||
     del_option == "international" || del_option == "buy_for_me" || 
     del_option == "gas_fillup" || del_option == "cart_checkout") && ld_final_pickup_names.trim() != "" && 
        ld_final_pickup_coordinates.trim() != "" && ld_final_pickup_locs_number > 0 &&  
        ld_final_destination_names.trim() != "" && ld_final_destination_coordinates.trim() != "" && 
        ld_final_destination_locs_number > 0){

      if(del_option == "buy_for_me"){

        loginData['del_type'] = "buy_for_me";
        ld_final_item_description = "(" + buy_for_me_shop_name + " - Shop), " + buy_for_me_items;
        ld_final_item_weight = document.getElementById("buy_for_me_items_weight").value;

      } else if(del_option == "gas_fillup"){

        loginData['del_type'] = "gas_fillup";
        ld_final_item_description = gas_refill_cylinder_name + " Gas Refill";
        ld_final_item_weight = gas_refill_cylinder_weight;
        console.log("Gas Weight : " + ld_final_item_weight);

      } else if(del_option == "cart_checkout"){

        loginData['del_type'] = "cart_checkout";
        ld_final_item_weight = "1";

      } else {
        
        ld_final_item_description = document.getElementById("item_description").value;
        ld_final_item_weight = document.getElementById("item_weight").value.toString();

      }


        loginData['item_description'] = ld_final_item_description;
        loginData['item_weight'] = ld_final_item_weight;


        if(ld_final_item_weight.trim() == ""){

              app.dialog.alert("Enter item weight estimation.", "Alert");
              return;

        }

        if(parseInt(ld_final_item_weight) < 1){

              app.dialog.alert("Enter item weight estimation. If this continues, please restart App and try again", "Alert");
              return;

        }

        loginData['del_type'] = del_option;

/****************************************************************************************************
                            
            - ASSIGNING RECEIVERS TO DATA TO BE SENT TO SERVER

****************************************************************************************************/

        if(ld_current_stage == "receivers"){

            loginData['pickup_names'] = ld_final_pickup_names;
            loginData['pickup_coordinates'] = ld_final_pickup_coordinates;
            loginData['pickup_locs_num'] = ld_final_pickup_locs_number;

            loginData['destination_names'] = ld_final_destination_names;
            loginData['destination_coordinates'] = ld_final_destination_coordinates;
            loginData['destination_locs_num'] = ld_final_destination_locs_number;

            ld_final_receivers = "";

            for(i=1; i <= ld_receivers; i++){

                var this_name_id = "receiver_name_" + i;
                var this_phone_id = "receiver_phone_" + i;
                ld_final_receivers = ld_final_receivers + "(" + i + " - " +  document.getElementById(this_name_id).value + " - " + document.getElementById(this_phone_id).value + ") ";
                if(i == 1){
                  loginData['receiver_num'] = document.getElementById(this_phone_id).value;
                }
            }

            if(ld_final_receivers == ""){
              app.dialog.alert("Please fill out the receiver information", "Alert");
              restoreAllFormsForDelivery();
              return;
            }

            loginData['receivers'] = ld_final_receivers;

          
        } else {

          app.dialog.alert("Something went wrong. Please restart the process. If this continues, please restart the application and try again", "Alert");
          restoreAllFormsForDelivery();
          return;
        }

    } else {

      app.dialog.alert("Something went wrong. Please restart the app and try again", "Alert");
      restoreAllFormsForDelivery();
      return;
     
    }

      // THIS IS THE SERVER-SIDE FILE WE ARE MAKING THE REQUEST TO
      var url_real = CONFIG + "inc/android_use_version_get_price.php";


/****************************************************************************************************
                            
            - GETTING THE PRICE FROM TO THE SERVER

****************************************************************************************************/

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){

            app.preloader.hide();  // HIDING THE PRE-LOADER


            // IF THERE IS NO RESPONSE FROM THE SERVER
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


/****************************************************************************************************
                            
            - IF THERE'S A RESPONSE, WE PROCESS THE DATA AND SHOW THE USER THE PRICE

****************************************************************************************************/

            var itemsResponse = JSON.parse(response);

            console.log(itemsResponse);

            if(itemsResponse["status"] == 1){

                if(del_option == "local_delivery" || del_option == "inter_regional" ||
                    del_option == "international" || del_option == "buy_for_me" 
                    || del_option == "gas_fillup" || del_option == "cart_checkout"){

                  ld_final_distance = itemsResponse["distance"];
                  ld_final_charge_num = itemsResponse["charge_num"];
                  final_charge_cedis = itemsResponse["final_charge_cedis"];

                  if(final_charge_cedis < 35 && del_option == "local_delivery"){

                    document.getElementById('pay_on_delivery').style.display = "";

                  } else {

                    document.getElementById('pay_on_delivery').style.display = "none";

                  }

                  ld_final_charge_num_str = itemsResponse["charge_num_str"];
                  real_del_type = itemsResponse["real_del_type"];
                  del_option = itemsResponse["real_del_code"];
                  del_country = itemsResponse["real_del_country"];
                  del_currency = itemsResponse["real_del_currency"];

                  document.getElementById("local_order_pickups").style.display = "none";
                  document.getElementById("local_order_destinations").style.display = "none";
                  document.getElementById("local_order_receiver").style.display = "none";

                  document.getElementById("item_description").value = "";
                  document.getElementById("item_weight").value = "";

/****************************************************************************************************
                            
            - SHOWING THE USER THE TOTAL CHARGE BASED ON THE KIND OF DELIVERY BEING DONE

****************************************************************************************************/

                  if(del_option == "buy_for_me"){

                    document.getElementById("item_charge_title").innerHTML = "Items Total Price";
                    document.getElementById("item_charge").innerHTML = buy_for_me_total_price + my_currency;
                    document.getElementById("delivery_charge_title").innerHTML = "Delivery Charge";
                    document.getElementById("delivery_charge").innerHTML = ld_final_charge_num_str;
                    document.getElementById("extra_charge_details").style.display = "";
                    ld_final_charge_num_str = ld_final_charge_num + my_currency;

                  } else if(del_option == "cart_checkout"){
                    buy_for_me_total_price = itemsResponse["total_cartitems_price"];
                    ld_final_pickup_names = itemsResponse["cart_items_pick_loc_names"];
                    document.getElementById("item_charge_title").innerHTML = "Items Total Price";
                    document.getElementById("item_charge").innerHTML = buy_for_me_total_price + my_currency;
                    document.getElementById("delivery_charge_title").innerHTML = "Delivery Charge";
                    document.getElementById("delivery_charge").innerHTML = ld_final_charge_num_str;
                    document.getElementById("extra_charge_details").style.display = "";
                    ld_final_charge_num_str = ld_final_charge_num + my_currency;

                  } else if(del_option == "gas_fillup"){

                    ld_final_gas_charge = itemsResponse["gas_price"];
                    document.getElementById("item_charge_title").innerHTML = "Gas Price";
                    document.getElementById("item_charge").innerHTML = ld_final_gas_charge + my_currency;
                    document.getElementById("delivery_charge_title").innerHTML = "Delivery Charge";
                    document.getElementById("delivery_charge").innerHTML = ld_final_charge_num_str;
                    //ld_final_charge_num = ld_final_charge_num + parseInt(ld_final_gas_charge);
                    document.getElementById("extra_charge_details").style.display = "";
                    ld_final_charge_num_str = ld_final_charge_num + my_currency;
                    console.log("ld_final_charge_num_str : " + ld_final_charge_num_str);

                  } else {

                    document.getElementById("extra_charge_details").style.display = "none";

                  }

                  document.getElementById("local_order_distance").innerHTML = ld_final_distance + " kilometers";
                  document.getElementById("local_order_price").innerHTML = ld_final_charge_num_str;
                  document.getElementById("local_order_item_info").innerHTML = ld_final_item_description;
                  document.getElementById("local_order_item_weight").innerHTML = ld_final_item_weight;
                  document.getElementById("local_order_receiver_names").innerHTML = ld_final_receivers;
                  document.getElementById("local_order_destination_names").innerHTML = ld_final_destination_names;
                  document.getElementById("local_order_pick_names").innerHTML = ld_final_pickup_names;
                  document.getElementById("local_order_type").innerHTML = real_del_type;

                  document.getElementById("local_order_receipt").style.display = "";


                  } else {

                      var this_message = itemsResponse["msg"];
                      app.dialog.alert(this_message, "Alert");

                  }

            } else if(itemsResponse["status"] == 0){

                      var this_message = itemsResponse["msg"];
                      app.dialog.alert(this_message, "Alert");

            } else {

              var this_message ="Something went awry. Please restart the process";
              app.dialog.alert(this_message, "Alert");

            }

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


}

/****************************************************************************************************
                            
            - PAYING FOR A DELIVERY USING A SUBSCRIPTION

****************************************************************************************************/


function useSubscription(){
    slydepay_order_id  = "subscription";
    savePaymentInfo("3");
}

/****************************************************************************************************
                            
            - CHECK IF USER HAS MADE PAYMENT ON SLYDEPAY

****************************************************************************************************/

function checkSlydepayPaymentStatus(type){

  if(makingPayment == 0){


    app.preloader.show();
    var url_real = 'https://app.slydepay.com.gh/api/merchant/invoice/checkstatus';
    var checkData = {
    "emailOrMobileNumber": "fishpottcompany@gmail.com",
    "merchantKey": "1492651329147",
    "orderCode": slydepay_order_id,
    "payToken": slydepay_token,
    "confirmTransaction": true
    }

    console.log(checkData);


/****************************************************************************************************
                            
            - MAKING THE REQUEST TO SLYDEPAY'S SERVER

****************************************************************************************************/

    app.request({
        type: "POST",
        url: url_real,
        data: JSON.stringify(checkData),
        contentType: "application/json",
        success: function(response){
            response = JSON.parse(response);
            var paySuccessResponse = response["success"];

/****************************************************************************************************
                            
            - DID WE GET A RESPONSE FROM SLYDEPAY?

****************************************************************************************************/

            if(paySuccessResponse == true){

                var payResult = response["result"];

/****************************************************************************************************
                            
            - IF PAYMENT HAS BEEN MADE, THE STATUS IS EITHER "CONFIRMED or PENDING"

****************************************************************************************************/
                if(payResult == "CONFIRMED" || payResult == "PENDING"){

                  // WE CONFIRM WITH SLYDEPAY THAT PROCESSING ON OUR SIDE IS GOOD AND THE PAYMENT SHOULD BE
                  // CREDITTED TO OUR ACCOUNT
                                if(type == "1"){

                                  savePaymentInfo("1");

                                } else {

                                  saveSubscriptionPurchase("1");

                                }

/****************************************************************************************************
                            
            - CONFIRMING PAYMENT ON SLYDEPAY

****************************************************************************************************/
        /*
        var url_real2 = 'https://app.slydepay.com.gh/api/merchant/transaction/confirm';

        var checkData = {
                            "emailOrMobileNumber": "fishpottcompany@gmail.com",
                            "merchantKey": "1492651329147",
                            "orderCode": slydepay_order_id,
                            "payToken": slydepay_token
                        }

                    app.request({
                        type: "POST",
                        url: url_real2,
                        data: JSON.stringify(checkData),
                        contentType: "application/json",
                        success: function(response){
                            //app.preloader.hide();
                            console.log(response);
                            response = JSON.parse(response);
                            var payConfirmResponse = response["success"];
                            var payConfirmResult = response["result"];

                            if(payConfirmResponse == true && payConfirmResult == "CONFIRMED"){

****************************************************************************************************
                            
            - AFTER CONFIRMATION, WE GO TO SAVE THE ORDER INFO INTO OUR DATABASE

****************************************************************************************************

                                if(type == "1"){

                                  savePaymentInfo("1");

                                } else {

                                  saveSubscriptionPurchase("1");

                                }


                            } 
                          },
                          error: function(XMLHttpRequest, textStatus, errorThrown) {

                            // EVEN IF CONFIRMATION FAILS, WE STILL SAVE THE ORDER INFO.
                            // WE MANUALLY CONFIRM IT FROM THE ADMIN SIDE
                                if(type == "1"){

                                  savePaymentInfo("0");

                                } else {

                                  saveSubscriptionPurchase("0");

                                }

                          }
                        });
                    

                    payment_confirmed = slydepay_order_id;
                    var this_message = "Confirming Payment information";
                    var toastError = app.toast.create({
                      text: this_message,
                      closeTimeout: 2000,
                    });
                    toastError.open();
                    */

/****************************************************************************************************
                            
            - IF PAYMENT WAS CANCELLED OR DISPUTED

****************************************************************************************************/

                } else if(payResult == "CANCELLED" || payResult == "DISPUTED"){

                    app.preloader.hide();
                    app.dialog.alert("Payment has been cancelled by SlydePay. Please restart the process and pay with a different method", "Alert");


/****************************************************************************************************
                            
            - IF PAYMENT IS NEWS AND WAITING TO BE MADE

****************************************************************************************************/


                } else if(payResult == "NEW"){
                    //savePaymentInfo("1");

                    app.preloader.hide();

                    app.dialog.alert("Payment isn't completed.Finish payment on SlydePay and try again after.", "Alert");

                } else {

                    app.preloader.hide();
                    app.dialog.alert("Something went wrong. Try again later.", "Alert");
                }


            } else {

                    app.preloader.hide();
                    app.dialog.alert("Order was not recognized by SlydePay. You have to restart the entire process.", "Alert");

            }
            
            makingPayment = 0;

        },

        error: function(XMLHttpRequest, textStatus, errorThrown) {

            app.preloader.hide();
                makingPayment = 0;
                var this_message = "Payment Status Check Failed. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
        }
    });


  }

}

/****************************************************************************************************
                            
            - THIS FUNCTION SAVES THE ORDER INFORMATION INTO OUR DATABASE

****************************************************************************************************/

function payOnDelivery(){

    slydepay_order_id  = "pay_on_delivery";
    this_slydepay_confirmed_status = "4";
    savePaymentInfo("4");

}

function savePaymentInfo(this_slydepay_confirmed_status){

      //THIS IS THE FILE WE MAKE THE REQUEST TO ON THE SERVER
      var url_real = CONFIG + "inc/android_use_version_save_payment_info.php";

      //SETTING UP NEEDED INFORMATION TO BE SENT TO SERVER
      var loginData = {
        "myid" : my_user_sys_id,
        "mypass" : my_e_password,
        "my_currency" : my_currency,
        "my_app_version" : my_app_version
      };  

    if(ld_final_receivers_number.trim() == ""){

     ld_final_receivers_number = "-";
     
    }

/****************************************************************************************************
                            
            - MAKING SURE THE RIGHT INFORMATION IS TO BE SENT TO THE SERVER

****************************************************************************************************/

/*
console.log("del_option : " + del_option);
console.log("del_country : " + del_country);
console.log("ld_final_charge_num : " + ld_final_charge_num);
console.log("del_currency : " + del_currency);
console.log("ld_final_receivers : " + ld_final_receivers);
console.log("ld_final_item_description : " + ld_final_item_description);
console.log("ld_final_item_weight : " + ld_final_item_weight);
console.log("ld_final_receivers_number : " + ld_final_receivers_number);
console.log("ld_final_pickup_names : " + ld_final_pickup_names);
console.log("ld_final_destination_names : " + ld_final_destination_names);
console.log("slydepay_order_id : " + slydepay_order_id);
console.log("this_slydepay_confirmed_status : " + this_slydepay_confirmed_status);

slydepay_order_id = "slydepay_order_id";
this_slydepay_confirmed_status = "this_slydepay_confirmed_status";
*/

if(

   del_option.trim() != "" 
   && del_country.trim() != "" 
   && parseFloat(ld_final_charge_num) > 0 
   && del_currency.trim() != "" 
   && ld_final_receivers.trim() != "" 
   && ld_final_item_description.trim() != "" 
   && ld_final_item_weight.trim() != "" 
   && parseFloat(ld_final_distance) >= 0 
   && ld_final_receivers_number.trim() != "" 
   && ld_final_pickup_names.trim() != "" 
   && ld_final_destination_names.trim() != "" 
   && slydepay_order_id.trim() != "" 
   && this_slydepay_confirmed_status.trim() != ""){

  //console.log("in real");
  //return;

/****************************************************************************************************
                            
            - AFTER CHECKING THE DATA, ADD THEM TO THE INFORMATION TO BE SENT TO THE SERVER

****************************************************************************************************/
            loginData['del_type'] = del_option;
            loginData['del_country'] = del_country;
            loginData['adetor_charge'] = ld_final_charge_num;
            loginData['currency'] = del_currency;
            loginData['receiver_name'] = ld_final_receivers;
            loginData['item_description'] = ld_final_item_description;
            loginData['item_weight_type'] = ld_final_item_weight;
            loginData['distance'] = ld_final_distance;
            loginData['adetor_receiver_phone'] = ld_final_receivers_number;
            loginData['pickup_loc_name'] = ld_final_pickup_names;
            loginData['destination_loc_name'] = ld_final_destination_names;
            loginData['slydepay_order_id'] = slydepay_order_id;
            if(this_slydepay_confirmed_status == "3"){

              loginData['slydepay_confirmed_status'] = "1";
              loginData['use_subscription'] = "1";

            } else if(this_slydepay_confirmed_status == "4"){

              loginData['slydepay_confirmed_status'] = "1";

            } else {

              loginData['slydepay_confirmed_status'] = this_slydepay_confirmed_status;
            }

} else {

      var this_message = "Something went awry. Please restart process 1";
      var toastError = app.toast.create({
        text: this_message,
        closeTimeout: 2000,
      });
      toastError.open();
      return;
}

      var this_message = "Saving information";
      var toastError = app.toast.create({
        text: this_message,
        closeTimeout: 2000,
      });
      toastError.open();

/****************************************************************************************************
                            
            - SENDING THE INFORMATION TO THE SERVER

****************************************************************************************************/

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){

            app.preloader.hide(); // HIDING THE LOADER


            // IF WE GET NO RESPONSE
            if(response == null || response == ""){
                var this_message = "Something went awry. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                return;
            }

/****************************************************************************************************
                            
            - FF THERE'S A RESPONSE, TELL THE USER AND RESET THE FORMS USED FOR THE DELIVERY REQUEST

****************************************************************************************************/

            var itemsResponse = JSON.parse(response);
            if(itemsResponse["status"] == 1){
              var msg = itemsResponse["msg"];
              $('#close_local_order_popup_btn').click();
              $('#clos_subs_popup_btn').click();
              app.dialog.alert(msg, "Order Successful");
            } else {

              var msg = itemsResponse["msg"];
              app.dialog.alert(msg, "Failed Order Confirmation");
            }

          },

          error: function(XMLHttpRequest, textStatus, errorThrown) {

                var this_message = "Poor network connection. Try again";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();

                app.preloader.hide();
          }
        });

}

/****************************************************************************************************
                            
            - THIS FUNCTION GETS THE SLYDEPAY ORDER TOKEN FOR PAYMENT

****************************************************************************************************/

function prepareSlydePay(id_suffix, item_name){


      // THIS IS THE SERVER SIDE FILE THAT GENERATES THE TOKEN
      var url_real = "https://fishpott.com/web/in/slydepay_web/prepare_payment_ferry.php";


/****************************************************************************************************
                            
            - IF THE CHARGE WE ARE GOING TO GENERATE THE TOKEN FOR IS ZERO OR LESS,
              ABORT THE PROCESS

****************************************************************************************************/

    if(parseFloat(final_charge_cedis) <= 0 || final_charge_cedis.toString().trim() == ""){

        var this_message = "Something went awry. Restart Process";
        var toastError = app.toast.create({
          text: this_message,
          closeTimeout: 2000,
        });
        toastError.open();
      return;
    }   

      // SETTING THE DATA TO BE SENT TO THE SERVER
       var loginData = {

          "myid" : my_user_sys_id,
          "mypass" : my_e_password,
          "mycountry" : my_country,
          "my_app_version" : my_app_version,
          "item_name" : item_name,
          "buy_quantity" : 1,
          "total_charge" : final_charge_cedis

        };  

        console.log(loginData);
        console.log("url_real : " + url_real);

/****************************************************************************************************
                            
            - MAKING THE REQUEST TO THE SERVER

****************************************************************************************************/

      app.preloader.show();// SHOW THE LOADER

        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){

            app.preloader.hide();//HIDE THE LOADER

            // IF THERE IS NO RESPONSE, INFORM USER
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

/****************************************************************************************************
                            
            -IF THERE IS A RESPONSE, ALLOW USER TO GO AND MAKE PAYMENT ON SLYDEPAY USING TOKEN

****************************************************************************************************/
        console.log(itemsResponse);

            if(itemsResponse["status"] == 1){

              slydepay_order_id = itemsResponse["slydepay_order_id"];
              slydepay_token = itemsResponse["slydepay_pay_token"];
              slydepay_redirect_url = itemsResponse["slydepay_redirect_url"];

                current_all_tokens = localStorage.getItem("all_slydepay_tokens");
                console.log("current_all_tokens" + current_all_tokens);
                console.log("slydepay_token" + slydepay_token);
                console.log("slydepay_order_id" + slydepay_order_id);

                if(current_all_tokens == null){

                  new_all_tokens = slydepay_token;
                  localStorage.setItem("all_slydepay_tokens", slydepay_token);
                
                } else {

                  new_all_tokens = current_all_tokens + " " + slydepay_token;
                  localStorage.setItem("all_slydepay_tokens", new_all_tokens);

                }

                console.log("new_all_tokens" + new_all_tokens);



              if(document.getElementById("local_order_slydepay_link" + id_suffix) != null){
                document.getElementById("local_order_slydepay_link" + id_suffix).href = slydepay_redirect_url;
              }

              if(document.getElementById("junior_order_slydepay_link" + id_suffix) != null){
                document.getElementById("junior_order_slydepay_link" + id_suffix).href = slydepay_redirect_url;
              }

              app.dialog.alert("Click 'Make Payment On Slydepay', make payment on Slydepay's website, and AFTER YOU FINISH PAYMENT ON SLYDEPAY, click the 'Confirm Payment' Button ", "Alert");

              document.getElementById("pay_buttons" + id_suffix).style.display = "none";
              document.getElementById("finish_slydepay_payment_btns" + id_suffix).style.display = "";
              
              if(document.getElementById("junior_pay_buttons" + id_suffix) != null){
                  document.getElementById("junior_pay_buttons" + id_suffix).style.display = "none";
              }

              if(document.getElementById("junior_finish_slydepay_payment_btns" + id_suffix) != null){
                  document.getElementById("junior_finish_slydepay_payment_btns" + id_suffix).style.display = "";
              }

            } else {

              var this_message ="Something went awry. Try again";
              app.dialog.alert(this_message, "Alert");

            }

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
}

/****************************************************************************************************
                            
            - THIS FUNCTION GETS CHECKS THE LOCATION A USER ENTERED AND TRIES TO MAKE A MATCH USING
            ON FERRY ADDRESSES OR GOOGLE MAP

****************************************************************************************************/

function checkLocations(){

      //SETTING DATA TO BE SENT TO SERVER
      var loginData = {
        "myid" : my_user_sys_id,
        "mypass" : my_e_password,
        "my_app_version" : my_app_version
      };  

    if(del_option == "local_delivery" || del_option == "inter_regional" ||
        del_option == "international" || del_option == "buy_for_me" 
        || del_option == "gas_fillup" || del_option == "cart_checkout"){


        // CHECK IF USER IS ON THE PICKUP STAGE
        if(ld_current_stage == "pickups"){

/****************************************************************************************************
                            
            - SETTING NEEDED DATA BASED ON THE KIND OF DELIVERY IT IS

****************************************************************************************************/

          if(del_option == "buy_for_me"){

                buy_for_me_shop_name = document.getElementById("buy_for_me_shop_name").value;
                buy_for_me_items = document.getElementById("buy_for_me_items").value;
                buy_for_me_total_price = document.getElementById("buy_for_me_total_price").value.toString();

              if(buy_for_me_shop_name.trim() == "" || buy_for_me_items.trim() == "" || 
                  buy_for_me_total_price.trim() == ""){

                var this_message = "Complete All Fields";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                return;

              }

              if(parseInt(buy_for_me_total_price) < 1){

                  var this_message = "Enter Correct Total Price Of Items";
                  var toastError = app.toast.create({
                    text: this_message,
                    closeTimeout: 2000,
                  });
                  toastError.open();
                  return;

              }

          } else if(del_option == "gas_fillup"){

                gas_refill_cylinder_size = document.getElementById("cylinder_size").value;

              if(gas_refill_cylinder_size.trim() == ""){

                var this_message = "Complete All Fields";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                return;

              }

              if(gas_refill_cylinder_size.trim() == "4"){

                gas_refill_cylinder_name = "4kg Small Cylinder";
                gas_refill_cylinder_weight = "4";

              } else if(gas_refill_cylinder_size.trim() == "6"){

                gas_refill_cylinder_name = "6kg Small Cylinder";
                gas_refill_cylinder_weight = "6";

              } else if(gas_refill_cylinder_size.trim() == "18"){

                gas_refill_cylinder_name = "18kg Medium Cylinder";
                gas_refill_cylinder_weight = "18";

              } else if(gas_refill_cylinder_size.trim() == "47"){

                gas_refill_cylinder_name = "47kg Large Cylinder";
                gas_refill_cylinder_weight = "47";

              } else {

                var this_message = "Something went awry. Please restart the application and try again.";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();
                return;

              }

          }



            loginData['number_of_locs'] = ld_pickups;

/****************************************************************************************************
                            
            - SETTING THE INDEXES OF THE _POST DATA TO BE SENT TO THE SERVER FOR THE PICKUP LOCATIONS
            - A DELIVERY MAY HAVE MULTIPLE PICKUP(s) SO THE _POST INDEXES FOLLOW A PATTERN
            - FOR PICKUP LOCATION (1), WE HAVE
            $_POST["loc_1"] = THE NAME OF THE LOCATION THE USER TYPED FOR PICKUP 1
            - FOR PICKUP LOCATION (2), WE HAVE
            $_POST["loc_2"] = THE NAME OF THE LOCATION THE USER TYPED FOR PICKUP 2

****************************************************************************************************/

            for(i=1; i <= ld_pickups; i++){

                var this_id = "pickup_" + i;
                var this_value = document.getElementById(this_id).value;
                var this_index = "loc_" + i;
                loginData[this_index] = this_value.toLowerCase();

            }
          
        } else if(ld_current_stage == "destinations"){


/****************************************************************************************************
                            
            - SETTING THE INDEXES OF THE _POST DATA TO BE SENT TO THE SERVER FOR THE DESTINATION LOCATIONS
            - A DELIVERY MAY HAVE MULTIPLE DESTINATION(s) SO THE _POST INDEXES FOLLOW A PATTERN
            - FOR DESTINATION LOCATION (1), WE HAVE
            $_POST["loc_1"] = THE NAME OF THE LOCATION THE USER TYPED FOR DESTINATION 1
            - FOR DESTINATION LOCATION (2), WE HAVE
            $_POST["loc_2"] = THE NAME OF THE LOCATION THE USER TYPED FOR DESTINATION 2

****************************************************************************************************/

            loginData['number_of_locs'] = ld_destinations;

            for(i=1; i <= ld_destinations; i++){

                var this_id = "destination_" + i;
                var this_value = document.getElementById(this_id).value;
                var this_index = "loc_" + i;
                loginData[this_index] = this_value.toLowerCase();

            }


        } else {

          app.dialog.alert("Something went wrong. Please restart the app and try again", "Alert");
          restoreAllFormsForDelivery();
          return;
        }

    } else {

       app.dialog.alert("Something went wrong. Please restart the app and try again", "Alert");
      restoreAllFormsForDelivery();
      return;
     
    }


      // THIS IS THE SERVER SIDE FILE WE MADE THE REQUEST TO
      var url_real = CONFIG + "inc/android_use_version_check_locations.php";

      app.preloader.show();//SHOWING THE PRE-LOADER

        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){

            app.preloader.hide();//HIDING THE PRE-LOADER

            //IF WE DO NOT GET A RESPONSE FROM THE SERVER, SHOW THE ERROR TO THE USER
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

/****************************************************************************************************
                            
            - BASED ON THE RESPONSE AND THE STAGE OF THE DELIVERY THE USER IS ON (WHETHER SETTING PICKUP
            OR DESTINATION LOCATION, WE SHOW THE NAME OF LOCATION WE MADE A HIT WITH FOR USER TO CONFIRM)

****************************************************************************************************/

            var itemsResponse = JSON.parse(response);

            if(itemsResponse["status"] == 1){

                location_picks = itemsResponse["location_picks"];
                this_message = "Ferry was able to match a total of " + location_picks + " locations out of the locations you entered. Please check the returned location(s) and continue if you are satisfied. If not, refine your location keywords. Using Ferry Addresses is more accurate";
                app.dialog.alert(this_message, "Alert");

                if(del_option == "local_delivery" || del_option == "inter_regional" ||
                    del_option == "international" || del_option == "buy_for_me" || 
                    del_option == "gas_fillup" || del_option == "cart_checkout"){

/****************************************************************************************************
                            
            - USER IS SETTING A PICKUP LOCATION

****************************************************************************************************/


                    if(ld_current_stage == "pickups"){

                      ld_final_pickup_names = itemsResponse["location_names"];

                      ld_final_pickup_coordinates = itemsResponse["coordinates"];
                      ld_final_pickup_locs_number = itemsResponse["location_picks"];

                      document.getElementById("pickups_check_results").innerHTML = itemsResponse["location_names"] + ". THE DELIVERY WILL BE IN THE ORDER STATED HERE";

                      document.getElementById("pickup_check_loc_btn").style.display = "none";
                      document.getElementById("pickup_new_btns").style.display = "";

/****************************************************************************************************
                            
            - USER IS SETTING A DESTINATION LOCATION

****************************************************************************************************/


                    } else if(ld_current_stage == "destinations"){

                      ld_final_destination_names = itemsResponse["location_names"];

                      ld_final_destination_coordinates = itemsResponse["coordinates"];
                      ld_final_destination_locs_number = itemsResponse["location_picks"];

                      document.getElementById("destinations_check_results").innerHTML = itemsResponse["location_names"] + ". THE DELIVERY WILL BE IN THE ORDER STATED HERE";

                      document.getElementById("destination_check_loc_btn").style.display = "none";
                      document.getElementById("destination_new_btns").style.display = "";

                    } else {

                      var this_message ="Something went awry. Please Restart The Process. If this continues, please restart the application";
                      app.dialog.alert(this_message, "Alert");
                    
                    }
                  } else {

                  }
            } else {

              var this_message ="Something went awry";
              app.dialog.alert(this_message, "Alert");

            }

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

}

/****************************************************************************************************
                            
            - THIS FUNCTION RESETS THE LOCATION FORM FOR THE USER TO TYPE A NEW LOCATION IF THE MATCH
            MADE ON FERRY ADDRESS / GOOGLE MAP IS INCORRECT

****************************************************************************************************/


function resetLocationsKeywords(){

  if(del_option == "local_delivery" || del_option == "inter_regional" ||
      del_option == "international" || del_option == "buy_for_me" 
      || del_option == "gas_fillup" || del_option == "cart_checkout"){

    if(ld_current_stage == "pickups"){

      document.getElementById("pickup_new_btns").style.display = "none";
      document.getElementById("pickups_check_results").innerHTML = "";
      document.getElementById("pickup_check_loc_btn").style.display = "";

    } else if(ld_current_stage == "destinations"){

      document.getElementById("destination_new_btns").style.display = "none";
      document.getElementById("destinations_check_results").innerHTML = "";
      document.getElementById("destination_check_loc_btn").style.display = "";


    } else {

      var this_message ="Something went awry. Please Restart The Process. If this continues, please restart the application";
      app.dialog.alert(this_message, "Alert");
    }


  } else if(del_option == "buy_subscription"){

    document.getElementById("form_subscription").style.display = "";
    document.getElementById("final_charge_subscription").style.display = "none";
    document.getElementById('subscription_value').innerHTML = '';

  } else {

        var toastBottom = app.toast.create({
          text: 'Something went awry. Restart App and try again',
          closeTimeout: 2000,
        });
        toastBottom.open();
  }

}

/****************************************************************************************************
                            
            - THIS FUNCTION MOVES THE USER FROM ONE STAGE TO ANOTHER OF THE DELIVERY-ORDERING PROCESS
            SAY, AFTER SETTING THE PICKUP LOCATION, WE GO TO THE DELIVERY LOCATION

****************************************************************************************************/


function continueToNextStage(){

    if(del_option == "local_delivery" || del_option == "inter_regional" ||
        del_option == "international" || del_option == "buy_for_me" 
        || del_option == "gas_fillup" || del_option == "cart_checkout"){

    if(ld_current_stage == "pickups"){

      document.getElementById("local_order_receipt").style.display = "none";
      document.getElementById("local_order_receiver").style.display = "none";
      document.getElementById("local_order_pickups").style.display = "none";
      document.getElementById("local_order_destinations").style.display = "";
      ld_current_stage = "destinations";

    } else if(ld_current_stage == "destinations"){

      document.getElementById("local_order_pickups").style.display = "none";
      document.getElementById("local_order_destinations").style.display = "none";
      document.getElementById("local_order_receipt").style.display = "none";
      document.getElementById("local_order_receiver").style.display = "";
      ld_current_stage = "receivers";


    } else {

      var this_message ="Something went awry. Please Restart The Process. If this continues, please restart the application";
      app.dialog.alert(this_message, "Alert");
    }


  }

}

/****************************************************************************************************
                            
            - THIS FUNCTION RESETS THE LOCATION FORMS BECAUSE THE INTERFACE/FORMS CHANGE AND 
            IF THE USER DECIDES TO CANCEL, WE HAVE TO RESET THE FORM

****************************************************************************************************/



function restoreAllFormsForDelivery(){


  document.getElementById("del_type_text").innerHTML = "Local";

  if(del_option == "local_delivery" || del_option == "inter_regional" ||
      del_option == "international" || del_option == "buy_for_me" || 
      del_option == "gas_fillup" || del_option == "cart_checkout" || del_option == "junior_ferry"){

      ld_pickups = 1;
      ld_destinations = 1;

      document.getElementById("local_order_pickups").style.display = "";
      document.getElementById("local_order_destinations").style.display = "none";
      document.getElementById("local_order_receipt").style.display = "none";
      document.getElementById("local_order_receiver").style.display = "none";

      document.getElementById("pickup_check_loc_btn").style.display = "";
      document.getElementById("pickup_new_btns").style.display = "none";
      document.getElementById("buy_for_me_fields").style.display = "none";
      document.getElementById("gas_refill_fields").style.display = "none";

      document.getElementById("destination_check_loc_btn").style.display = "";
      document.getElementById("destination_new_btns").style.display = "none";


      document.getElementById("pickups_check_results").innerHTML = "";
      document.getElementById("destinations_check_results").innerHTML = "";

      document.getElementById("local_all_pickups").innerHTML = "";
      document.getElementById("local_all_destinations").innerHTML = "";
      document.getElementById("local_all_receivers").innerHTML = "";

      $('#local_all_pickups').append('<li class="item-content item-input"><div class="item-media"><i class="icon f7-icons ios-only">compass</i><i class="icon material-icons md-only" style="display: inline;">location_on</i></div><div class="item-inner"><div id="pickup_location_title" class="item-title item-label">PickUp Location</div><div class="item-input-wrap"><input id="pickup_1" type="text" placeholder="eg. ferry9666 or Adenta Accra"><span class="input-clear-button"></span></div></div>');
      $('#local_all_destinations').append('<li class="item-content item-input"><div class="item-media"><i class="icon f7-icons ios-only">compass</i><i class="icon material-icons md-only" style="display: inline;">location_on</i></div><div class="item-inner"><div class="item-title item-label">Destination Location</div><div class="item-input-wrap"><input id="destination_1" type="text" placeholder="eg. ferry9666 or Adenta Accra"><span class="input-clear-button"></span></div></div>');
      $('#local_all_receivers').append('<li class="item-content item-input"><div class="item-inner"><div class="item-title item-floating-label">Receiver / Pickup-Host Name (1)</div><div class="item-input-wrap"><input id="receiver_name_1" type="text" placeholder="eg. John Doe (H) OR Jane Doe(R)"><span class="input-clear-button"></span></div></div></li><li class="item-content item-input"><div class="item-inner"><div class="item-title item-floating-label">Receiver/Pickup-Host Phone (1)</div> <div class="item-input-wrap"><input id="receiver_phone_1" type="tel" placeholder="Phone Number"><span class="input-clear-button"></span></div></div></li>');
      del_option = "";
      real_del_type = "";
      slydepay_token = "";
      slydepay_order_id = "";
      slydepay_redirect_url = "";
      del_country = "";
      del_currency = "";
      makingPayment = 0;
      final_charge_cedis = 0;
      final_subscription_distance = 0
      final_subscription_duration = 0



      ld_current_stage = "";
      ld_pickups = 1;
      ld_destinations = 1;
      ld_receivers = 1;
      ld_final_item_description = "";
      ld_final_item_weight = "";
      ld_final_pickup_coordinates = "";
      ld_final_pickup_names = "";
      ld_final_pickup_locs_number = "";
      ld_final_destination_names = "";
      ld_final_destination_coordinates = "";
      ld_final_destination_locs_number = "";
      ld_final_receivers = "";
      ld_final_receivers_number = "";
      ld_final_distance = "";
      ld_final_charge_num = "";
      ld_final_charge_num_str = "";

      buy_for_me_shop_name = "";
      buy_for_me_items = "";
      buy_for_me_total_price = "";

      gas_refill_cylinder_size = "";
      gas_refill_cylinder_name = "";
      gas_refill_cylinder_weight = "";
  } else {

        var toastBottom = app.toast.create({
          text: 'Something went awry. Restart App and try again',
          closeTimeout: 2000,
        });
        toastBottom.open();
  }

}

/****************************************************************************************************
                            
            - THIS FUNCTION RESETS THE SUBSCRIPTION FORM BECAUSE THE INTERFACE/FORMS CHANGE AND 
            IF THE USER DECIDES TO CANCEL, WE HAVE TO RESET THE FORM

****************************************************************************************************/



function restoreSubcriptionForm(){

del_option = "";
real_del_type = "";
slydepay_token = "";
slydepay_order_id = "";
slydepay_redirect_url = "";
del_country = "";
del_currency = "";
makingPayment = 0;
final_charge_cedis = 0;
final_subscription_distance = 0
final_subscription_duration = 0



ld_current_stage = "";
ld_pickups = 1;
ld_destinations = 1;
ld_receivers = 1;
ld_final_item_description = "";
ld_final_item_weight = "";
ld_final_pickup_coordinates = "";
ld_final_pickup_names = "";
ld_final_pickup_locs_number = "";
ld_final_destination_names = "";
ld_final_destination_coordinates = "";
ld_final_destination_locs_number = "";
ld_final_receivers = "";
ld_final_receivers_number = "";
ld_final_distance = "";
ld_final_charge_num = "";
ld_final_charge_num_str = "";

buy_for_me_shop_name = "";
buy_for_me_items = "";
buy_for_me_total_price = "";

gas_refill_cylinder_size = "";
gas_refill_cylinder_name = "";
gas_refill_cylinder_weight = "";

  document.getElementById('preferred_amt').value = '';
  document.getElementById('subscription_value').innerHTML = '';
  document.getElementById('final_charge_subscription').style.display = 'none';
  document.getElementById('finish_slydepay_payment_btns2').style.display = 'none';
  document.getElementById('pay_buttons2').style.display = '';
  document.getElementById('form_subscription').style.display = '';
  document.getElementById('junior_form').style.display = '';

}

var timer = null;

function checkLongPressStart(type){

    timer = setTimeout( emptyCart, 2000 );

};

function checkLongPressEnd(){
  clearTimeout( timer );
};

function sendMessageWithTokens() {

    var disMessageText = localStorage.getItem("all_slydepay_tokens");

    console.log("all tokens to send : " + disMessageText);



    if(disMessageText.trim() == ""){

        var toastBottom = app.toast.create({
          text: 'Validation cannot be done if there are no payment tokens',
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
                  text: "Tokens Sent",
                  closeTimeout: 2000,
                });
                toastResponse.open();
                document.getElementById("thismessage").value = "";
                app.preloader.hide();

                localStorage.setItem("all_slydepay_tokens", "");

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

/****************************************************************************************************
                            
            - INITIALISING THE CORDOVA PROJECT FOR THE PLATFORM (ANDROID, iOS,)

****************************************************************************************************/


if (isCordova) {
    $(document).on('deviceready', app.init);
    console.log("here 1");

} else {
    app.init();
}

document.addEventListener("deviceready", onDeviceReady, false);

//KNOWING THE ANDROID DEVICE IS READY
function onDeviceReady() {

    window.open = cordova.InAppBrowser.open;

}

/****************************************************************************************************
                            
            - SIGNING THE USER OUT OF THE APP
            
****************************************************************************************************/



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

/****************************************************************************************************
                            
            - CHECKING IF THE USER IS ALREADY SIGNED IN
            
****************************************************************************************************/

function checkIfSignedIn(){

    var my_user_sys_id =localStorage.getItem("user_sys_id");
    var my_e_password =localStorage.getItem("e_pass");
    var my_full_name =localStorage.getItem("c_name");
    var my_phone =localStorage.getItem("c_phone");
    var my_country =localStorage.getItem("c_country");
    var my_app_version = "1.3";

    if(my_country == "USA"){

      var my_currency = "USD";

    } else if(my_country == "United Kingdom"){

      var my_currency = "GBP";

    } else if(my_country == "Ghana"){

      var my_currency = "GHc";

    } else if(my_country == "Nigeria"){

      var my_currency = "NGN";

    } else if(my_country == "Russia"){

     var my_currency = "RUB";      
     
    } 


    if(my_user_sys_id == null || my_app_version == null || my_country == null || my_e_password == null  || my_full_name == null  || my_phone == null){

          signMeOut();

    } else {

      if(my_user_sys_id.trim() != "" && my_e_password.trim() != "" && my_app_version.trim() != "" && 
        my_phone.trim() != "" && my_full_name.trim() != ""  && my_country.trim() != "" ){

          $('#bodymain').append('<a id="success_signup" style="display : none;" href="/main/">success</a>');
          app.preloader.hide();
          current_page = "main";
          $('#success_signup').click();
          initMap();
      }

    }

}

/****************************************************************************************************
                            
            - LOGGING IN THE USER
            
****************************************************************************************************/


function checkLogin() {

/****************************************************************************************************
                            
            - PICKING THE FORM DATA
            
****************************************************************************************************/

    var phone_value = document.getElementById("dis_username").value;
    var disPassword = document.getElementById("dis_password").value;
    var this_country_code = document.getElementById('my_country').value;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


/****************************************************************************************************
                            
            - VALIDATING THE FORM DATA
            
****************************************************************************************************/



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


/****************************************************************************************************
                            
            - MAKING THE REQUEST TO THE SERVER
            
****************************************************************************************************/



       var url_real = CONFIG + "inc/android_login.php";
       var loginData = {
          "emailorphone" : phone_value,
          "my_app_version" : my_app_version,
          "password" : disPassword
      };

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){

            //IF WE GOT NO RESPONSE
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
            
/****************************************************************************************************
                            
            - AFTER GETTING A RESPONSE, WE SIGN USER IN OR NOT
            
****************************************************************************************************/

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

                if(my_country == "USA"){

                  my_currency = "USD";

                } else if(my_country == "United Kingdom"){

                  my_currency = "GBP";

                } else if(my_country == "Ghana"){

                  my_currency = "GHc";

                } else if(my_country == "Nigeria"){

                  my_currency = "NGN";

                } else if(my_country == "Russia"){

                 my_currency = "RUB";      
                 
                } 

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

/****************************************************************************************************
                            
            - THIS FUNCTIONS SIGNS A USER UP FOR FERRY
            
****************************************************************************************************/

function checkSignup() {

/****************************************************************************************************
                            
            - GETTING THE FORM INPUTS
            
****************************************************************************************************/


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

/****************************************************************************************************
                            
            - VALIDATING THE INPUT
            
****************************************************************************************************/


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

    } else if (
      firstname.trim() != "" 
      && pottname.trim() != ""
      &&  sex.trim() != ""  
      &&  dob.trim() != ""  
      &&  country.trim() != "" 
      &&  phone_value.trim() != ""  
      &&  password.trim() != "" 
      &&  repeat_password.trim() != ""  
      &&  this_country_code.trim() != ""
      && (password.trim() == repeat_password.trim())){

        if(phone_value.charAt(0) == "0"){
            phone_length = phone_value.length;
            phone_value = "+" + this_country_code + phone_value.slice(1, phone_length);
        }

/****************************************************************************************************
                            
            - MAKING THE REQUEST TO THE SERVR
            
****************************************************************************************************/

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


      app.preloader.show();//SHOWING THE PRE-LOADER
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){
            //IF THERE IS NO RESPONSE, WE ALERT USER
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
            
/****************************************************************************************************
                            
            - SIGNING USER IN OR NOT BASED ON RESPONSE
            
****************************************************************************************************/



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

                if(my_country == "USA"){

                  my_currency = "USD";

                } else if(my_country == "United Kingdom"){

                  my_currency = "GBP";

                } else if(my_country == "Ghana"){

                  my_currency = "GHc";

                } else if(my_country == "Nigeria"){

                  my_currency = "NGN";

                } else if(my_country == "Russia"){

                 my_currency = "RUB";      
                 
                } 

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

/****************************************************************************************************
                            
            - THIS FUNCTION GETS TODAY'S DATE
            
****************************************************************************************************/



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

/****************************************************************************************************
                            
            - THIS FUNCTION ALLOWS USER TO SEND A REQUEST TO FERRY FOR A PASSWORD RESET
            
****************************************************************************************************/


function sendPasswordReset(){

    var disMessageText = document.getElementById("reset_password_number").value;

    var countryCode = document.getElementById("my_country_reset_password").value;

    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(disMessageText.trim() == ""){

        var toastBottom = app.toast.create({
          text: 'You have to enter your phone number',
          closeTimeout: 2000,
        });
        toastBottom.open();

    } else if(countryCode.trim() == ""){

        var toastBottom = app.toast.create({
          text: 'Complete all fields',
          closeTimeout: 2000,
        });
        toastBottom.open();

    }  else if(!disMessageText.match(phoneno)){

        var toastBottom = app.toast.create({
          text: 'Enter your phone number without your country code',
          closeTimeout: 2000,
        });
        toastBottom.open();

    } else {

        if(disMessageText.charAt(0) == "0"){

            phone_length = disMessageText.length;
            disMessageText = "+" + countryCode + disMessageText.slice(1, phone_length);

        } else {

            disMessageText = phone_value;

        }
       var url_real = CONFIG + "inc/android_reset_password_request.php";
         var loginData = {
            "info" : disMessageText
        };  

      app.preloader.show();
        app.request({
          url: url_real,
          type: "POST",
          data: loginData,
          success: function(response){

                app.dialog.alert("Ferry will send you a link to reset your password shortly.", "Alert");
                
                document.getElementById("reset_password_number").value = "";
                document.getElementById("my_country_reset_password").value = "";
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


    }

}

/****************************************************************************************************
                            
            - THIS FUNCTION ALLOWS USER TO CONTACT FERRY
            
****************************************************************************************************/



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

/****************************************************************************************************
                            
            - READING IMAGES PICKED AND SETTING THEM TO AN CORRESPONDING IMAGE TAG
            
****************************************************************************************************/



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

/****************************************************************************************************
                            
            - THIS FUNCTION SETS THE BUSINESS INFO IS THE USER HAS HOSTED A BUSINESS
            
****************************************************************************************************/



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


/****************************************************************************************************
                            
            - THIS FUNCTION CHECKS THE USER'S SUBSCRIPTION
            
****************************************************************************************************/



function checkSubscription() {

      var url_real = CONFIG + "inc/android_use_version_check_subscription.php";

      var loginData = {
        "myid" : my_user_sys_id,
        "mypass" : my_e_password,
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

            var this_message = itemsResponse["msg"];
            //alert(this_message);
            app.preloader.hide();
            app.dialog.alert(this_message, "Subscription");

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

}

/****************************************************************************************************
                            
            - THIS FUNCTION EMPTIES THE USER'S CART
            
****************************************************************************************************/



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

/****************************************************************************************************
                            
            - THIS FUNCTION ALLOWS THE USER TO PROCEED TO PAYMENT AFTER ADDING ITEMS TO CART
            
****************************************************************************************************/



function startCheckOutCart(){
  
  var cartItems = localStorage.getItem("cartItems");

  if(cartItems == null){

    app.dialog.alert("You have no items in your cart. You can type the ferry address of any shop in the search field, click on the desired shop that shows in the search results and add their items to your cart", "Cart Alert");

  } else {
    $('#shop_buyable_popup').click();
    setCurrentState('cart_checkout');
    $('#cart_checkout_option').click();
    console.log("done");

  }

}



/****************************************************************************************************
                            
            - ADDING AN ITEM TO YOUR CART
            
****************************************************************************************************/

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

/****************************************************************************************************
                            
            - REMOVING AN ITEM IN MY HOSTED BUSINESS
            
****************************************************************************************************/

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

/****************************************************************************************************
                            
            - SHOWING ALL THE MENU ITEMS
            
****************************************************************************************************/

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

/****************************************************************************************************
                            
            - SHOWING ALL THE MENU ITEMS WHEN A BUYER VISITS A HOSTED SHOP
            
****************************************************************************************************/

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

/****************************************************************************************************
                            
            - GETTING ALL JUNIOR-FERRY UNIVERSITIES FOR USER'S COUNTRY
            
****************************************************************************************************/

function getUniversities(){

  document.getElementById("junior_form").style.display = "";
  document.getElementById("junior_order_receipt").style.display = "none";
  
       var url_real = CONFIG + "inc/android_use_version_get_my_campuses.php";

       var loginData = {

          "myid" : my_user_sys_id,
          "mypass" : my_e_password,
          "mycountry" : my_country,
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
            document.getElementById("my_campuses").innerHTML = "";
            
            if(total_items_num <= 0){


                var this_message = "No universities available for you.";
                var toastError = app.toast.create({
                  text: this_message,
                  closeTimeout: 2000,
                });
                toastError.open();


            } else {

                for (var i = 0; i < total_items_num; i++) {

                        var this_id = Math.floor((Math.random() * 999999) + 100000) + itemsResponse["hits"][i]["sku"];
                        var this_uni_name = itemsResponse["hits"][i]["uni_name"];
                        var this_uni_charge = itemsResponse["hits"][i]["uni_charge"];
                        var this_uni_charge_cedis = itemsResponse["hits"][i]["uni_charge_cedis"];
                        campus_prices[this_uni_name] = [this_uni_charge, this_uni_charge_cedis];
                        $('#my_campuses').append($('<option value="' + this_uni_name + '">' + this_uni_name + '</option>')); 

                } // END OF MY ORDERS FOR LOOP

            }

              console.log(campus_prices);
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


/****************************************************************************************************
                            
            - HOSTING A SHOP ON FERRY
            
****************************************************************************************************/

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
    var my_business_ferry_address_length = my_business_ferry_address.length;

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


    } else if(my_business_ferry_address_length <= 5){

        var this_message = "Please type a full ferry address";
        var toastError = app.toast.create({
          text: this_message,
          closeTimeout: 2000,
        });
        toastError.open();
      
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

/****************************************************************************************************
                            
            - ADDING AN ITEM TO YOUR SHOP
            
****************************************************************************************************/

function addShopItem(id_suffix) {

  if(addShopItemToggle == 0){

    addShopItemToggle = 1;

    var menu_item_name = document.getElementById("menu_item_name" + id_suffix).value;
    var menu_item_price = document.getElementById("menu_item_price" + id_suffix).value;
    var menu_item_weight = document.getElementById("menu_item_weight" + id_suffix).value;
    var menu_item_description = document.getElementById("menu_item_description" + id_suffix).value;
    if(id_suffix == "2"){
    var disEmpPic = document.getElementById("imgInp4").value;
    } else {
    var disEmpPic = document.getElementById("imgInp3").value;
    }

    if(menu_item_name.trim() == "" || menu_item_price.trim() == "" || 
      menu_item_description.trim() == "" || menu_item_weight.trim() == ""){

    
          addShopItemToggle = 0;

          var toastBottom = app.toast.create({
          text: 'All Fields Must Be Completed',
          closeTimeout: 2000,
          });
          toastBottom.open();

    }else if(menu_item_name.trim() != "" && menu_item_price.trim() != "" && 
              menu_item_description.trim() != ""  && menu_item_weight.trim() != "" ){

      app.preloader.show();

      var formData = new FormData();
      formData.append('myid', my_user_sys_id);
      formData.append('mypass', my_e_password);
      formData.append('my_app_version', my_app_version);
      formData.append('menu_item_name', menu_item_name);
      formData.append('menu_item_weight', menu_item_weight);
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
                document.getElementById("menu_item_weight" + id_suffix).value = "";
                document.getElementById("menu_item_price" + id_suffix).value = "";
                document.getElementById("menu_item_description" + id_suffix).value = "";
                document.getElementById("imgInp" + id_suffix).src = "";
                document.getElementById("blah3").src = "img/default.png";

                if(id_suffix == "2"){
                document.getElementById("blah4").src = "img/default.png";
                } else {
                document.getElementById("blah3").src = "img/default.png";
                }

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

/****************************************************************************************************
                            
            - SETTING A USER'S PROFILE PAGE INFO FOR VIEWING
            
****************************************************************************************************/

function showProfilePage(){

  current_page = "profile";
  document.getElementById("page_profile_my_name").innerHTML = my_full_name;
  document.getElementById("page_profile_my_phone").innerHTML = c_phone;
  document.getElementById("page_profile_my_country").innerHTML = my_country;
  document.getElementById("page_profile_my_appversion").innerHTML = my_app_version;
}

/****************************************************************************************************
                            
            - SHOWING THE USER THE SUMMARY OF HIS ORDER
            
****************************************************************************************************/

function setOrderInfo(x){

  this_order_type = x.getAttribute("data-this_adetor_del_type");
  this_distance = x.getAttribute("data-distance");
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
  document.getElementById("this_order_distance").innerHTML = this_distance + " km";
  document.getElementById("this_order_item_desc").innerHTML = this_order_item_desc;
  document.getElementById("this_order_pickup").innerHTML = this_order_pickup;
  document.getElementById("this_order_destination").innerHTML = this_order_destination;
  document.getElementById("this_order_receiver_name").innerHTML = this_order_receiver_name;
  document.getElementById("this_order_receiver_phone").innerHTML = this_order_receiver_phone;
  document.getElementById("this_order_status").innerHTML = this_order_status;
  document.getElementById("this_order_charge").innerHTML = this_order_charge;
  document.getElementById("this_order_id").innerHTML = this_order_id;

}

/****************************************************************************************************
                            
            - SHOWING USER'S FERRY ADDRESSES AND SPONSORED ADDRESSES
            
****************************************************************************************************/

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

/****************************************************************************************************
                            
            - SHOWING ALL ADDRESSES FOR SEARCH
            
****************************************************************************************************/

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

/****************************************************************************************************
                            
            - SETTING THE LOCAL TIME FOR USER
            
****************************************************************************************************/

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

/****************************************************************************************************
                            
            - COPYING TO CLIP BOARD
            
****************************************************************************************************/

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

/****************************************************************************************************
                            
            - SHOWING AN ADDRESS' INFORMATION
            
****************************************************************************************************/

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

/****************************************************************************************************
                            
            - SHOWING A BUSINESS' INFO
            
****************************************************************************************************/

function showBusinessInfo(x){

  $("#bness_info_1_tab_2").removeClass("tab-link-active");
  $("#bness_info_1_tab_1").addClass("tab-link-active");
  $('#bness_info_1_tab_1').click();

  my_address = x.getAttribute("data-mine");
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


/****************************************************************************************************
                            
            - GETTING AND SHOWING USER'S ORDERSS
            
****************************************************************************************************/

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
                        var distance = ordersResponse["hits"][i]["distance"];
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

                    $('#my_orders').append($('<li><a onclick="setOrderInfo(this);" id = "' + this_id + '" data-distance = "' + distance + '" data-this_adetor_charge = "' + this_adetor_charge + '" data-datetime = "' + this_date_time + '" data-this_adetor_del_type = "' + this_adetor_del_type + ' " data-this_adetor_id = "' + this_adetor_id + ' " data-this_receiver_name = "' + this_receiver_name + ' " data-this_item_description = "' + this_item_description + ' " data-this_receiver_phone = "' + this_receiver_phone + ' " data-this_pickup_loc_name = "' + this_pickup_loc_name + ' " data-destination_loc_name = "' + destination_loc_name + ' " data-this_delivery_status_text = "' + this_delivery_status_text + ' " data-this_delivery_status_code = "' + this_delivery_status_code + ' " data-this_sku = "' + this_sku + ' " href="#" class="item-link item-content popup-open"  data-popup=".orders"><div class="item-inner"><div class="item-title-row"><div class="item-title">' + order_title +  '</div></div><div class="item-subtitle">' + this_date_time + ' | <span style="color: ' + this_delivery_status_color + '; font-weight : bolder">' + this_delivery_status_text + '</span></div></div></a></li>')); 

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

/****************************************************************************************************
                            
            - GETTING A FERRY ADDRESS
            
****************************************************************************************************/

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


      if(real_latitude.toString().trim() == "" || real_longitude.toString().trim() == ""){

          getting_address = 0;

            var toastnot = app.toast.create({
              text: 'Your Location is has not been picked yet. Please wait..',
              closeTimeout: 2000,
            })
            toastnot.open();
            return;

      }


     if(this_address_phone.trim() != "" && this_address_phone.match(phoneno)){
        
          getting_address = 0;

            var toastnot = app.toast.create({
              text: 'Enter your phone number WITH your country code',
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

/****************************************************************************************************
                            
            - PICKING USER'S LOCATION
            
****************************************************************************************************/

function getLocation() {

    var this_message = "Picking your current location.";
    var toastError = app.toast.create({
      text: this_message,
      closeTimeout: 2000,
    });
    toastError.open();

    //alert("picking location");
    real_latitude = "";
    real_longitude = "";

    var x = document.getElementById("address_picked_title");

     x.innerHTML = "Please wait, Ferry is picking this location...<br> Make sure your location services is on and Ferry has the location permission";

    var onSuccess = function(position) {

    var x = document.getElementById("address_picked_title");
    x.innerHTML = "<span style = 'color : green;'>Your Location has been picked. Please fill the form and save to get your ferry address</span>"

    real_latitude = position.coords.latitude;
    real_longitude = position.coords.longitude;

    console.log("real_latitude : " + real_latitude);
    console.log("real_longitude : " + real_longitude);

    /*
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    */
    };
 
    function onError(error) {
        x.innerHTML = "Process failed. Please TURN ON YOUR LOCATION SERVICES, give Ferry App the location permission and restart the app after.";
        app.dialog.alert(error.message + '\n', "Tracking");

    }
  
    navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });

}


/****************************************************************************************************
                            
            - SETTING THE MAP FOR TRACKING
            
****************************************************************************************************/

      function initMap() {

        setTimeout(realInitMap, 10000);

      }

      function realInitMap(){
        if(current_page != ""){


            if(real_latitude.toString().trim() != "" && real_longitude.toString().trim() != ""){

                origin_latlng = real_latitude + "," + real_longitude;
                destination_latlng = "5.6143797,-0.2178714";
                console.log("here 1");

            } else {

                origin_latlng = "5.6787533,-0.1784217";
                destination_latlng = "5.6143797,-0.2178714";
                console.log("here 2");

            }

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
            var onClickHandler = function() {
              trackFerryAddress();
              //calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, map);
            };
            document.getElementById('start').addEventListener('change', onChangeHandler);
            document.getElementById('end').addEventListener('change', onChangeHandler);
            document.getElementById('track_start_btn').addEventListener('click', onChangeHandler);

            map_ready = 1;
        }

      }

      function calculateAndDisplayRoute(directionsDisplay, directionsService,
          markerArray, stepDisplay, map) {
              console.log("CHANGE IN ADDRESS DETECTED");
        // First, remove any existing markers from the map.
        for (var i = 0; i < markerArray.length; i++) {
          markerArray[i].setMap(null);
        }

        // Retrieve the start and end locations and create a DirectionsRequest using
        // WALKING directions.
        directionsService.route({
          origin: origin_latlng,
          destination: destination_latlng,
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

/****************************************************************************************************
                            
            - GETTING THE DIRECTIONS TO A FERRY ADDRESS
            
****************************************************************************************************/

function trackFerryAddress(){

  getLocation();
  var tracking_address = document.getElementById("ferry_address_tracking").value.toLowerCase();
  var address_length = tracking_address.length;
  var ferry_ini = tracking_address.substring(0, 5);

  if(tracking_address.trim() != "" && ferry_ini == "ferry" && address_length > 5){

      if(map_ready == 1){

      app.preloader.show();
      var url_real = CONFIG + "inc/android_use_version_get_ferry_address_info.php";

      var loginData = {
        "myid" : my_user_sys_id,
        "mypass" : my_e_password,
        "this_ferry_address" : tracking_address,
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

              this_destination_latlng = itemsResponse["address_lat"] + "," + itemsResponse["address_long"];
              this_origin_latlng =  real_latitude + "," + real_longitude;

              if(real_latitude.toString().trim() != "" && real_longitude.toString().trim() != "" &&
                  itemsResponse["address_lat"] != "" && itemsResponse["address_lat"] != ""){

                    directions_info =  itemsResponse["directions_info"];

                    console.log("CURRENT LOCATION : " + this_origin_latlng);
                    console.log("DESTINATION LOCATION : " + this_destination_latlng);
                    console.log(this_destination_latlng);
                    origin_latlng = this_origin_latlng;
                    destination_latlng = this_destination_latlng;

                    document.getElementById("directions_info").innerHTML = directions_info;
                    document.getElementById("start").value = this_origin_latlng;
                    document.getElementById("end").value = this_destination_latlng;

                    app.preloader.hide();
              } else {

                    app.preloader.hide();
                    var this_message = "The application is picking your location first to show you the directions to the Ferry Address. This can take up to 10 mins. Try tracking at least 3 times after waiting. If it keeps failing, Please make sure your location services is switched on and Ferry App has location access permission, AND RESTART App to try again";
                    app.preloader.hide();
                    app.dialog.alert(this_message, "Tracking");

              }


            } else {

              var this_message = itemsResponse["msg"];
              app.preloader.hide();
              app.dialog.alert(this_message, "Tracking");

            }

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

        var this_message = "Map is not yet ready.";
        var toastError = app.toast.create({
          text: this_message,
          closeTimeout: 2000,
        });
        toastError.open();
        app.preloader.hide();
      }

  } else if(ferry_ini != ""){

        var this_message = "Addresses must start with ferry";
        var toastError = app.toast.create({
          text: this_message,
          closeTimeout: 2000,
        });
        toastError.open();
        app.preloader.hide();
      
  } else if(address_length <= 5){

        var this_message = "Please type a full ferry address";
        var toastError = app.toast.create({
          text: this_message,
          closeTimeout: 2000,
        });
        toastError.open();
        app.preloader.hide();
      
  } else {

    var this_message = "Type The Ferry Address";
    var toastError = app.toast.create({
      text: this_message,
      closeTimeout: 2000,
    });
    toastError.open();
    app.preloader.hide();
  }

}

/****************************************************************************************************
                            
            - SETTING PRICE FOR JUNIOR FERRY FOR PAYMENT
            
****************************************************************************************************/

function proceedToPayJuniorFerry(){

  var this_campus = document.getElementById("my_campuses").value;
  var this_campus_price = campus_prices[this_campus][0];
  var this_campus_price_cedis = campus_prices[this_campus][1];
  var this_pickup = this_campus + " - " + document.getElementById("junior_pickup_name").value;
  var this_destination = this_campus + " - " + document.getElementById("junior_destination_name").value;
  var this_item_desc = document.getElementById("junior_item_description").value;
  var this_receiver_name = document.getElementById("junior_receiver_name").value;
  var this_receiver = "( 1- " + this_receiver_name + " ) ";

  console.log("this_campus : " + this_campus);
  console.log("this_campus_price : " + this_campus_price);
  console.log("this_campus_price_cedis : " + this_campus_price_cedis);
  console.log("this_pickup : " + this_pickup);
  console.log("this_destination : " + this_destination);
  console.log("this_item_desc : " + this_item_desc);
  console.log("this_receiver_name : " + this_receiver_name);

  if(this_campus.trim() == "" || this_pickup.trim() == "" ||  this_destination.trim() == "" ||
      this_item_desc.trim() == "" || this_receiver_name.trim() == ""){

    var this_message = "Complete all fields";
    var toastError = app.toast.create({
      text: this_message,
      closeTimeout: 2000,
    });
    toastError.open();
    return;

  }

  del_option = "junior_ferry";
  del_country = my_country;
  //ld_current_stage = "";
  ld_pickups = 1;
  ld_destinations = 1;
  ld_receivers = 1;
  ld_final_item_description = this_item_desc;
  ld_final_item_weight = "1";
  //ld_final_pickup_coordinates = "";
  ld_final_pickup_names = this_pickup;
  ld_final_pickup_locs_number = "1";
  ld_final_destination_names = this_destination;
  //ld_final_destination_coordinates = "";
  ld_final_destination_locs_number = "1";
  ld_final_receivers = this_receiver;
  ld_final_receivers_number = "-";
  ld_final_distance = "5";
  ld_final_charge_num = this_campus_price;
  final_charge_cedis = this_campus_price_cedis;
  ld_final_charge_num_str = this_campus_price + " " + my_currency;
  del_option = "junior_ferry";
  del_country = my_country;
  del_currency = my_currency;

  console.log("final_charge_cedis : " + final_charge_cedis);

  document.getElementById("junior_order_type").innerHTML = "JUNIOR FERRY";
  document.getElementById("junior_order_pick_names").innerHTML = this_pickup;
  document.getElementById("junior_order_destination_names").innerHTML = this_destination;
  document.getElementById("junior_order_receiver_names").innerHTML = this_receiver;
  document.getElementById("junior_order_item_info").innerHTML = this_item_desc;
  document.getElementById("junior_order_price").innerHTML = ld_final_charge_num_str;

  document.getElementById("junior_form").style.display = "none";
  document.getElementById("junior_order_receipt").style.display = "";


}


/*********************************************************************************************************************************

                            FUNCTIONS END 

 /******************************************************************************************************************************/

checkIfSignedIn();
//signMeOut();

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

      document.getElementById("buy_for_me_total_price_title").innerHTML = "Total Price Of Items In " + my_currency;
        
        if(parseInt(preferred_amt) < 20 && my_currency.trim() == "GHc"){
          document.getElementById("preferred_amt_title").innerHTML = "Amount. Mininum is 20 " + my_currency;
          document.getElementById("preferred_amt").min = "20";
        } else if(parseInt(preferred_amt) < 20 && my_currency.trim() == "USD"){
          document.getElementById("preferred_amt_title").innerHTML = "Amount. Mininum is 20 " + my_currency;
          document.getElementById("preferred_amt").min = "20";
        } else if(parseInt(preferred_amt) < 1600 && my_currency.trim() == "NGN"){
          document.getElementById("preferred_amt_title").innerHTML = "Amount. Mininum is 1600 " + my_currency;
          document.getElementById("preferred_amt").min = "1600";
        } else if(parseInt(preferred_amt) < 300 && my_currency.trim() == "RUB"){
          document.getElementById("preferred_amt_title").innerHTML = "Amount. Mininum is 300 " + my_currency;
          document.getElementById("preferred_amt").min = "300";
        }

}, 10000);

setTimeout(function () {

searchbar = document.querySelectorAll('.searchbar');

searchbar.forEach(function(currsearchbar) {
    currsearchbar.addEventListener("search", function(e) {
                //this function does stuff
          e.preventDefault();
          console.log("Search started");
          $('#start_search_btn').click();

    });
});

}, 5000);

/*

GETTING COUNTRY AND CITY FROM GOOGLE MAPS
var latlng;
latlng = new google.maps.LatLng(5.6779357, -0.1787663); // New York, US
//latlng = new google.maps.LatLng(37.990849233935194, 23.738339349999933); // Athens, GR
//latlng = new google.maps.LatLng(48.8567, 2.3508); // Paris, FR
//latlng = new google.maps.LatLng(47.98247572667902, -102.49018710000001); // New Town, US
//latlng = new google.maps.LatLng(35.44448406385493, 50.99001635390618); // Parand, Tehran, IR
//latlng = new google.maps.LatLng(34.66431108560504, 50.89113940078118); // Saveh, Markazi, IR

new google.maps.Geocoder().geocode({'latLng' : latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
            var country = null, countryCode = null, city = null, cityAlt = null;
            var c, lc, component;
            for (var r = 0, rl = results.length; r < rl; r += 1) {
                var result = results[r];

                if (!city && result.types[0] === 'locality') {
                    for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
                        component = result.address_components[c];

                        if (component.types[0] === 'locality') {
                            city = component.long_name;
                            break;
                        }
                    }
                }
                else if (!city && !cityAlt && result.types[0] === 'administrative_area_level_1') {
                    for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
                        component = result.address_components[c];

                        if (component.types[0] === 'administrative_area_level_1') {
                            cityAlt = component.long_name;
                            break;
                        }
                    }
                } else if (!country && result.types[0] === 'country') {
                    country = result.address_components[0].long_name;
                    countryCode = result.address_components[0].short_name;
                }

                if (city && country) {
                    break;
                }
            }

            console.log("City: " + city + ", City2: " + cityAlt + ", Country: " + country + ", Country Code: " + countryCode);
            document.getElementById('city').innerHTML = city;
            document.getElementById('cityAlt').innerHTML = cityAlt;
            document.getElementById('country').innerHTML = country;
            document.getElementById('countryCode').innerHTML = countryCode;
        }
    }
});

*/