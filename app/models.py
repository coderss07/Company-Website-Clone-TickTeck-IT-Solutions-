import email
from django.db import models

# Create your models here.

class UserMaster(models.Model):
    firstname = models.CharField(max_length=50,default="")
    lastname = models.CharField(max_length=50,default="")
    contact = models.CharField(max_length=50,default="")
    username=models.CharField(max_length=50,default="")
    password=models.CharField(max_length=50,default="")
   
class Contact(models.Model):
    firstname = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    subject = models.CharField(max_length=150)
    message = models.CharField(max_length=500)
    
    

