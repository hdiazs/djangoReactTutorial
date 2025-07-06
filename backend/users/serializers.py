from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import *

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id', 
            'email', 
            'password'
        ]
        extra_kwargs = {                         
            'password':{
                'write_only':True
            }            
        }

    def create(self, validated_data): #Usar validated_data hace que se envie la información encriptada
        user = User.objects.create_user(**validated_data)
        return user
