to use ImageField, have to install pillow (pip3 install pillow)

python3 -m django runserver

After building model:
python3 manage.py makemigrations
python3 manage.py migrate

python3 manage.py createsuperuser
(standard password, no mark)

pip3 install django-mathfilters
pip3 install pillow


username to login to admin page: 'admin'
password: Standard without mark

to clear and reload the database:
python3 manage.py flush
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py shell
THEN, 
import load_script.py
from the shell



MAKE SURE TO TO THIS BEFORE PRODUCTION
comment out urls.py settings that aren't necessary for production
(the last thing added to the last line of urls.py)

If your static files aren't updating somehow, just remove the "static" and "media" directories
from the project directory, and then run python3 manage.py collectstatic again.

If you can't see the images, you have to flush and reload the database as shown above

For production, need to give apache2 user (www-data) the permission to write to the database file
and log.txt files:
sudo chown www-data:www-data .
sudo chown www-data:www-data db.sqlite3




TO get working on cpanel:
downgrade django to 2.0.7 (the sqlite version wasn't high enough on cpanel for newer versions of django)

Had to install pillow as root user
sudo su
pip3 install pillow
This is stupid, should get virtualenv working for future projects

