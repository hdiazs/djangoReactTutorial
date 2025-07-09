from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager #Cuando se quiere cambiar campos del modelo en django

#Cuando se va a generar un servicio de recuperación de contraseñas vía correo electrónico
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import EmailMultiAlternatives
from django.dispatch import receiver
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils.html import strip_tags


class CustomUserManager(BaseUserManager):
    
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('e-mail is required field')
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    
    email = models.EmailField(max_length=254, unique=True) # Este campo se desea ocupar como username

    birthday = models.DateField(null=True, blank=True) #Campo que se usa por si el usuario desea poner su fecha de nacimiento
    
    username = None
    
    objects = CustomUserManager()
    
    USERNAME_FIELD = 'email'
    
    REQUIRED_FIELDS = []
    


# Modelo para enviar emails de solicitu de reset password, solo cuando se tiene una dirección con el servicio de manejo de claves por aplicación
# @receiver(reset_password_token_created)
# def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    
#     sitelink = 'http://localhost:5173/'
#     token = '?token={}'.format(reset_password_token.key)
#     full_link = str(sitelink)+str('password-reset')+str(token)
    
#     context = {
#         'full_link': full_link,
#         'email_address': reset_password_token.user.email,
#     }

#     html_message = render_to_string('backend/email.html', context)
#     plaintext_message = strip_tags(html_message)

#     msg = EmailMultiAlternatives(
#         subject="Password Reset for {title}".format(title=reset_password_token.user.email),

#         body = plaintext_message,

#         from_email="sender@example.com",

#         to=[reset_password_token.user.email]
#     )
#     msg.attach_alternative(html_message, "text/html")
#     msg.send()    



