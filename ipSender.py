import subprocess # will use to call system command
import re # will use regular expressions to find ip and physical address info
import requests # will use to call HTTP GET for our email web app


# First let's call the 
ifconfigText=subprocess.check_output(["ifconfig"])
hwAddr=re.findall('wlan0.+HWaddr ([0-9a-f:]{17})',ifconfigText)
print hwAddr
ipAddr=re.findall('wlan0.+inet addr:(\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3})',ifconfigText,re.DOTALL)
print ipAddr

# REPLACE FOLLOWING WITH YOUR WEB APP URL
webAppURL="https://script.google.com/macros/s/REPLACE-THIS-PART/exec"
dataToSend={"hwAddr":hwAddr,"ipAddr":ipAddr}
response=requests.get(webAppURL,params=dataToSend)
print response.text
