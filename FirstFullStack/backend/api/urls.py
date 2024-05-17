from django.urls import path
from .views import *

urlpatterns = [
    path("notes/", NoteListCreate.as_view(), name="note-create"),
    path('notes/delete/<int:pk>', NoteDelete.as_view(), name='delete-note'),
    path('create-note/', NoteListCreate.as_view(), name='note')

]
