// Background
var mirror_img;

// Icons
var calendar_img;
var news_img;
var weather_img;
var health_img;
var music_img;
var options_img;
var power_img;
var cloud_img;
var play_img;
var stop_img;

// Images
var calendar_display;
var calendar_display2;


let currentScreen = 0; // 0 = Menu, 1 = Off
let circleRad = 70; // Size of circle buttons
let circleRad2 = 50; // Size of play/stop buttons

// Buttons for menu
var mir_name = "Bryan";
let button_x = 350, button_width = 200, button_height = 75;
let calendarButton;
let button_ycal = 200;

let newsButton;
let button_ynews = 300;

let weatherButton;
let button_yweather = 400;

let healthButton;
let button_yhealth = 500;

let musicButton;
let button_ymusic = 600;
let icons = [];

// Images
var calendar_display;
var calendar_display2;


let currentScreen = 0; // 0 = Menu, 1 = Off
let circleRad = 70; // Size of circle buttons
let circleRad2 = 50; // Size of play/stop buttons

// Buttons for menu
var mir_name = "Bryan";
let button_x = 350, button_width = 200, button_height = 75;
let calendarButton;
let button_ycal = 200;

let newsButton;
let button_ynews = 300;

// Set button position and size
button.position(button_x, button_y);
button.size(button.width);

let weatherButton;
let button_yweather = 400;

let healthButton;
let button_yhealth = 500;

let musicButton;
let button_ymusic = 600;

let menuButton; let button_xmenu = 320;
let button_ymenu = 610;
let menuButton2; let button_xmenu2 = 300;
let button_ymenu2 = 475;

// For options menu
let clear_rect;
let name_inp;
let name_button;
let namereset_button;

// For calendar
let monthButton;
let button_ymonth = 510;

let monthButton2;
let clicked = false;

// For health
let statsButton;
let backButton;

// For music
let song;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mirror_img = loadImage('small_mirror.png'); // Mirror background
  calendar_img = loadImage('icons/calendar.png'); // Calendar icon
  news_img = loadImage('icons/news.png'); // News icon
  weather_img = loadImage('icons/weather.png'); // Weather icon
  health_img = loadImage('icons/health.png'); // Health icon
  music_img = loadImage('icons/music.png'); // Music icon
  options_img = loadImage('icons/gear.png'); // Options icon
  power_img = loadImage('icons/power_offon.png'); // Power off/on icon
  calendar_display = loadImage('images/calendarDisplay.png'); // October calendar
  calendar_display2 = loadImage('images/calendarDisplay2.png'); // November calendar
  news_feed = loadImage('images/news_feed.png'); // News feed image
  cloud_img = loadImage('icons/cloudy.png'); // Cloud icon
  play_img = loadImage('icons/play.png'); // Play button
  stop_img = loadImage('icons/stop.png'); // Stop button

  // Calendar button
  calendarButton = createButton("Calendar");
  calendarButton.position(button_x, button_ycal);
  calendarButton.size(button_width, button_height);
  let col = color(61, 199, 220); // Turquoise color
  col.setAlpha(89); // 35% opacity
  calendarButton.style("font-size", "26px");
  calendarButton.style("color", "white");
  calendarButton.style('background-color', col);

  // News button
  newsButton = createButton("News");
  newsButton.position(button_x, button_ynews);
  newsButton.size(button_width, button_height);
  let col2 = color(198, 166, 100); // Beige (sand) color
  col2.setAlpha(89);
  newsButton.style("font-size", "26px");
  newsButton.style("color", "white");
  newsButton.style('background-color', col2);

  // Weather button
  weatherButton = createButton("Weather"); 
  weatherButton.position(button_x, button_yweather);
  weatherButton.size(button_width, button_height);
  let col3 = color(161, 35, 18); // Dark red color
  col3.setAlpha(89);
  weatherButton.style("font-size", "26px");
  weatherButton.style("color", "white");
  weatherButton.style('background-color', col3);

  // Health button
  healthButton = createButton("Health"); 
  healthButton.position(button_x, button_yhealth);
  healthButton.size(button_width, button_height);
  let col4 = color(96, 110, 140); // Yale blue color
  col4.setAlpha(89);
  healthButton.style("font-size", "26px");
  healthButton.style("color", "white");
  healthButton.style('background-color', col4);

  // Music button
  musicButton = createButton("Music"); 
  musicButton.position(button_x, button_ymusic);
  musicButton.size(button_width, button_height);
  let col5 = color(146, 78, 125); // Violet color
  col5.setAlpha(89);
  musicButton.style("font-size", "26px");
  musicButton.style("color", "white");
  musicButton.style('background-color', col5);

  // Back to Menu button
  menuButton = createButton("Back to Menu"); 
  menuButton.position(button_xmenu, button_ymenu);
  menuButton.size(button_width, button_height);
  menuButton.style("font-size", "26px");
  menuButton.style('background-color', col4); // Uses same color as health button
  menuButton.hide(); // Hidden at start

  // Name input and button for options
  name_inp = createInput('');
  name_inp.position(250, 250);
  name_inp.size(200);
  name_inp.hide(); // Hidden at start

  name_button = createButton('Submit');
  name_button.position(470, 250);
  name_button.mousePressed(changeName);
  name_button.hide();

  namereset_button = createButton('Reset');
  namereset_button.position(545, 250);
  namereset_button.mousePressed(resetName);
  namereset_button.hide();

  // Previous and next month button (calendar)
  monthButton = createButton("Previous Month"); 
  monthButton.position(button_xmenu, button_ymonth);
  monthButton.size(button_width, button_height);
  monthButton.style("font-size", "26px");
  let col6 = color (243, 165, 5); // Orange color
  col6.setAlpha(89);
  monthButton.style('background-color', col6);
  monthButton.hide(); // Hidden at start

  monthButton2 = createButton("Next Month"); 
  monthButton2.position(button_xmenu, button_ymonth);
  monthButton2.size(button_width, button_height);
  monthButton2.style("font-size", "26px");
  monthButton2.style('background-color', col6);
  monthButton2.hide(); // Hidden at start

  // Modified menu button for weather screen
  menuButton2 = createButton("Back to Menu"); 
  menuButton2.position(button_xmenu2, button_ymenu2);
  menuButton2.size(button_width, button_height);
  menuButton2.style("font-size", "26px");
  menuButton2.style('background-color', col4); 
  menuButton2.hide(); // Hidden at start

  // More stats (Health)
  statsButton = createButton("See More Stats"); 
  statsButton.position(button_xmenu, button_ymonth);
  statsButton.size(button_width, button_height);
  statsButton.style("font-size", "26px");
  statsButton.style('background-color', col6);
  statsButton.hide(); // Hidden at start

  // Back button (Health)
  backButton = createButton("Back"); 
  backButton.position(button_xmenu, button_ymonth);
  backButton.size(button_width, button_height);
  backButton.style("font-size", "26px");
  backButton.style('background-color', col6);
  backButton.hide(); // Hidden at start

  // Song for music section
  song = loadSound('dropit.mp3');
}

