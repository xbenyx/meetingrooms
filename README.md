# Meeting Room Display with RGB

This is a standard Node.js project, so you just need to run `npm ci` to install the dependencies and `npm run dev` to start development mode with live reload. Run `npm run build` and then `npm start` to run the app in production mode.

## Setup & Config - Raspberry Pi configuration

We need to configure the Raspberry Pi in Kiosk Mode. 

1) Open Terminal in Raspberry Pi (Update and Upgrade)

    sudo apt update
    sudo apt install rpi-update

2) Launch chromium in kiosk mode 
2.1)    Path /home/pi/.config/lxsession/LXDE-pi/autostart

Ex: in a README.md :   

    @lxpanel --profile LXDE-pi
    @pcmanfm --desktop --profile LXDE-pi
    @xscreensaver -no-splash
    @point-rpi

    @xset s off  # Disabled screensaver
    @xset /dpms   # Disabled DPMS 
    @xset s noblank # Dont blank the video device
    @chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars --kiosk --incognito http://localhost:8000/lounge    #If page is open in incognito mode cache is ignored




## Setup & Config - NodeJs

1)
1) npm install
2) npm start

add 4 spaces infront of the text 
and github shows a copy button to copy that block

Ex: in a README.md :   

    sudo apt update
    sudo apt install snapd
  
Now The above code has the copy button over it in Github  



