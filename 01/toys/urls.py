from django.urls import path
from rest_framework import views

urlpatterns = [
    path('', views.DefaultSchema),
]