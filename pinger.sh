#! /bin/sh
last_debian0_ping=$(curl -s -o /dev/null -w '%{http_code}' http://192.168.100.12:4000/status)
last_debian1_ping=$(curl -s -o /dev/null -w '%{http_code}' http://192.168.100.16:4000/status)
history_debian0_ping=$(curl -s -o /dev/null -w '%{http_code}' http://192.168.100.12:4000/status)
history_debian1_ping=$(curl -s -o /dev/null -w '%{http_code}' http://192.168.100.16:4000/status)


echo "$last_debian0_ping" > /home/debian2/last_debian0_ping.txt
echo "$last_debian1_ping" > /home/debian2/last_debian1_ping.txt
echo "$history_debian0_ping" >> /home/debian2/history_debian0_ping.txt
echo "$history_debian1_ping" >> /home/debian2/history_debian1_ping.txt

