from .serializers import TodoSerializer
from rest_framework import generics
from django.shortcuts import render
from .models import Todo

# Create your views here.


class ListTodo(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class DetailTodo(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class AddTodo(generics.CreateAPIView):
    queryset = Todo
    serializer_class = TodoSerializer


class RemoveTodo(generics.DestroyAPIView):
    queryset = Todo
    serializer_class = TodoSerializer