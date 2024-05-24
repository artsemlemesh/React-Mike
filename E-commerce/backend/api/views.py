from django.shortcuts import render
from .serializers import ProductSerializer
from rest_framework import generics
from .models import HomeProduct
from rest_framework.pagination import PageNumberPagination


class ProductPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 10


class ProductListCreateView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = HomeProduct.objects.all()
    
    pagination_class = ProductPagination
   
   
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()

    # def get(self, request, format=None):
    #     products = HomeProduct.objects.all()
        