function draw() {
  background(255); // White outline for mirror
  image(mirror_img, 150, 20);

  switch(currentScreen) {
    case 0:
      // Placement of menu icons
      image(calendar_img, 290, 210);
      calendar_img.resize(50, 50);
      image(news_img, 290, 310);
      news_img.resize(50, 50);
      image(weather_img, 290, 410);
      weather_img.resize(50, 50);
      image(health_img, 290, 510);
      health_img.resize(50, 50);
      image(music_img, 290, 610);
      music_img.resize(50, 50);

      textSize(50);
      stroke(0);
      strokeWeight(2);
      fill(255);
      text(mir_name + "'s Interactive Mirror", 550, 70);
      
      // Clock
      var mins = minute();
      var hrs = hour();
      var meridian = hrs < 12 ? "AM":"PM";
      mins = formatting(mins);
      hrs = hrs % 12;
      text(hrs + ":" + mins + " " + meridian, 1060, 250);

      // Month names
      const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var date = new Date();
      var current_date = (months[date.getMonth()]) + " " + date.getDate() + ", " + date.getFullYear();
      text(current_date, 950, 200)

      fill(157, 154, 147); // Grey color
      ellipse(1300, 725, circleRad, circleRad); // Options button
      fill(159, 28, 23);
      ellipse(1425, 725, circleRad, circleRad); // Power Off/On Button

      // Placement of options and power button icons
      image(options_img, 1275, 700);
      options_img.resize(50, 50);
      image(power_img, 1400, 700);
      power_img.resize(50, 50);

      // Highlights power off/on button 
      if(dist(mouseX, mouseY, 1425, 725) < circleRad) {
        fill(255, 0, 0);
        ellipse(1425, 725, circleRad, circleRad); // Highlighted power button
        image(power_img, 1400, 700);
        power_img.resize(50, 50);
      }

      // Highlights options button 
      if(dist(mouseX, mouseY, 1300, 725) < circleRad) {
        fill(169);
        ellipse(1300, 725, circleRad, circleRad); // Highlighted option button
        image(options_img, 1275, 700);
        options_img.resize(50, 50);
      }

      // Highlights calendar button 
      if(onArea(button_x, button_ycal, button_width, button_height)) {
        fill(61, 199, 220);
        rect(button_x, button_ycal, button_width, button_height); // Highlighted calendar button
      }

      // Highlights news button 
      if(onArea(button_x, button_ynews, button_width, button_height)) {
        fill(198, 166, 100);
        rect(button_x, button_ynews, button_width, button_height); // Highlighted calendar button
      }

      // Highlights weather button 
      if(onArea(button_x, button_yweather, button_width, button_height)) {
        fill(161, 35, 18);
        rect(button_x, button_yweather, button_width, button_height); // Highlighted calendar button
      }

      // Highlights health button 
      if(onArea(button_x, button_yhealth, button_width, button_height)) {
        fill(96, 110, 140);
        rect(button_x, button_yhealth, button_width, button_height); // Highlighted calendar button
      }

      // Highlights music button 
      if(onArea(button_x, button_ymusic, button_width, button_height)) {
        fill(146, 78, 125);
        rect(button_x, button_ymusic, button_width, button_height); // Highlighted calendar button
      }
      break;

    case 1:
      fill(159, 28, 23);
      ellipse(1425, 725, circleRad, circleRad); // Power Off/On Button
      image(power_img, 1400, 700);
      power_img.resize(50, 50);

      // Highlights power off/on button 
      if(dist(mouseX, mouseY, 1425, 725) < circleRad) {
        fill(255, 0, 0);
        ellipse(1425, 725, circleRad, circleRad); // Highlighted power button
        image(power_img, 1400, 700);
        power_img.resize(50, 50);
      }
      break;

    case 2:
      fill(255);
      text("Options", 750, 70);

      // A clear rectangle (supports options)
      fill(255, 255, 255, 127);
      clear_rect = rect(200, 150, 432, 594);

      fill(255);
      text("Change Name: ", 240, 210);

      // Highlights back to menu button 
      if(onArea(button_xmenu, button_ymenu, button_width, button_height)) {
        fill(96, 110, 140);
        rect(button_xmenu, button_ymenu, button_width, button_height); // Highlighted menu button
      }
      break;
    case 3:
      fill(255);
      text("Calendar", 750, 70);

      // Clear rectangle
      fill(255, 255, 255, 127);
      clear_rect = rect(200, 150, 432, 594);
      
      if (clicked == false) {
        // Nov. Calendar
        image(calendar_display2, 215, 175);
        calendar_display2.resize(400, 300);
      }
      else if (clicked == true) {
        // Oct. Calendar
        image(calendar_display, 215, 175);
        calendar_display.resize(400, 300);
      }

      // Highlights back to menu button 
      if(onArea(button_xmenu, button_ymenu, button_width, button_height)) {
        fill(96, 110, 140);
        rect(button_xmenu, button_ymenu, button_width, button_height); // Highlighted menu button
      }

      // Highlights month button 
      if(onArea(button_xmenu, button_ymonth, button_width, button_height)) {
        fill(243, 165, 5);
        rect(button_xmenu, button_ymonth, button_width, button_height);
      }
      break;

    case 4:
      fill(255);
      textSize(50);
      text("News", 750, 70);
      // Clear rectangle
      fill(255, 255, 255, 127);
      clear_rect = rect(200, 150, 432, 594);
      fill(255);
      textSize(20);
      text("Hello, " + mir_name + "! " + "Here is your news feed for today.", 210, 200);
      
      // News image
      image(news_feed, 215, 250);
      news_feed.resize(400, 300);

      // Highlights back to menu button 
      if(onArea(button_xmenu, button_ymenu, button_width, button_height)) {
        fill(96, 110, 140);
        rect(button_xmenu, button_ymenu, button_width, button_height); // Highlighted menu button
      }
      break;
    
    case 5:
      fill(255);
      textSize(50);
      text("Weather", 750, 70);
      // Clear rectangle
      fill(255, 255, 255, 127);
      clear_rect = rect(250, 300, 300, 300);
      fill(255);
      textSize(20);
      text("In Lubbock, it is currently 43F.", 260, 350);
      text("Conditions: Partly cloudy", 260, 400);
      
      // cloud image
      image(cloud_img, 490, 365);
      cloud_img.resize(50, 50);

      // Highlights back to menu button 
      if(onArea(button_xmenu2, button_ymenu2, button_width, button_height)) {
        fill(96, 110, 140);
        rect(300, 475, button_width, button_height); // Highlighted menu button
      }
      break;
    case 6:
      fill(255);
      textSize(50);
      text("Health", 750, 70);
      // Clear rectangle
      fill(255, 255, 255, 127);
      clear_rect = rect(220, 300, 375, 410);
      fill(255);
      textSize(20);
      text("You slept 8 hours last night.", 260, 350);
      text("Your weight is: 170 lbs", 260, 400);
    
      // Highlights stat button 
      if(onArea(button_xmenu, button_ymonth, button_width, button_height)) {
        fill(243, 165, 5);
        rect(button_xmenu, button_ymonth, button_width, button_height);
      }
      // Highlights back to menu button 
      if(onArea(button_xmenu, button_ymenu, button_width, button_height)) {
        fill(96, 110, 140);
        rect(button_xmenu, button_ymenu, button_width, button_height); // Highlighted menu button
      }
      break;
    case 7:
      fill(255);
      textSize(50);
      text("Health", 750, 70);
      // Clear rectangle
      fill(255, 255, 255, 127);
      clear_rect = rect(220, 300, 375, 410);
      fill(255);
      textSize(20);
      text("You have taken 500 steps today.", 270, 400);

      // Highlights back button 
      if(onArea(button_xmenu, button_ymonth, button_width, button_height)) {
        fill(96, 110, 140);
        rect(button_xmenu, button_ymonth, button_width, button_height);
      }
      break;
    case 8:
      fill(255);
      textSize(50);
      text("Music", 750, 70);
      // Clear rectangle
      fill(255, 255, 255, 127);
      clear_rect = rect(220, 300, 375, 410);
      fill(255);
      textSize(20);
      text("Song 1: Drop It", 270, 400);

      fill(255, 255, 255, 127);
      ellipse(450, 390, circleRad2, 45);
      ellipse(505, 390, circleRad2, 45);
      // Play and stop buttons
      image(play_img, 425, 370);
      play_img.resize(50, 45);
      image(stop_img, 480, 368);
      stop_img.resize(50, 50);

      // Highlights back button 
      if(onArea(button_xmenu, button_ymenu, button_width, button_height)) {
        fill(96, 110, 140);
        rect(button_xmenu, button_ymenu, button_width, button_height);
      }
      // Highlights play button 
      if((dist(mouseX, mouseY, 450, 390) < 30)) {
        fill(255);
        ellipse(450, 390, circleRad2, 45);
        image(play_img, 425, 370);
        play_img.resize(50, 45);
      }
      // Highlights stop button 
      if((dist(mouseX, mouseY, 480, 368) < 30)) {
        fill(255);
        ellipse(505, 390, circleRad2, 45);
        image(stop_img, 480, 368);
        stop_img.resize(50, 50);
      }
      break;
  }
}

