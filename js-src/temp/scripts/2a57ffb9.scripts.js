"use strict";var jsSrcApp=angular.module("jsSrcApp",["ngResource"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/product/:id",{templateUrl:"views/product.html",controller:"ProductCtrl"}).when("/products",{templateUrl:"views/products.html",controller:"ProductsCtrl"}).when("/product-edit/:id",{templateUrl:"views/product-edit.html",controller:"Product-EditCtrl"}).when("/product-edit",{templateUrl:"views/product-edit.html",controller:"Product-EditCtrl"}).when("/product-edit/:id",{templateUrl:"views/product-edit.html",controller:"Product-EditCtrl"}).when("/products",{templateUrl:"views/products.html",controller:"ProductsCtrl"}).otherwise({redirectTo:"/"})}]);"use strict",jsSrcApp.controller("MainCtrl",["$scope","product",function(a,b){a.products=b.Product.query(),a.product=new b.Product;var c=a;a.delete=function(a){var b=c.product;console.log(b),b.$delete({id:a},function(a){console.log(a.title)})}}]),"use strict",jsSrcApp.controller("ProductCtrl",["$scope","$routeParams","product",function(a,b,c){var d=c.Product;console.log(d),a.product=d.get({id:b.id})}]),"use strict",jsSrcApp.factory("product",["$resource",function(a){var b=a("/product/:id",{id:"@id"},{update:{method:"PUT"}});return{Product:b}}]),"use strict",jsSrcApp.controller("Product-EditCtrl",["$scope","$location","$routeParams","product",function(a,b,c,d){a.title="Add product",a.product=new d.Product;if(c.id){var e=a.product;e.$get({id:c.id},function(b){a.title="Edit: "+b.name}),e.$save()}var f=a;a.save=function(){var a=f.product;a.id?a.$update({id:c.id},function(a){f.title="Edit: "+a.name,f.product=a}):a.$save({id:c.id},function(a){f.title="Edit: "+a.name,f.product=a,console.log("/product/"+a.id)})}}]);