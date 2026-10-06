
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    password= serializers.CharField(write_only= True, min_length= 8, style= {"input_type": "password"})
    password2 = serializers.CharField(write_only= True, style={"input_type":"password"})
    class Meta:
        model = User
        fields= ["id", "username","email", "password", "password2"]
        read_only_fields = ["id"]

    def validate(self, attrs):
           if attrs["password"] != attrs["password2"]:
               raise serializers.ValueError({"password2":"Passwords must match"})

           validate_password(attrs["password"])
           return attrs

    def create(self, validated_data):
            validated_data.pop("password2")
            return User.objects.create_user(**validated_data)



           