function windowReized() {
  resizeCanvas(windowWidth, windowHeight);
}

function formatting(num) {
  if (int(num) < 10) {
    return "0" + num;
  }
  return num;
}

function mouseClicked() {
  // If turning off the mirror, turn off all elements except the power button
  if ((dist(mouseX, mouseY, 1425, 725) < circleRad) && currentScreen == 0) {
    currentScreen = 1;
    calendarButton.hide();
    newsButton.hide();
    weatherButton.hide();
    healthButton.hide();
    musicButton.hide();
    song.stop();
  }
  // Turning on the mirror to the menu
  else if ((dist(mouseX, mouseY, 1425, 725) < circleRad) && currentScreen == 1) {
    currentScreen = 0;
    calendarButton.show();
    newsButton.show();
    weatherButton.show();
    healthButton.show();
    musicButton.show();
  }

  // Going to options menu
  if ((dist(mouseX, mouseY, 1300, 725) < circleRad) && currentScreen == 0) {
    currentScreen = 2;
    calendarButton.hide();
    newsButton.hide();
    weatherButton.hide();
    healthButton.hide();
    musicButton.hide();
    menuButton.show();
    name_button.show();
    namereset_button.show();
    name_inp.show();
    clear_rect.show();
  }
  // Going back to menu from options
  else if (onArea(button_xmenu, button_ymenu, button_width, button_height) && currentScreen == 2) {
    currentScreen = 0;
    calendarButton.show();
    newsButton.show();
    weatherButton.show();
    healthButton.show();
    musicButton.show();
    menuButton.hide();
    name_button.hide();
    namereset_button.hide();
    name_inp.hide();
    clear_rect.hide();
  }

  // Going to calendar screen
  if (onArea(button_x, button_ycal, button_width, button_height) && currentScreen == 0) {
    currentScreen = 3;
    calendarButton.hide();
    newsButton.hide();
    weatherButton.hide();
    healthButton.hide();
    musicButton.hide();
    menuButton.show();
    monthButton.show();
  }
  // Going to October calendar
  else if (onArea(button_x, button_ymonth, button_width, button_height) && currentScreen == 3 && clicked == false) {
    clicked = true;
    monthButton.hide();
    monthButton2.show();
  }
  // Going back to current calendar
  else if (onArea(button_x, button_ymonth, button_width, button_height) && currentScreen == 3 && clicked == true) {
    clicked = false;
    monthButton.show();
    monthButton2.hide();
  }
  // Going back to menu from calendar
  else if (onArea(button_x, button_ymenu, button_width, button_height) && currentScreen == 3) {
    currentScreen = 0;
    calendarButton.show();
    newsButton.show();
    weatherButton.show();
    healthButton.show();
    musicButton.show();
    menuButton.hide();
    monthButton.hide();
    monthButton2.hide();
  }

  // Go to news
  if (onArea(button_x, button_ynews, button_width, button_height) && currentScreen == 0) {
    currentScreen = 4;
    calendarButton.hide();
    newsButton.hide();
    weatherButton.hide();
    healthButton.hide();
    musicButton.hide();
    menuButton.show();
  }
  // Go back to menu
  else if (onArea(button_x, button_ymenu, button_width, button_height) && currentScreen == 4) {
    currentScreen = 0;
    calendarButton.show();
    newsButton.show();
    weatherButton.show();
    healthButton.show();
    musicButton.show();
    menuButton.hide();
  }

  // Go to weather
  if (onArea(button_x, button_yweather, button_width, button_height) && currentScreen == 0) {
    currentScreen = 5;
    calendarButton.hide();
    newsButton.hide();
    weatherButton.hide();
    healthButton.hide();
    musicButton.hide();
    menuButton2.show();
  }
  // Go back to menu
  else if (onArea(button_xmenu2, button_ymenu2, button_width, button_height) && currentScreen == 5) {
    currentScreen = 0;
    calendarButton.show();
    newsButton.show();
    weatherButton.show();
    healthButton.show();
    musicButton.show();
    menuButton2.hide();
  }

  // Go to health
  if (onArea(button_x, button_yhealth, button_width, button_height) && currentScreen == 0) {
    currentScreen = 6;
    calendarButton.hide();
    newsButton.hide();
    weatherButton.hide();
    healthButton.hide();
    musicButton.hide();
    statsButton.show();
    menuButton.show();
  }
  // See more stats
  else if (onArea(button_x, button_ymonth, button_width, button_height) && currentScreen == 6) {
    currentScreen = 7;
    backButton.show();
    statsButton.hide();
    menuButton.hide();
  }
  // Go back from "more stats"
  else if (onArea(button_x, button_ymonth, button_width, button_height) && currentScreen == 7) {
    currentScreen = 6;
    backButton.hide();
    statsButton.show();
    menuButton.show();
  }
  // Go back to menu
  else if (onArea(button_xmenu, button_ymenu, button_width, button_height) && currentScreen == 6) {
    currentScreen = 0;
    calendarButton.show();
    newsButton.show();
    weatherButton.show();
    healthButton.show();
    musicButton.show();
    menuButton.hide();
    statsButton.hide();
  }

  // Go to music
  if (onArea(button_x, button_ymusic, button_width, button_height) && currentScreen == 0) {
    currentScreen = 8;
    calendarButton.hide();
    newsButton.hide();
    weatherButton.hide();
    healthButton.hide();
    musicButton.hide();
    menuButton.show();
  }
  // Turn song on
  else if(onArea(425, 370, 50, 45) && currentScreen == 8) {
    if(song.isPlaying()) {
      // If song is already playing, do nothing
    }
    else {
      song.play();
    }
  }
  // Turn song off
  else if(onArea(480, 368, 50, 50) && currentScreen == 8) {
    if (song.isPlaying()) {
      song.stop();
    }
  }
  // Go back to menu
  if (onArea(button_xmenu, button_ymenu, button_width, button_height) && currentScreen == 8) {
    currentScreen = 0;
    calendarButton.show();
    newsButton.show();
    weatherButton.show();
    healthButton.show();
    musicButton.show();
    menuButton.hide();
  }
}

function onArea(x, y, w, h) {
  if ((mouseX > x) && (mouseX < x + w) && (mouseY > y) && (mouseY < y + h)) {
    return true;
  } 
  else {
    return false;
  }
}

function changeName() {
  mir_name = name_inp.value();
}

function resetName() {
  mir_name = "Bryan";
}