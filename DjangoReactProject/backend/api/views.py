from django.http import Http404, HttpResponse, JsonResponse
from django.shortcuts import redirect, render
from .models import Books
from .form import BooksForm
from .serializer import BooksSerializer, BookSerializer2
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics



def book_detail_view(request, book_id, *args, **kwargs):
   data = {
       "id" : book_id
   }
   status = 200
   try:
     obj = Books.objects.get(id=book_id)
     data['name'] = obj.name
     data['author'] = obj.author
     data['description'] = obj.description
   except:
     data['message'] = "Not Found"
     status = 404
   return JsonResponse(data,status=status)


def books_list(request, *args, **kwargs):
  blist = Books.objects.all()
  books = [x.serialize() for x in blist]
  data = {
    'response' : books
  }
  return JsonResponse(data)


class BookCreate(generics.ListCreateAPIView):
   serializer_class = BookSerializer2

   def get_queryset(self):
      # user = self.request.user
      return Books.objects.all()


   def perform_create(self, serializer):
      if serializer.is_valid():
         serializer.save()
      else:
         print(serializer)





@api_view(['POST'])
def book_create_view(request, *args, **kwargs):
   serializer = BooksSerializer(data=request.POST or None)
   if serializer.is_valid(raise_exception = True):
      serializer.save()
      return Response(serializer.data)
   return Response({}, status=400)


def book_create_view_pure(request, *args, **kwargs):
    form = BooksForm()
    next_url = request.POST.get('next') or None
    if form.is_valid():  # Check if the form is valid (implies data is bound)
        obj = form.save(commit=False)    
        obj.save()
        return redirect(next_url)
    if request.method == 'POST':
        form = BooksForm(request.POST)  # Update form only on POST requests
    return render(request, 'components/form.html', context={'form': form})  


def home_view(request, *args, **kwargs): 
   return render(request, 'pages/home.html', context={}, status=200)

