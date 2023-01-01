from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListTodo.as_view()),
    path('<int:pk>/', views.DetailTodo.as_view()),
    path('add/', views.AddTodo.as_view()),
    path('remove/<int:pk>/', views.RemoveTodo.as_view()),
    
]
