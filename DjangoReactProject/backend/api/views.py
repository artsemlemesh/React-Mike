from django.http import Http404, HttpResponse, JsonResponse
from django.shortcuts import redirect, render
from .models import Books
from .form import BooksForm
from .serializer import BooksSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

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



@api_view(['POST'])
def book_create_view(request, *args, **kwargs):
   serializer = BooksSerializer(data=request.POST or None)
   if serializer.is_valid(raise_exception = True):
      serializer.save()
      return Response(serializer.data)
   return Response({}, status=400)



def book_create_view_pure(request, *args, **kwargs):
    form = BooksForm(request.POST or None)
    next_url = request.POST.get('next') or None
    if form.is_valid():
        obj = form.save(commit=False)	   
        obj.save()
        return redirect(next_url)
        form = BooksForm()	        
    return render(request, 'components/form.html', context={'form': form}) 


def home_view(request, *args, **kwargs): 
   return render(request, 'pages/home.html', context={}, status=200)

