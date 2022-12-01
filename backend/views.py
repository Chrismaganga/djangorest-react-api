from django.shortcuts import render
from django.shortcuts import render
from rest_framework import generics
from backend.serializers import RoomSerializer
from backend.models import Room

class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer