from django.urls import path,include
from . import views

urlpatterns = [
          path("",views.IndexPage,name="index"),
          path("registerpage/",views.RegisterPage,name="registerpage"),
          path("registeruser/",views.RegisterUser,name="registeruser"),
          path("loginpage/",views.LoginPage,name="loginpage"),
          path("loginuser/",views.LoginUser,name="loginuser"),
          path("contactpage/",views.ContactPage,name="contactpage"),
          path("contact/",views.ContactUser,name="contact"),
]