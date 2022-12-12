from django.shortcuts import render,redirect
from .models import *
from django.template import RequestContext
from django.http import HttpResponse

# Create your views here.

# index page view

def IndexPage(request):
    return render(request,"app/index.html")


#register page view

def RegisterPage(request):
    return render(request,"app/register.html")


#register user page view

def RegisterUser(request):
    if request.method =="POST":
        firstname=request.POST['firstname']
        lastname=request.POST['lastname']
        contact=request.POST['contact']
        username=request.POST['username']
        password=request.POST['password']
        cpassword=request.POST['cpassword']
        

        # first we validate that user is already registered or not
        employee=UserMaster.objects.filter(password=password)

        if employee:
            message = "User already exist..."
            return render(request,"app/index.html",{'msg':message})
        else:
            if password == cpassword:
                newuser=UserMaster.objects.create(firstname=firstname,lastname=lastname,contact=contact,username=username,password=password)
                message="User register successfully..."
                return render(request,"app/login.html",{'msg':message})
            else:
                message="Password and confirm password Does not match"
                return render(request,"app/register.html",{'msg':message})

#login page view

def LoginPage(request):
    return render(request,"app/login.html")


#login user
def LoginUser(request):
    if request.method == "POST":
        username=request.POST['username']
        password=request.POST['password']

        #checking the email id with database
        employee = UserMaster.objects.get(password=password)
        if employee:
            if employee.password == password:
                return redirect('index')
                # return render(request,"app/index.html")
            else:
                message = "Password does not match"
                return render(request,"app/login.html",{'msg':message})
        else:
            message = "User does not exist" 
            return render(request,"app/login.html",{'msg':message})       


  


def ContactPage(request):
    return render(request,"app/contact.html")    

def ContactUser(request):
    if request.method == "POST":

        name = request.POST['name']
        email = request.POST['email']
        subject = request.POST['subject']
        message = request.POST['message']

        #inserting data into table
        newuser = Contact.objects.create()
        #after insert render on index
        
        newuser = Contact.objects.create(firstname=name,email=email,subject=subject,message=message)

        return redirect('index')




    




                


