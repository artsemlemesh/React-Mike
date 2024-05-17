from django.shortcuts import render
from rest_framework import generics
from .serializers import NoteSerializer, UserSerializer
from .models import Note
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny

class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer

    # for list view
    def get_queryset(self):
        # user = self.request.user
        return Note.objects.all()#later change


    # for create view
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save() #author=self.request.user - check later
        else:
            print(serializer)
        

class NoteDelete(generics.DestroyAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return Note.objects.all()
    # def get_queryset(self):
    #     user = self.request.user
    #     return Note.objects.filter(author=user)
    

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]