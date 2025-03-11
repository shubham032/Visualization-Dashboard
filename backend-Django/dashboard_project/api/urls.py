from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InsightViewSet

router = DefaultRouter()
router.register(r'insights', InsightViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
