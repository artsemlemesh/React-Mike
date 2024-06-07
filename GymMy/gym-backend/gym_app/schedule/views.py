from rest_framework import viewsets
from .models import Instructor, Classes, Schedule
from .serializers import InstructorSerializer, ClassesSerializer, ScheduleSerializer
from rest_framework.permissions import IsAuthenticated
# Create your views here.


class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer
    # permission_classes = [IsAuthenticated]


class ClassesViewSet(viewsets.ModelViewSet):
    queryset = Classes.objects.all()
    serializer_class = ClassesSerializer
    # permission_classes = [IsAuthenticated]



class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    # permission_classes = [IsAuthenticated]
