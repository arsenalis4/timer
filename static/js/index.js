// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKOiQzPkikIw5X0ImoZIHDQbyFGzOSwXs",
    authDomain: "healthpumta.firebaseapp.com",
    projectId: "healthpumta",
    storageBucket: "healthpumta.appspot.com",
    messagingSenderId: "129199086823",
    appId: "1:129199086823:web:99fe2029af34f4e3e19642",
    measurementId: "G-CJTKFY4230"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var new_seconds = 0;
var button_click_edge_case = true;
var button_stop_click = false;

function add_time(){
    if (!button_stop_click){
        new_seconds++;
        var new_minutes = parseInt(new_seconds / 60);
        var new_hours = parseInt(new_minutes / 60);
        hours.innerHTML = new_hours;
        minutes.innerHTML = new_minutes - 60 * new_hours;
        seconds.innerHTML = new_seconds - 60 * new_minutes;
    }
}

$(document).on('click', '#Start_button', function(e){
    button_stop_click = false;
    if (button_click_edge_case){
        let TimerID = setInterval(() => add_time(), 1000);
        button_click_edge_case = false;
        $(document).on('click', '#Stop_button', function(e){
            button_stop_click = true;
            button_click_edge_case = true;
            clearInterval(TimerID)
        })
        $(document).on('click', '#Reset_button', function(e){
            new_seconds = 0;
            button_click_edge_case = true;
            hours.innerHTML = 0;
            minutes.innerHTML = 0;
            seconds.innerHTML = 0;
            clearInterval(TimerID)
        })
    }
})
