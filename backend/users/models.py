from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager #Cuando se quiere cambiar campos del modelo en django

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
    

    



