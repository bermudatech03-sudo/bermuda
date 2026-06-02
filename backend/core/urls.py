from django.urls import path
from .views import SubmitLeadView, AdminLoginView, LeadListView

urlpatterns = [
    path('leads/', SubmitLeadView.as_view()),
    path('admin-portal/login/', AdminLoginView.as_view()),
    path('admin-portal/leads/', LeadListView.as_view()),
    path('admin-portal/leads/<int:pk>/', LeadListView.as_view()),
]