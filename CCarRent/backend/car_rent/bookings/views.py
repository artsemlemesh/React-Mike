from django.shortcuts import render
from rest_framework.response import Response
from .serializers import BookingSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import Booking

# @api_view(['POST'])
# def book_car(request):
#     if request.method == 'POST':
#         serializer = BookingSerializer(data = request.POST)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookingListCreateView(generics.ListCreateAPIView):
    serializer_class = BookingSerializer
    queryset = Booking.objects.all()

    def perform_create(self, serializer):
        serializer.save()
