echo "bind $IP" > redis.conf
echo "port 16379" >> redis.conf
killall redis-server
redis-server redis.conf&
