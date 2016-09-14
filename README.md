# lab1
Email IP using Web App and Python

** In this first open lab, we will setup our RPis to email us their IP address and MAC address on boot and once a day (at 5am).** 

Please note that **this assumes that you have already setup your RPi** with Rapsbian (e.g., byfollowing the [setup instructions here](https://github.com/engn1931z/rpiSetupHistory)).

1. Setup a Web App using Google Apps Script that will email the parameters you pass using HTTP GET to a specific email address. 
 - see the [email-web-app.js](https://github.com/engn1931z/lab1/blob/master/email-web-app.js) for detailed instructions and starter code.
 - Make sure to note the URL of your deployed web app for step 3.

2. Install git on your RPI and then clone this repository.
  1. Make sure your RPi is updated: 
  
    ```
    sudo apt-get update
    sudo apt-get dist-upgrade
   ```
  2.  Install git:
  
    ```
    sudo apt-get install git
    ```
  3. Clone this repository:
  
    ```
    git clone https://github.com/engn1931z/lab1
    ```

3. Edit the `ipSender.py` to include your Web App URL

    ```
    nano /home/pi/lab1/ipSender.py
    ```
      - In the line that begins, `webAppURL=`... replace the `REPLACE-THIS-PART` text with your web app URL id (from Step 1 above).
      

4. Text the script with the following command:

    ```python /home/pi/la1/ipSender.py```
      - You should see a four line response that includes your MAC address, IPv4 address, and a note confirming that an email was sent.

5. Setup your script to run automatically using the `crontab` scheduler
  
  1. At the terminal line, input the following command: ```sudo crontab -e```
  2. Select your preferred editor. **Default [2] `nano` is a good option if you are new to Linux**
  3. Then, when the editor launches, add the following two lines to the bottom of your crontab:

    ```
    @reboot sudo /usr/bin/python /home/pi/lab1/ipSender.py
    0 5 * * * sudo /usr/bin/python /home/pi/lab1/ipSender.py
    ```
      - This tells Linux to run the `ipSender.py` script every time it reboots and at 5am each day.
  
6. Reboot your RPi (using ```sudo reboot```) and check for an email in your Gmail account (perhaps in the Sent Folder)
      
