from django.shortcuts import render
from .serializers import ProductSerializer
from rest_framework import generics
from .models import HomeProduct

class ProductListCreateView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
   
    def get_queryset(self):
        return HomeProduct.objects.all()
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()

    # def get(self, request, format=None):
    #     products = HomeProduct.objects.all()
        
